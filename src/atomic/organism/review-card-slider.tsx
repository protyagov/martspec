import { IReviewData } from "@/data/IReviewData";
import React from "react";
import ReviewCard from "../molecule/review-card";

interface IReviewCardSliderProps {
    reviews: IReviewData["feed"]["entry"];
}

export default function ReviewCardSlider({ reviews }: IReviewCardSliderProps) {
    return (
        <ul className="review__list">
            {reviews &&
                Array.isArray(reviews) &&
                reviews.map((r) => (
                    <ReviewCard
                        key={r.link.attributes.href}
                        createdDate={r.updated.label}
                        reviewText={r.content.label}
                        reviewerNickname={r.author.name.label}
                        rating={r["im:rating"].label}
                    />
                ))}
        </ul>
    );
}
