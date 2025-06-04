import React from "react";
import { useReviewContext } from "./review-context";
import { useMediaQuery } from "@/hooks";

interface PaginationArrowProps {
    direction: "left" | "right";
    onClick: () => void;
    disabled: boolean;
    themeColor: string;
}

function PaginationArrow({ direction, onClick, disabled, themeColor }: PaginationArrowProps) {
    const isMobile = useMediaQuery("(max-width: 991px)");
    
    if (isMobile) return null;

    return (
        <button
            onClick={onClick}
            className={`review-pagination__arrow review-pagination__arrow--${direction}`}
            style={{
                backgroundColor: themeColor,
                backgroundImage: `url("/img/slider-pagination-arrow-${direction === "left" ? "02" : "01"}.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            aria-label={`${direction === "left" ? "Previous" : "Next"} page`}
            disabled={disabled}
        />
    );
}

interface ReviewPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function ReviewPagination({
    totalPages,
    currentPage,
    onPageChange,
}: ReviewPaginationProps) {
    const { themeColor = "#1686FF" } = useReviewContext();

    const handlePrev = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className="review-pagination">
            <PaginationArrow
                direction="left"
                onClick={handlePrev}
                disabled={currentPage === 0}
                themeColor={themeColor}
            />

            {/* Dots */}
            <div className="review-pagination__dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className="review-pagination__dot"
                        style={{
                            backgroundColor: i === currentPage ? themeColor : `${themeColor}55`,
                            transform: i === currentPage ? "scale(1.25)" : "scale(1)",
                            opacity: i === currentPage ? 1 : 0.5,
                        }}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>

            <PaginationArrow
                direction="right"
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                themeColor={themeColor}
            />
        </div>
    );
}
