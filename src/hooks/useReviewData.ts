import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/data/IReviewWithFiller";
import { getReviewData } from "@/helpers/getReviewData";
import { validateReviewData } from "@/helpers/validateReviewData";

const ARR_LENGTH = 3;

export const useReviewData = () => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);

    useEffect(() => {
        getReviewData()
            .then((r) => (r.data ? validateReviewData({ reviewData: r.data.feed.entry, arrLength: ARR_LENGTH }) : null))
            .then((r) => setReviews(r));
    }, []);

    return reviews;
};
