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
    id: number;
}

export default function ReviewMobile({ reviews, id }: IReviewProps) {
    return (
        <section>
            <div className="ms-s-offset review">
                <div className="review__header">
                    <ReviewHead />
                </div>

                <ReviewDescription />
                <ReviewCardSlider reviews={reviews} />

                <div className="review__link-wrapper">
                    <ReviewLink
                        id={id}
                        countryCode={Locale.countryCode}
                        rightIcon={
                            <span>
                                <RightArrowIcon />
                            </span>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
