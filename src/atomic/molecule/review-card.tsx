import React from "react";
import StarIcon from "@/atomic/atom/star-icon";
import RightArrowIcon from "../atom/right-arrow-icon";
import { useReviewValidatedMsg } from "@/hooks/useReviewValidatedMsg";
import { useReviewContext } from "./review-context";
import { useMediaQuery } from "@/hooks";
import TextLinkArrow from "@/atomic/molecule/text-link-arrow";

interface IReviewCardProps {
    reviewerNickname: string;
    createdDate: string;
    reviewText: string;
    rating: string;
    bgImage: string;
    reviewLink: string;
    readMoreText: string;
    hasUnderlineHover?: boolean
}

const formatDate = (date: string) => new Date(date).toLocaleDateString("ru-RU");

export default function ReviewCard({ reviewerNickname, createdDate, reviewText, rating, bgImage, reviewLink, readMoreText,  hasUnderlineHover = true, }: IReviewCardProps & { hasUnderlineHover?: boolean }) {
    const { themeColor } = useReviewContext();
    const isMobile = useMediaQuery("(max-width: 991px)");
    const { reviewTextRef, validatedData } = useReviewValidatedMsg({
        data: { origMsg: reviewText },
        settings: { rows: 8, resizeDelay: 100, endElem: <span key={reviewText}>...</span> },
    });

    return (
        <li
            className="review-card"
            style={{
                backgroundColor: isMobile ? 'transparent' : themeColor,
                backgroundImage: !isMobile ? `url(${bgImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
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
                    <TextLinkArrow
                        href={reviewLink}
                        text={readMoreText}
                        rightIcon={<RightArrowIcon style={{ marginLeft: "0.5em", verticalAlign: "middle" }} />}
                        isNewTab={true}
                        color={themeColor}
                        hoverColor={themeColor}
                        hasUnderlineHover={hasUnderlineHover}
                    />
                )}
            </div>
        </li>
    );
}
