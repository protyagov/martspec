import React from "react";

import ReviewCard from "@/atomic/molecule/review-card";
import ReviewFillerCard from "@/atomic/molecule/review-filler-card";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { validateReviewMsg } from "@/service/AppleReviewService";

export default function ReviewCardSlider() {
    const { data } = useReviewContext();

    return (
        <ul className="review__list">
            {data.reviews.map((r) => {
                if ("filler" in r) {
                    return <ReviewFillerCard />;
                }

                return (
                    <ReviewCard
                        key={r.id.label}
                        createdDate={r.updated.label}
                        reviewText={r.content.validatedLabel.data}
                        reviewerNickname={r.author.name.label}
                        rating={r["im:rating"].label}
                    />
                );
            })}
        </ul>
    );
}
