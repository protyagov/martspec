import React from "react";
import { useReviewContext } from "./review-context";

export default function ReviewHead() {
    const { headText } = useReviewContext();

    return <h2>{headText}</h2>;
}
