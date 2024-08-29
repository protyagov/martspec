import React from "react";

import { useReviewContext } from "@/atomic/molecule/review-context";

export default function ReviewDescription() {
    const { text } = useReviewContext();

    return <p className="review__description">{text.description}</p>;
}
