import React from "react";

interface IReviewHeadProps {
    text: string;
}

export default function ReviewHead({ text }: IReviewHeadProps) {
    return <h2>{text}</h2>;
}
