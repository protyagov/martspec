import React from "react";
import _, { Locale } from "@/i18n/locale";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewLink from "@/atomic/molecule/review-link";
import ReviewCardSlider from "./review-card-slider";
import { IReviewData } from "@/data/IReviewData";

interface IReviewProps {
    reviews: IReviewData["feed"]["entry"];
}

export default function ReviewMobile({ reviews }: IReviewProps) {
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
