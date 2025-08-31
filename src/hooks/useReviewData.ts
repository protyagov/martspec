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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);

        getReviewData({ appId, countryCode: codes.countryCode || "us" })
            .then((d) => validateReviewData({ reviewData: d.feed.entry })) 
            .then((r) => sortReviews({ validatedData: r, lang: codes.languageCode || "en" }))
            .then((r) => {
                if (isMounted) {
                    setReviews(r);
                    setIsLoading(false);
                }
            })
            .catch(() => {
                if (isMounted) {
                    validateReviewData({ reviewData: [] })
                        .then((r) => {
                            setReviews(r);
                            setIsLoading(false);
                        });
                }
            });

        return () => {
            isMounted = false;
        };
    }, [appId, codes.countryCode, codes.languageCode]);

    return { reviews, isLoading };
};
