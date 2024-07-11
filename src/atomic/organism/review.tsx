import React from "react";
import { useMediaQuery, useReviewData } from "@/hooks";
import _ from "@/i18n/locale";

import ReviewMobile from "./review-mobile";
import ReviewDesktop from "./review-desktop";

const LG_BOOTSTRAP = 992;

export default function Review() {
    const reviews = useReviewData();
    if (!reviews) return <></>;

    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    return isMobile ? <ReviewMobile reviews={reviews} /> : <ReviewDesktop reviews={reviews} />;
}
