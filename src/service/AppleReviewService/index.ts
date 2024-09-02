import { ReviewService } from "./ReviewService";
import { SortService } from "./SortService";

// attach services
const { getValidateReviewData, sliceReviews } = new ReviewService();
const { sortByRating } = new SortService();

// export whole composition
export { getValidateReviewData, sliceReviews, sortByRating };
