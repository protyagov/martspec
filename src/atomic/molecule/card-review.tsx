import React from "react";
import StarIcon from "@/atomic/atom/star-icon";

interface ICardReviewProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: string;
    rating: number;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function CardReview({ reviewerNickname, createdDate, reviewText, rating }: ICardReviewProps) {
    return (
        <section>
            <header>
                <div>
                    <h3>{reviewerNickname}</h3>

                    <div>
                        <StarIcon />

                        <span>{rating},0</span>
                    </div>
                </div>
                <time dateTime={createdDate}>{formatDate(createdDate)}</time>
            </header>

            <p>{reviewText}</p>
        </section>
    );
}
