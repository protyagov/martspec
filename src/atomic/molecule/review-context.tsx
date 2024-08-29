import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { createContext, useContext } from "react";

interface IReviewContent {
    reviews: IReviewWithFiller;
    headText: string;
    descriptionText: string;
}

export const ReviewContext = createContext<IReviewContent | null>(null);

export function useReviewContext() {
    const context = useContext(ReviewContext);

    if (!context) throw new Error("ReviewContext must be used inside ReviewProvider");

    return context;
}
