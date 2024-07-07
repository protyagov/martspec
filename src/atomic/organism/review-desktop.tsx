import React from "react";
import _, { Locale } from "@/i18n/locale";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewLink from "@/atomic/molecule/review-link";
import ReviewCardSlider from "./review-card-slider";
import { IReviewWithFiller } from "@/data/IReviewWithFiller";

interface IReviewProps {
    reviews: IReviewWithFiller;
}

export default function ReviewDesktop({ reviews }: IReviewProps) {
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
