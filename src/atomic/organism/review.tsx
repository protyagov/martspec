import React from "react";
import { useMediaQuery, useReviewData } from "@/hooks";
import _, { Locale } from "@/i18n/locale";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewLink from "@/atomic/molecule/review-link";
import ReviewCardSlider from "./review-card-slider";

const LG_BOOTSTRAP = 992;

export default function Review() {
    const reviews = useReviewData();
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    if (isMobile) {
        return (
            <section className="review">
                <div className="review__header">
                    <ReviewHead />
                </div>

                <ReviewDescription />
                <ReviewCardSlider reviews={reviews} />

                <div className="review__link-wrapper">
                    <ReviewLink
                        countryCode={Locale.countryCode}
                        rightIcon={
                            <span>
                                <RightArrowIcon />
                            </span>
                        }
                    />
                </div>
            </section>
        );
    }

    return (
        <section className="review">
            <div className="review__header">
                <ReviewHead />

                <ReviewLink
                    countryCode={Locale.countryCode}
                    rightIcon={
                        <span>
                            <RightArrowIcon />
                        </span>
                    }
                />
            </div>

            <ReviewDescription />
            <ReviewCardSlider reviews={reviews} />
        </section>
    );
}
