import { IReview } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";
import { TLanguageCode } from "@/model/TCodes";

// props data
interface ISortBase {
    validatedData: IReviewWithFiller;
}
// types for service methods
type TSortBase<T> = (props: T) => Promise<IReviewWithFiller>;

// compose types into single interface
interface ISortService {
    sortReviews: TSortBase<ISortBase & { lang: TLanguageCode }>;
}

class SortService implements ISortService {
    // Main sorting method
    sortReviews: TSortBase<ISortBase & { lang: TLanguageCode }> = async ({ validatedData, lang }) => {
        return validatedData.sort((a, b) => {
            // Check for fillers and ensure both are IReview
            if (this.#isFiller(a) && this.#isFiller(b)) return 0; // Both are fillers
            if (this.#isFiller(a)) return 1; // Move filler a to the end
            if (this.#isFiller(b)) return -1; // Move filler b to the end

            // Now we can safely treat a and b as IReview
            return this.#compareReviews(a, b, lang);
        });
    };

    // Compare reviews
    #compareReviews(a: IReview, b: IReview, lang: TLanguageCode): number {
        // Compare by rating
        const ratingComparison = this.#compareRatings(a, b);
        if (ratingComparison !== 0) return ratingComparison;

        // If ratings are the same, compare by language support
        const langComparison = this.#compareLanguageSupport(a, b, lang);
        // This will handle placing unsupported languages at the end
        return langComparison;
    }

    // Compare language support
    #compareLanguageSupport(a: IReview, b: IReview, lang: TLanguageCode): number {
        const aLangSupported = this.#isLangSupported(a.content.label, lang);
        const bLangSupported = this.#isLangSupported(b.content.label, lang);

        // If both are supported or both are unsupported, return 0
        if (aLangSupported === bLangSupported) return 0;

        // If a is supported and b is not, a comes first
        if (aLangSupported && !bLangSupported) return -1;

        // If b is supported and a is not, b comes first
        return 1;
    }

    // Compare ratings
    #compareRatings(a: IReview, b: IReview): number {
        const aRating = parseInt(a["im:rating"].label);
        const bRating = parseInt(b["im:rating"].label);

        // Higher rating first
        return bRating - aRating;
    }

    // Check if the item is a filler
    #isFiller(item: IReview | IFiller): item is IFiller {
        return "filler" in item; // Check for the filler property
    }

    // Check if the language is supported
    #isLangSupported(content: string, lang: TLanguageCode): boolean {
        const patterns: Record<TLanguageCode, RegExp> = {
            ar: /[\u0621-\u064A\u0660-\u0669]/, // Arabic characters
            en: /[a-zA-Z]/, // English letters
            ru: /[а-яА-ЯёЁ]/, // Russian characters
            de: /[äöüß]/, // German specific characters
            hi: /[अ-ह]/, // Hindi characters
            es: /[ñáéíóúü]/, // Spanish specific characters
            fr: /[àâçéèêëîïôûù]/, // French specific characters
            zh: /[\u4E00-\u9FFF]/, // Chinese characters (CJK Unified Ideographs)
            ja: /[\u3040-\u30FF\uFF00-\uFFEF]/, // Japanese characters (Hiragana, Katakana, and full-width characters)
            pt: /[ãáâéêíóôú]/, // Portuguese specific characters
            uk: /[єіїґ]/, // Ukrainian specific characters
        };

        const pattern = patterns[lang];
        // Test if the content matches the pattern
        // - safe check, cause if pattern is undefined .test() returns true its incorrect
        return pattern ? pattern.test(content) : false;
    }
}

export const { sortReviews } = new SortService();
