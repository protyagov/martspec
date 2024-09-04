import appIds from "@/data/app-ids.json";

import { IReviewData } from "@/model/IReviewData";
import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { IReviewLink } from "@/model/IReviewLink";
import { getFetchReviewsLink } from "@/service/AppleReviewService/LinksService";

// props data
interface ISliceReview {
    validatedData: IReviewWithFiller;
    arrLength: number;
}

// types for service methods
type TGetAppId = (props?: IReviewLink["appId"]) => Promise<number>;
type TGetReviewData = (props: IReviewLink) => Promise<IReviewData>;
type TSliceReviews = (props: ISliceReview) => Promise<IReviewWithFiller>;

// compose types into single interface
interface IReviewService {
    getReviewData: TGetReviewData;
    sliceReviews: TSliceReviews;
    getAppId: TGetAppId;
}

class ReviewService implements IReviewService {
    // slice validate reviews by arrLength
    sliceReviews: TSliceReviews = async ({ validatedData, arrLength }) => validatedData.slice(0, arrLength);

    // get reviews and appId
    getReviewData: TGetReviewData = async (linkData) => {
        const res = await fetch(getFetchReviewsLink(linkData));
        const data: IReviewData = await res.json();

        return data;
    };

    getAppId: TGetAppId = async (appId) => (appId ? appId : await this.#getReviewId());

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
}

export const { getReviewData, getAppId, sliceReviews } = new ReviewService();
