import React from "react";
import { useReviewContext } from "./review-context";

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
  const { themeColor } = useReviewContext();

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
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="review-pagination__arrow review-pagination__arrow--left"
        style={{
          backgroundColor: themeColor,
          backgroundImage: 'url("/img/slider-pagination-arrow-02.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Previous page"
        disabled={currentPage === 0}
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

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="review-pagination__arrow review-pagination__arrow--right"
        style={{
          backgroundColor: themeColor,
          backgroundImage: 'url("/img/slider-pagination-arrow-01.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Next page"
        disabled={currentPage === totalPages - 1}
      />
    </div>
  );
}
