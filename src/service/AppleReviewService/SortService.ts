import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { TLanguageCode } from "@/model/TCodes";

// props data
interface ISortByRating {
    validatedData: IReviewWithFiller;
}
interface ISortByLang {
    validatedData: IReviewWithFiller;
    lang: TLanguageCode;
}

// types for service methods
type TSortByRating = (props: ISortByRating) => Promise<IReviewWithFiller>;
type TSortByLang = (props: ISortByLang) => Promise<IReviewWithFiller>;

// compose types into single interface
interface ISortService {
    sortByRating: TSortByRating;
    sortByLang: TSortByLang;
}

class SortService implements ISortService {
    // sort validated reviews by rating
    sortByRating: TSortByRating = async ({ validatedData }) =>
        validatedData.sort((a, b) => {
            // if a or b is a filler, it returns 0, indicating that the order should not change for those elements
            if ("filler" in a) return 0;
            if ("filler" in b) return NaN;

            // sort reviews by ascending order
            return parseInt(b["im:rating"].label) - parseInt(a["im:rating"].label);
        });

    // sort validated reviews by region lang
    sortByLang: TSortByLang = async ({ validatedData, lang }) =>
        validatedData.sort((a, b) => {
            if ("filler" in a) return 0;
            if ("filler" in b) return 0;

            if (!this.#localeCompareSupportsLocales())
                // Fallback to basic string comparison
                return a > b ? 1 : a < b ? -1 : 0;

            return a.content.label.localeCompare(b.content.label, lang, { ignorePunctuation: true });
        });

    // Check browser support for extended arguments
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#check_browser_support_for_extended_arguments
    #localeCompareSupportsLocales = (): boolean => {
        try {
            "foo".localeCompare("bar", "i");
        } catch (e) {
            return e.name === "RangeError";
        }
        return false;
    };
}

export const { sortByRating, sortByLang } = new SortService();
