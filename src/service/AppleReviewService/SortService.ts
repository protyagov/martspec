import { IReviewWithFiller } from "@/model/IReviewWithFiller";

// props data
interface ISortByRating {
    validatedData: IReviewWithFiller;
}

// types for service methods
type TSortByRating = (props: ISortByRating) => Promise<IReviewWithFiller>;

// compose types into single interface
interface ISortService {
    sortByRating: TSortByRating;
}

class SortService implements ISortService {
    // sort validated reviews by rating
    sortByRating: TSortByRating = async ({ validatedData }) =>
        validatedData.sort((a, b) => {
            // if a or b is a filler, it returns 0, indicating that the order should not change for those elements
            if ("filler" in a) return 0;
            if ("filler" in b) return 0;

            // sort reviews by ascending order
            return parseInt(b["im:rating"].label) - parseInt(a["im:rating"].label);
        });
}

export const { sortByRating } = new SortService();
