import React from "react";
import { useMediaQuery, useReviewData } from "@/hooks";
import _ from "@/i18n/locale";

import ReviewMobile from "./review-mobile";
import ReviewDesktop from "./review-desktop";

const LG_BOOTSTRAP = 992;

export default function Review() {
    const { reviews, appId } = useReviewData();
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    if (!reviews || !appId) return <></>;

    if (isMobile) {
        return <ReviewMobile id={appId} reviews={reviews} />;
    }

    return <ReviewDesktop id={appId} reviews={reviews} />;
}
