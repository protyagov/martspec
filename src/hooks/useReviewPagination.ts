import { useState, useMemo } from "react";
import { IReview } from "@/model/IReviewData";

export function useReviewPagination(reviews: IReview[], cardsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = useMemo(() => {
        if (!reviews?.length) return 0;
        return Math.ceil(reviews.length / cardsPerPage);
    }, [reviews, cardsPerPage]);

    const paginatedReviews = useMemo(() => {
        if (!reviews?.length) return [];
        const startIndex = currentPage * cardsPerPage;
        return reviews.slice(startIndex, startIndex + cardsPerPage);
    }, [reviews, currentPage, cardsPerPage]);

    const goToPage = (page: number) => {
        if (page < 0 || page >= totalPages) return;
        setCurrentPage(page);
    };

    return {
        currentPage,
        totalPages,
        paginatedReviews,
        goToPage,
    };
}
