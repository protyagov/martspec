import { useEffect, useState } from "react";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { AppleReviewService } from "@/service/AppleReviewService";
import { TCountryCode } from "@/model/TCodes";

interface IUseReviewDataProps {
    country_code: TCountryCode;
}

const ARR_LENGTH = 3;

export const useReviewData = ({ country_code }: IUseReviewDataProps) => {
    const [reviews, setReviews] = useState<IReviewWithFiller | null>(null);
    const [appId, setAppId] = useState<number | null>(null);

    const { getValidateReviewData } = new AppleReviewService();

    useEffect(() => {
        getValidateReviewData({ linkData: { country_code }, arrLength: ARR_LENGTH }).then((d) => {
            setAppId(d.id);
            setReviews(d.reviews);
        });
    }, []);

    return { reviews, appId };
};
