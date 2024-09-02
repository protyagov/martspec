import appIds from "@/data/app-ids.json";

import { IReviewData } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";
import { ILink } from "@/service/AppleReviewService/LinksService";
import { getReviewData, validateReviewData } from "@/service/AppleReviewService/ReviewService";

// props data
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}
interface IGetValidateReviewData {
    linkData: Partial<ILink>;
    arrLength: IValidateReviewData["arrLength"];
}
interface ISliceReview {
    validatedData: IReviewWithFiller;
    arrLength: number;
}
interface ISortByRating {
    validatedData: IReviewWithFiller;
}

// return data
interface IData<D> {
    data: D;
    id: number;
}

// types for review methods
type TGetValidateReviewData = (props: IGetValidateReviewData) => Promise<IData<IReviewWithFiller>>;
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
        const { data, id } = await getReviewData(linkData);
        const validateReviews = await validateReviewData({ reviewData: data.feed.entry, arrLength });

        return { data: validateReviews, id };
    };
}
