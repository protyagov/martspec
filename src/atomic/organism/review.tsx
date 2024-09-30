import React from "react";

import { useMediaQuery, useReviewData } from "@/hooks";

import { ReviewContext } from "@/atomic/molecule/review-context";
import { ReviewDesktop, ReviewMobile } from "@/atomic/molecule/review-layouts";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewCardSlider from "@/atomic/organism/review-card-slider";
import { AllReviewsLink } from "@/atomic/organism/review-link";

import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IReviewProps {
    headText: string;
    descriptionText: string;
    linkText: string;

    countryCode: TCountryCode;
    languageCode: TLanguageCode;
}

const LG_BOOTSTRAP = 992;
const XXL_BOOTSTRAP = 1400;

// possible move to the prototype folder
export default function Review({ countryCode, languageCode, descriptionText, headText, linkText }: IReviewProps) {
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);
    const isTablet = useMediaQuery(`(max-width: ${XXL_BOOTSTRAP}px)`);
    const { reviews, appId } = useReviewData({ countryCode, languageCode, arrLength: isMobile ? 1 : isTablet ? 2 : 3 });

    if (!reviews || !appId) return <></>;

    return (
        <ReviewContext.Provider
            value={{
                data: { reviews, appId, countryCode },
                text: { head: headText, link: linkText, description: descriptionText },
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
