import React, { ReactNode } from "react";
import { useReviewContext } from "./review-context";

interface IReviewFillerCard {
    link: ReactNode;
    posIndex: number;
    bgImage: string;
}

export default function ReviewFillerCard({ link, posIndex, bgImage }: IReviewFillerCard) {
    const { text, themeColor } = useReviewContext();

    return (
        <li
            className="review-card filler-card"
            style={{
                backgroundColor: themeColor,
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="filler-card__wrapper">
                <h3 className="filler-card__header">{text.fillerCard.head[posIndex]}</h3>
                {link}
            </div>
        </li>
    );
}
