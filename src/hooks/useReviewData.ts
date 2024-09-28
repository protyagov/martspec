import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import * as AppleReviewService from "@/service/AppleReviewService";
import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IUseReviewDataProps {
    countryCode: TCountryCode;
    languageCode: TLanguageCode;
    arrLength?: number;
}

export const useReviewData = ({ languageCode = "en", countryCode = "us", arrLength = 3 }: IUseReviewDataProps) => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);
    const [appId, setAppId] = useState<number | null>(null);

    useEffect(() => {
        AppleReviewService.getAppId()
            .then((i) => (setAppId(i), i))
            .then((i) => AppleReviewService.getReviewData({ appId: i, countryCode }))
            .then((d) => AppleReviewService.validateReviewData({ reviewData: d.feed.entry, arrLength }))
            .then((r) => AppleReviewService.sortByRating({ validatedData: r }))
            .then((r) => AppleReviewService.sliceReviews({ validatedData: r, arrLength }))
            .then((r) => AppleReviewService.sortByLang({ validatedData: r, lang: languageCode }))
            .then((r) => setReviews(r));
    }, [arrLength]);

    return { reviews, appId };
};
