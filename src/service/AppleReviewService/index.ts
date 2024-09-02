import appIds from "@/data/app-ids.json";

import { IDataWithAppId, IReviewData } from "@/model/IReviewData";
import { IReviewLink } from "@/model/IReviewLink";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";
import { getReviewData, validateReviewData } from "@/service/AppleReviewService/ReviewService";

// props data
interface IGetValidateReviewData {
    linkData: Partial<IReviewLink>;
    arrLength: number;
}
interface ISliceReview {
    validatedData: IReviewWithFiller;
    arrLength: number;
}
interface ISortByRating {
    validatedData: IReviewWithFiller;
}

// types for review methods
type TGetValidateReviewData = (props: IGetValidateReviewData) => Promise<IDataWithAppId<IReviewWithFiller>>;
type TSliceReviews = (props: ISliceReview) => Promise<IReviewWithFiller>;
type TSortByRating = (props: ISortByRating) => Promise<IReviewWithFiller>;

// compose types into single interface
interface IAppleReviewService {
    getValidateReviewData: TGetValidateReviewData;
    sliceReviews: TSliceReviews;
    sortByRating: TSortByRating;
}

export class AppleReviewService implements IAppleReviewService {
    // sort validated reviews by rating
    sortByRating: TSortByRating = async ({ validatedData }) =>
        validatedData.sort((a, b) => {
            if ("filler" in a) return NaN;
            if ("filler" in b) return NaN;

            return parseInt(b["im:rating"].label) - parseInt(a["im:rating"].label);
        });

    sliceReviews: TSliceReviews = async ({ validatedData, arrLength }) => validatedData.slice(0, arrLength);

    // get validated reviews and appId
    getValidateReviewData: TGetValidateReviewData = async ({ linkData, arrLength }) => {
        const { data, appId } = await getReviewData(linkData);
        const validateReviews = await validateReviewData({ reviewData: data.feed.entry, arrLength });

        return { data: validateReviews, appId };
    };
}
