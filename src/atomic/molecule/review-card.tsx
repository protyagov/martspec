import React from "react";
import StarIcon from "@/atomic/atom/star-icon";
import { useReviewValidatedMsg } from "@/hooks/useReviewValidatedMsg";

interface IReviewCardProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: string;
    rating: string;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function ReviewCard({ reviewerNickname, createdDate, reviewText, rating }: IReviewCardProps) {
    const { reviewTextRef, validatedData } = useReviewValidatedMsg({
        data: { origMsg: reviewText },
        settings: { rows: 8, resizeDelay: 100, endElem: <span key={reviewText}>...</span> },
    });

    return (
        <li className="review-card">
            <header className="review-card__header">
                <div className="review-card__header-main">
                    <h3>{reviewerNickname}</h3>

                    <span className="review-card__header-rating">
                        <StarIcon />
                        {rating},0
                    </span>
                </div>
                <time dateTime={createdDate}>{formatDate(createdDate)}</time>
            </header>

            <p ref={reviewTextRef}>{validatedData.content}</p>
        </li>
    );
}
