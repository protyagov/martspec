import { useEffect, useState } from "react";
import { Locale } from "@/i18n/locale";

import { IReviewWithFiller } from "@/data/IReviewWithFiller";
import { fillerArray } from "@/helpers/fillerArray";
import { getReviewData } from "@/helpers/getReviewData";
import { validateReviewData } from "@/helpers/validateReviewData";

const ID_VITAMIN = "1519596234";
const ARR_LENGTH = 3;

export const useReviewData = () => {
    const [reviews, setReviews] = useState<IReviewWithFiller>(fillerArray(ARR_LENGTH));

    useEffect(() => {
        getReviewData({ id: ID_VITAMIN, country_code: Locale.countryCode })
            .then((r) => validateReviewData({ reviewData: r.feed.entry, arrLength: ARR_LENGTH }))
            .then((r) => setReviews(r));
    }, []);

    return reviews;
};
