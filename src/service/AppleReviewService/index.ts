import { ReviewService } from "./ReviewService";
import { SortService } from "./SortService";

// attach services
const { getValidatedReviewData, sliceReviews } = new ReviewService();
const { sortByRating } = new SortService();

// export whole composition
export { getValidatedReviewData, sliceReviews, sortByRating };
