import React from "react";
import { useMediaQuery, useReviewData } from "@/hooks";
import _ from "@/i18n/locale";

import ReviewMobile from "./review-mobile";
import ReviewDesktop from "./review-desktop";

const LG_BOOTSTRAP = 992;

export default function Review() {
    const reviews = useReviewData();
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);
    console.log(reviews);

    if (isMobile) {
        return <ReviewMobile reviews={reviews} />;
    }

    return <ReviewDesktop reviews={reviews} />;
}
