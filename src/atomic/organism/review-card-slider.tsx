import React from "react";
import { useMediaQuery } from "@/hooks";
import ReviewCard from "@/atomic/molecule/review-card";
import ReviewFillerCard from "@/atomic/molecule/review-filler-card";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { SendReviewsLink } from "@/atomic/organism/review-link";
import { IReview } from "@/model/IReviewData";
import { IFiller } from "@/model/IReviewWithFiller";

const backgroundImages = new URL("@/img/page/vitamin/Card-Blue-Review.webp", import.meta.url).href;

function isFiller(r: IReview | IFiller): r is IFiller {
    return "filler" in r;
}

interface ReviewCardSliderProps {
    reviews: (IReview | IFiller)[];
    currentPage: number;
    onPageChange: (page: number) => void;
    totalPages: number;
    hasUnderlineHover?: boolean;
}

export default function ReviewCardSlider({ reviews, currentPage, onPageChange, totalPages, hasUnderlineHover = true, }: ReviewCardSliderProps) {
    const { text } = useReviewContext();
    const isMobile = useMediaQuery("(max-width: 991px)");

    const middleIndex = 1; 

    console.log("bgImage:", backgroundImages);

    return (
        <ul className="review__list">
            {reviews.map((r, i) => {
                const isMiddleCard = i === middleIndex;

                const cardBg = isMiddleCard ? backgroundImages : null;

                if (isFiller(r)) {
                    return (
                        <ReviewFillerCard
                            link={<SendReviewsLink hasUnderlineHover={hasUnderlineHover} />}
                            posIndex={i}
                            key={text.fillerCard.head[i] ?? `filler-${i}`}
                            bgImage=''
                        />
                    );
                }

                return (
                    <ReviewCard
                        key={r.id.label}
                        createdDate={r.updated.label}
                        reviewText={r.content.label}
                        reviewerNickname={r.author.name.label}
                        rating={r["im:rating"].label}
                        bgImage={cardBg}
                        reviewLink={r.link.attributes.href}
                        readMoreText={text.readMoreLink}
                        hasUnderlineHover={hasUnderlineHover}
                    />
                );
            })}
        </ul>
    );
}
