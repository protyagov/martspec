import React from "react";

interface IReviewDescriptionProps {
    text: string;
}

export default function ReviewDescription({ text }: IReviewDescriptionProps) {
    return <p className="review__description">{text}</p>;
}
