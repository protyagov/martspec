import React from "react";
import StarIcon from "@/atomic/atom/star-icon";

interface IReviewCardProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: string;
    rating: number;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function ReviewCard({ reviewerNickname, createdDate, reviewText, rating }: IReviewCardProps) {
    return (
        <li className="block card-review">
            <header className="card-review-header">
                <div className="card-header-main">
                    <h3>{reviewerNickname}</h3>

                    <span className="card-header-main__rating">
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
