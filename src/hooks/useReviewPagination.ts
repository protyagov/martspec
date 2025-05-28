import { useState, useMemo } from "react";
import { IReview } from "@/model/IReviewData";

export function useReviewPagination(reviews: IReview[]) {
    const [currentPage, setCurrentPage] = useState(0);
    const reviewsPerPage = 3;

    const totalPages = useMemo(() => {
        if (!reviews?.length) return 0;
        return Math.ceil(reviews.length / reviewsPerPage);
    }, [reviews]);

    const paginatedReviews = useMemo(() => {
        if (!reviews?.length) return [];
        const startIndex = currentPage * reviewsPerPage;
        return reviews.slice(startIndex, startIndex + reviewsPerPage);
    }, [reviews, currentPage]);

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
