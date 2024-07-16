import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/data/IReviewWithFiller";
import { getReviewData } from "@/helpers/getReviewData";
import { validateReviewData } from "@/helpers/validateReviewData";

const ARR_LENGTH = 3;

export const useReviewData = () => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);
    const [appId, setAppId] = useState<number | null>(null);

    useEffect(() => {
        getReviewData()
            .then((r) => {
                if (r.data) {
                    setAppId(r.id);

                    return validateReviewData({ reviewData: r.data.feed.entry, arrLength: ARR_LENGTH });
                }

                return null;
            })
            .then((r) => setReviews(r));
    }, []);

    return { reviews, appId };
};
