import { IReviewData } from "@/model/IReviewData";
import appIds from "@/data/app-ids.json";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";
import { TCountryCode } from "@/model/TCodes";
import { Locale } from "@/i18n/locale";

interface IGetLink {
    id: number;
    country_code?: TCountryCode;
    page?: number;
    data_type?: "xml" | "json";
}

type TGetReviewData = (props?: Partial<IGetLink>) => Promise<{ data: IReviewData; id: number }>;

interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}

type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;

interface IAppleReviewService {
    validateReviewData: TValidateReviewData;
    getReviewData: TGetReviewData;
}

export class AppleReviewService implements IAppleReviewService {
    // with validation it always returns an array with review or filler data
    validateReviewData: TValidateReviewData = async ({ reviewData, arrLength }) => {
        // if no data return fillers
        if (!reviewData) {
            return this.#fillerArray(arrLength);
        }

        // if review is a single object return data + fillers
        if (!Array.isArray(reviewData)) {
            return [reviewData, ...this.#fillerArray(arrLength - 1)];
        }

        // if review is array but length less than needed return data + fillers
        if (reviewData.length < arrLength) {
            return [...reviewData, ...this.#fillerArray(arrLength - reviewData.length)];
        }

        // by default, return a certain number of reviews
        return reviewData.slice(0, arrLength);
    };

    getReviewData: TGetReviewData = async (linkData) => {
        const id = await this.#getReviewId();
        const res = await fetch(this.#getReviewLink({ id, ...linkData }));
        const data: IReviewData = await res.json();

        return { data, id };
    };

    #getReviewId = async (): Promise<number> => {
        const pathname = new URL(document.URL).pathname;
        const pathnameItems = pathname.split("/");

        let key: keyof typeof appIds;
        for (key in appIds) {
            if (pathnameItems.includes(key)) return appIds[key];
        }

        throw new Error(
            `ID NOT FOUND, pathnameItems:${JSON.stringify(pathnameItems)}, appIds: ${JSON.stringify(appIds)}`
        );
    };

    #getReviewLink = ({ id, data_type = "json", country_code = Locale.countryCode, page = 1 }: IGetLink) =>
        `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;

    #fillerObject = (): IFiller => ({ filler: true });

    #fillerArray = (arrLength: number) => Array(arrLength).fill(this.#fillerObject());
}
