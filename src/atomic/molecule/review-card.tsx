import React from "react";
import StarIcon from "@/atomic/atom/star-icon";
import RightArrowIcon from "../atom/right-arrow-icon";
import { useReviewValidatedMsg } from "@/hooks/useReviewValidatedMsg";
import { useReviewContext } from "./review-context";
import { useMediaQuery } from "@/hooks";

interface IReviewCardProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: string;
    rating: string;
    bgImage: string;
    reviewLink: string;
    readMoreText: string; 
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function ReviewCard({ reviewerNickname, createdDate, reviewText, rating, bgImage, reviewLink, readMoreText }: IReviewCardProps) {
    const { themeColor } = useReviewContext();
    const isMobile = useMediaQuery("(max-width: 991px)");
    const { reviewTextRef, validatedData } = useReviewValidatedMsg({
        data: { origMsg: reviewText },
        settings: { rows: 8, resizeDelay: 100, endElem: <span key={reviewText}>...</span> },
    });

    return (
        <li className="review-card" style={{ backgroundColor: isMobile ? 'transparent' : themeColor }}>
            {!isMobile && <div className="review-card__bg" style={{ backgroundImage: `url(${bgImage})` }} />}
            <header className="review-card__header">
                <div className="review-card__header-main">
                    <h3>{reviewerNickname}</h3>

                    <span className="review-card__header-rating">
                        <StarIcon />
                        {rating},0
                    </span>
                </div>
                <time dateTime={createdDate}>{formatDate(createdDate)}</time>
            </header>

            <div className="review-card__content">
                <p ref={reviewTextRef}>{validatedData.content}</p>
                {validatedData.overflowFlag && (
                    <a 
                        href={reviewLink}
                        className="review-card__read-more"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: themeColor }}
                    >
                        <span>{readMoreText}</span>
                        <RightArrowIcon style={{ marginLeft: "0.5em", verticalAlign: "middle" }} />
                    </a>
                )}
            </div>
        </li>
    );
}
