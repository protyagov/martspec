import React from "react";

import ReviewCard from "@/atomic/molecule/review-card";
import ReviewFillerCard from "@/atomic/molecule/review-filler-card";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { SendReviewsLink } from "@/atomic/organism/review-link";

export default function ReviewCardSlider() {
    const { data, text } = useReviewContext();

    // 🔧 Выделяем только "настоящие" отзывы
    const realReviews = data.reviews.filter((r) => !("filler" in r));

    let cardsToRender = [];

    if (realReviews.length >= 3) {
        cardsToRender = [
            ...realReviews,
            { filler: true }, 
        ];
    } else {
        // 🔧 <3: добиваем до 3 филлерами
        const fillerCount = 3 - realReviews.length;
        const fillerCards = Array.from({ length: fillerCount }, () => ({ filler: true }));
        cardsToRender = [...realReviews, ...fillerCards];
    }

    return (
        <ul className="review__list">
            {cardsToRender.map((r, i) => {
                if ("filler" in r) {
                    return (
                        <ReviewFillerCard
                            link={<SendReviewsLink />}
                            posIndex={i}
                            key={text.fillerCard.head[i] ?? `filler-${i}`} 
                        />
                    );
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
