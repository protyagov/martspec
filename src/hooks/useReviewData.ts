import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import * as AppleReviewService from "@/service/AppleReviewService";
import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IUseReviewDataProps {
    codes: {
        countryCode: TCountryCode;
        languageCode: TLanguageCode;
    };

    arrLength?: number;
    customAppId?: number;
}

export const useReviewData = ({ codes, arrLength = 3, customAppId }: IUseReviewDataProps) => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);
    const appId = customAppId || AppleReviewService.getAppId();

    useEffect(() => {
        AppleReviewService.getReviewData({ appId, countryCode: codes.countryCode || "us" })
            .then((d) => AppleReviewService.validateReviewData({ reviewData: d.feed.entry, arrLength }))
            .then((r) => AppleReviewService.sortReviews({ validatedData: r, lang: codes.languageCode || "en" }))
            .then((r) => setReviews(r));
    }, []);

    return { reviews, appId };
};
