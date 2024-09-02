import { createContext, useContext } from "react";
import { TCountryCode } from "@/model/TCodes";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";

interface IReviewContent {
    data: {
        reviews: IReviewWithFiller;
        countryCode: TCountryCode;
        appId: number;
    };
    text: {
        head: string;
        link: string;
        description: string;
    };
}

export const ReviewContext = createContext<IReviewContent | null>(null);

export function useReviewContext() {
    const context = useContext(ReviewContext);

    if (!context) throw new Error("ReviewContext must be used inside ReviewProvider");

    return context;
}
