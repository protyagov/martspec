import React from "react";

interface ICardReviewProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: string;
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function CardReview({ reviewerNickname, createdDate, reviewText }: ICardReviewProps) {
    return (
        <section>
            <header>
                <h3>{reviewerNickname}</h3>
                <time dateTime={createdDate}>{formatDate(createdDate)}</time>
            </header>

            <p>{reviewText}</p>
        </section>
    );
}
