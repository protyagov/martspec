import { IReview } from "./IReviewData";

export type IReviewWithFiller = Array<IReview | IFiller>;

// modify this interface when start work on EmptyCard component
export interface IFiller {
    filler: true;
}
