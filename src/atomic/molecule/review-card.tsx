import React, { ReactNode } from "react";
import StarIcon from "@/atomic/atom/star-icon";

interface IReviewCardProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: ReactNode;
    rating: string;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function ReviewCard({ reviewerNickname, createdDate, reviewText, rating }: IReviewCardProps) {
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

            <p>{reviewText}</p>
        </li>
    );
}
