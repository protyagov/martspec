import React from "react";

interface ReviewPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  color: string;
}

export default function ReviewPagination({
  totalPages,
  currentPage,
  onPageChange,
  color,
}: ReviewPaginationProps) {
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

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <img
          src="/img/slider-pagination-arrow-01.svg"
          alt="Previous"
          width={16}
          height={16}
        />
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: i === currentPage ? color : `${color}55`,
              transform: i === currentPage ? 'scale(1.25)' : 'scale(1)',
              opacity: i === currentPage ? 1 : 0.5,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <img
          src="/img/slider-pafgination-arrow-02.svg"
          alt="Next"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}