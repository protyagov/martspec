import React from "react";
import { useReviewContext } from "./review-context";

export default function ReviewDescription() {
    const { descriptionText } = useReviewContext();

    return <p className="review__description">{descriptionText}</p>;
}
