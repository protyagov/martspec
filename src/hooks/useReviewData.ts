import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import * as AppleReviewService from "@/service/AppleReviewService";
import { TCountryCode } from "@/model/TCodes";

interface IUseReviewDataProps {
    countryCode: TCountryCode;
}

const ARR_LENGTH = 3;

export const useReviewData = ({ countryCode }: IUseReviewDataProps) => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);
    const [appId, setAppId] = useState<number | null>(null);

    const { getValidatedReviewData, sliceReviews, sortByRating } = AppleReviewService;

    useEffect(() => {
        getValidatedReviewData({ linkData: { countryCode }, arrLength: ARR_LENGTH })
            .then((d) => (setAppId(d.appId), d.data))
            .then((r) => sortByRating({ validatedData: r }))
            // use validate by len here to check it out
            .then((r) => sliceReviews({ validatedData: r, arrLength: ARR_LENGTH }))
            .then((r) => setReviews(r));
    }, []);

    return { reviews, appId };
};
