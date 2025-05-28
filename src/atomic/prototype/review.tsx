import React from "react";

import { useMediaQuery, useReviewData } from "@/hooks";

import { IReviewContextText, ReviewContext } from "@/atomic/molecule/review-context";
import { ReviewDesktop, ReviewMobile } from "@/atomic/molecule/review-layouts";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewCardSlider from "@/atomic/organism/review-card-slider";
import ReviewPagination from "@/atomic/molecule/review-pagination";
import { AllReviewsLink } from "@/atomic/organism/review-link";
import { useReviewPagination } from "@/hooks/useReviewPagination";
import { IReview } from "@/model/IReviewData";
import { IFiller } from "@/model/IReviewWithFiller";

import { TCountryCode, TLanguageCode } from "@/model/TCodes";

interface IReviewProps {
    text: IReviewContextText;
    codes: {
        countryCode: TCountryCode;
        languageCode: TLanguageCode;
    };
    appId: number;
    themeColor?: string;
}

const LG_BOOTSTRAP = 991;
const XXL_BOOTSTRAP = 1400;

function isFiller(r: IReview | IFiller): r is IFiller {
    return "filler" in r;
}

export default function Review({ text, appId, codes, themeColor = "#1686FF" }: IReviewProps) {
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);
    const isTablet = useMediaQuery(`(max-width: ${XXL_BOOTSTRAP}px)`);

    const { reviews, isLoading } = useReviewData({
        codes,
        appId,
    });

    const realReviews = React.useMemo(() => 
        reviews?.filter((r): r is IReview => !isFiller(r)) ?? [], 
        [reviews]
    );
    
    const { currentPage, totalPages, paginatedReviews, goToPage } = useReviewPagination(realReviews);

    const cardsToRender = React.useMemo(() => {
        const cards: (IReview | IFiller)[] = [...paginatedReviews];

        const fillerCount = 3 - cards.length;
        if (fillerCount > 0) {
            const fillerCards = Array.from({ length: fillerCount }, () => ({ filler: true } as IFiller));
            cards.push(...fillerCards);
        }

        return cards;
    }, [paginatedReviews]);

    const sliderContent = (
        <>
            <ReviewCardSlider reviews={cardsToRender} />
            {!isLoading && (
                <ReviewPagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={goToPage}
                />
            )}
        </>
    );

    if (!reviews || !appId) return <></>;

    return (
        <ReviewContext.Provider
            value={{
                data: {
                    reviews: reviews,
                    appId,
                    countryCode: codes.countryCode,
                },
                text,
                themeColor,
            }}
        >
            {isMobile ? (
                <ReviewMobile
                    head={<ReviewHead />}
                    description={<ReviewDescription />}
                    link={<AllReviewsLink />}
                    slider={sliderContent}
                />
            ) : (
                <ReviewDesktop
                    head={<ReviewHead />}
                    description={<ReviewDescription />}
                    link={<AllReviewsLink />}
                    slider={sliderContent}
                />
            )}
        </ReviewContext.Provider>
    );
}
