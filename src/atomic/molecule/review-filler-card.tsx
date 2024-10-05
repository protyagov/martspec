import React, { ReactNode } from "react";
import { useReviewContext } from "./review-context";

interface IReviewFillerCard {
    link: ReactNode;
    posIndex: number;
}

export default function ReviewFillerCard({ link, posIndex }: IReviewFillerCard) {
    const { text } = useReviewContext();

    return (
        <li className="review-card filler-card">
            <div className="filler-card__wrapper">
                <h3 className="filler-card__header">{text.fillerCard.head[posIndex]}</h3>
                {link}
            </div>
        </li>
    );
}
