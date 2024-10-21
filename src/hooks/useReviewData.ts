import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { getReviewData, validateReviewData, sortReviews } from "@/service/AppleService";
import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IUseReviewDataProps {
    appId: number;
    arrLength?: number;

    codes: {
        countryCode: TCountryCode;
        languageCode: TLanguageCode;
    };
}

export const useReviewData = ({ codes, arrLength = 3, appId }: IUseReviewDataProps) => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);

    useEffect(() => {
        getReviewData({ appId, countryCode: codes.countryCode || "us" })
            .then((d) => validateReviewData({ reviewData: d.feed.entry, arrLength }))
            .then((r) => sortReviews({ validatedData: r, lang: codes.languageCode || "en" }))
            .then((r) => setReviews(r))
            .catch(() => validateReviewData({ reviewData: [], arrLength }).then((r) => setReviews(r)));
    }, []);

    return { reviews };
};
