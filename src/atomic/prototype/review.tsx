import React from "react";

import { useMediaQuery, useReviewData } from "@/hooks";

import { IReviewContextText, ReviewContext } from "@/atomic/molecule/review-context";
import { ReviewDesktop, ReviewMobile } from "@/atomic/molecule/review-layouts";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewCardSlider from "@/atomic/organism/review-card-slider";
import { AllReviewsLink } from "@/atomic/organism/review-link";

import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IReview {
    text: IReviewContextText;
    codes: {
        countryCode: TCountryCode;
        languageCode: TLanguageCode;
    };
    appId: number;
}

const LG_BOOTSTRAP = 991;
const XXL_BOOTSTRAP = 1400;

export default function Review({ text, appId, codes }: IReview) {
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);
    const isTablet = useMediaQuery(`(max-width: ${XXL_BOOTSTRAP}px)`);

    const arrLength = isMobile ? 1 : isTablet ? 2 : 3;
    const { reviews } = useReviewData({
        codes,
        arrLength,
        appId,
    });

    if (!reviews || !appId) return <></>;

    return (
        <ReviewContext.Provider
            value={{
                data: {
                    reviews: reviews.slice(0, arrLength),
                    appId,
                    countryCode: codes.countryCode,
                },
                text,
            }}
        >
            {isMobile ? (
                <ReviewMobile
                    head={<ReviewHead />}
                    description={<ReviewDescription />}
                    link={<AllReviewsLink />}
                    slider={<ReviewCardSlider />}
                />
            ) : (
                <ReviewDesktop
                    head={<ReviewHead />}
                    description={<ReviewDescription />}
                    link={<AllReviewsLink />}
                    slider={<ReviewCardSlider />}
                />
            )}
        </ReviewContext.Provider>
    );
}
