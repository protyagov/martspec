import React from "react";
import ReviewCard from "../molecule/review-card";
import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import ReviewFillerCard from "../molecule/review-filler-card";

interface IReviewProps {
    reviews: IReviewWithFiller;
}

export default function ReviewCardSlider({ reviews }: IReviewProps) {
    return (
        <ul className="review__list">
            {reviews.map((r) => {
                if ("filler" in r) {
                    return <ReviewFillerCard />;
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
