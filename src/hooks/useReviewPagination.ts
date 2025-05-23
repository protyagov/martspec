import { useState, useMemo } from "react";
import { IReviewWithFiller } from "@/model/IReviewWithFiller";

export const useReviewPagination = (reviews: IReviewWithFiller[], perPage: number = 3) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(reviews.length / perPage);

  const paginatedReviews = useMemo(() => {
    const start = currentPage * perPage;
    return reviews.slice(start, start + perPage);
  }, [reviews, currentPage, perPage]);

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    paginatedReviews,
    goToPage,
  };
};
