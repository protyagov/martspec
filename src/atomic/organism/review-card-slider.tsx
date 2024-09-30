import React from "react";

import ReviewCard from "@/atomic/molecule/review-card";
import ReviewFillerCard from "@/atomic/molecule/review-filler-card";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { SendReviewsLink } from "@/atomic/organism/review-link";

export default function ReviewCardSlider() {
    const { data, text } = useReviewContext();

    return (
        <ul className="review__list">
            {data.reviews.map((r, i) => {
                if ("filler" in r) {
                    return <ReviewFillerCard link={<SendReviewsLink />} posIndex={i} key={text.fillerCard.head[i]} />;
                }

                return (
                    <ReviewCard
                        key={r.id.label}
                        createdDate={r.updated.label}
                        reviewText={r.content.label}
                        reviewerNickname={r.author.name.label}
                        rating={r["im:rating"].label}
                    />
                );
            })}
        </ul>
    );
}
