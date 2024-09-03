import appIds from "@/data/app-ids.json";

import { IDataWithAppId, IReviewData } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";
import { IReviewLink } from "@/model/IReviewLink";
import { getFetchReviewsLink } from "@/service/AppleReviewService/LinksService";

// props data
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}
interface ISliceReview {
    validatedData: IReviewWithFiller;
    arrLength: number;
}
interface IGetValidateReviewData {
    linkData: Partial<IReviewLink>;
    arrLength: number;
}

// types for service methods
type TGetReviewData = (props: Partial<IReviewLink>) => Promise<IDataWithAppId<IReviewData>>;
type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;
type TGetValidateReviewData = (props: IGetValidateReviewData) => Promise<IDataWithAppId<IReviewWithFiller>>;
type TSliceReviews = (props: ISliceReview) => Promise<IReviewWithFiller>;

// compose types into single interface
interface IReviewService {
    getValidatedReviewData: TGetValidateReviewData;
    sliceReviews: TSliceReviews;
}

export class ReviewService implements IReviewService {
    // get validated reviews and appId
    getValidatedReviewData: TGetValidateReviewData = async ({ linkData, arrLength }) => {
        const { data, appId } = await this.#getReviewData(linkData);
        const validateReviews = await this.#validateReviewData({ reviewData: data.feed.entry, arrLength });

        return { data: validateReviews, appId };
    };

    // slice validate reviews by arrLength
    sliceReviews: TSliceReviews = async ({ validatedData, arrLength }) => validatedData.slice(0, arrLength);

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

        // by default, return reviews
        return reviewData;
    };

    // get reviews and appId
    #getReviewData: TGetReviewData = async (linkData) => {
        const appId = linkData.appId ? linkData.appId : await this.#getReviewId();
        const res = await fetch(getFetchReviewsLink({ appId, ...linkData }));
        const data: IReviewData = await res.json();

        return { data, appId };
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

    // create filler object
    #fillerObject = (): IFiller => ({ filler: true });

    // create an array of fillers to be used in the validateReviewData
    #fillerArray = (arrLength: number) => Array(arrLength).fill(this.#fillerObject());
}
