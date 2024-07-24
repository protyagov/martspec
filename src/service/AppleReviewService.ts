import appIds from "@/data/app-ids.json";

import { IReviewData } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";
import { TCountryCode } from "@/model/TCodes";

// props interfaces
interface IGetLink {
    id: number;
    country_code?: TCountryCode;
    page?: number;
    data_type?: "xml" | "json";
}
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}
interface IGetValidateReviewData {
    linkData?: Partial<IGetLink>;
    arrLength: IValidateReviewData["arrLength"];
}

// review models
interface IReviewWithAppId {
    data: IReviewData;
    id: number;
}
interface IReviewFillerWithAppId {
    reviews: IReviewWithFiller;
    id: number;
}

// types for review methods
type TGetReviewData = (props?: Partial<IGetLink>) => Promise<IReviewWithAppId>;
type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;
type TGetValidateReviewData = (props: IGetValidateReviewData) => Promise<IReviewFillerWithAppId>;

// compose type into single interface
interface IAppleReviewService {
    getValidateReviewData: TGetValidateReviewData;
}

export class AppleReviewService implements IAppleReviewService {
    // get validated reviews and appId
    getValidateReviewData: TGetValidateReviewData = async ({ linkData, arrLength }) => {
        const { data, id } = await this.#getReviewData(linkData);
        const validateReviews = await this.#validateReviewData({ reviewData: data.feed.entry, arrLength });

        return { reviews: validateReviews, id };
    };

    // validation always returns an array with review or filler data
    #validateReviewData: TValidateReviewData = async ({ reviewData, arrLength }) => {
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

    // get reviews and appId
    #getReviewData: TGetReviewData = async (linkData) => {
        const id = linkData.id ? linkData.id : await this.#getReviewId();
        const res = await fetch(this.#getReviewLink({ id, ...linkData }));
        const data: IReviewData = await res.json();

        return { data, id };
    };

    // get id from url path
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

    // create fetch link
    #getReviewLink = ({ id, data_type = "json", country_code = "us", page = 1 }: IGetLink) =>
        `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;

    // create filler object
    #fillerObject = (): IFiller => ({ filler: true });

    // create an array of fillers to be used in the validateReviewData
    #fillerArray = (arrLength: number) => Array(arrLength).fill(this.#fillerObject());
}
