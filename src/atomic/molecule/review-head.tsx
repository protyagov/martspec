import React from "react";
import _ from "@/i18n/locale";

interface IReviewHeadProps {
    text: string;
}

export default function ReviewHead({ text }: IReviewHeadProps) {
    return <h2>{text}</h2>;
}
