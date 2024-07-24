import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { AppleReviewService } from "@/service/AppleReviewService";

const ARR_LENGTH = 3;

export const useReviewData = () => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);
    const [appId, setAppId] = useState<number | null>(null);
    const { getReviewData, validateReviewData } = new AppleReviewService();

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
