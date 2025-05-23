import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { getReviewData, validateReviewData, sortReviews } from "@/service/AppleService";
import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IUseReviewDataProps {
    appId: number;
    codes: {
        countryCode: TCountryCode;
        languageCode: TLanguageCode;
    };
}

export const useReviewData = ({ codes, appId }: IUseReviewDataProps) => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);

    useEffect(() => {
        getReviewData({ appId, countryCode: codes.countryCode || "us" })
            .then((d) => validateReviewData({ reviewData: d.feed.entry })) 
            .then((r) => sortReviews({ validatedData: r, lang: codes.languageCode || "en" }))
            .then((r) => setReviews(r))
            .catch(() =>
                validateReviewData({ reviewData: [] }) 
                    .then((r) => setReviews(r))
            );
    }, []);

    return { reviews };
};
