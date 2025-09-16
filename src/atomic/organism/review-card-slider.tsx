import React from "react";
import { useMediaQuery } from "@/hooks";
import ReviewCard from "@/atomic/molecule/review-card";
import ReviewFillerCard from "@/atomic/molecule/review-filler-card";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { SendReviewsLink } from "@/atomic/organism/review-link";
import { IReview } from "@/model/IReviewData";
import { IFiller } from "@/model/IReviewWithFiller";

const backgroundImages = [
    new URL("@/img/org/first-review-bg.svg", import.meta.url).href,
    new URL("@/img/org/second-review-bg.svg", import.meta.url).href,
    new URL("@/img/org/third-review-bg.svg", import.meta.url).href,
];

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

    return (
        <ul className="review__list">
            {reviews.map((r, i) => {
                const bgImage = backgroundImages[i % 3];

                if (isFiller(r)) {
                    return (
                        <ReviewFillerCard
                            link={<SendReviewsLink hasUnderlineHover={hasUnderlineHover} />}
                            posIndex={i}
                            key={text.fillerCard.head[i] ?? `filler-${i}`}
                            bgImage={bgImage}
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
                        bgImage={bgImage}
                        reviewLink={r.link.attributes.href}
                        readMoreText={text.readMoreLink}
                        hasUnderlineHover={hasUnderlineHover}
                    />
                );
            })}
        </ul>
    );
}
