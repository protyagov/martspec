import { IReviewData } from "@/data/IReviewData";
import { IReviewWithFiller } from "@/data/IReviewWithFiller";
import { fillerArray } from "./fillerArray";

interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}

type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;

// with validation it always returns an array with review or filler data
export const validateReviewData: TValidateReviewData = async ({ reviewData, arrLength }) => {
    // if no data return fillers
    if (!reviewData) {
        return fillerArray(arrLength);
    }

    // if review is a single object return data + fillers
    if (!Array.isArray(reviewData)) {
        return [reviewData, ...fillerArray(arrLength - 1)];
    }

    // if review is array but length less than needed return data + fillers
    if (reviewData.length < arrLength) {
        return [...reviewData, ...fillerArray(arrLength - reviewData.length)];
    }

    // by default, return a certain number of reviews
    return reviewData.slice(0, arrLength);
};
