import React from "react";

import { Locale } from "@/i18n/locale";
import { useMediaQuery, useReviewData } from "@/hooks";

import { ReviewDesktop, ReviewMobile } from "./review-layouts";
import ReviewHead from "../molecule/review-head";
import ReviewDescription from "../molecule/review-description";
import ReviewLink from "../molecule/review-link";
import ReviewCardSlider from "./review-card-slider";

const LG_BOOTSTRAP = 992;

export default function Review() {
    const { reviews, appId } = useReviewData();
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    if (!reviews || !appId) return <></>;

    if (isMobile) {
        return (
            <ReviewMobile
                head={<ReviewHead />}
                description={<ReviewDescription />}
                link={<ReviewLink id={appId} countryCode={Locale.countryCode} />}
                slider={<ReviewCardSlider reviews={reviews} />}
            />
        );
    }

    return (
        <ReviewDesktop
            head={<ReviewHead />}
            description={<ReviewDescription />}
            link={<ReviewLink id={appId} countryCode={Locale.countryCode} />}
            slider={<ReviewCardSlider reviews={reviews} />}
        />
    );
}
