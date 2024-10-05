import React from "react";

import { useReviewContext } from "@/atomic/molecule/review-context";

export default function ReviewHead() {
    const { text } = useReviewContext();

    return <h2>{text.head}</h2>;
}
