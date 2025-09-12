import { createContext, useContext } from "react";
import { TCountryCode } from "@/model/TCodes";

import { IReviewWithFiller } from "@/model/IReviewWithFiller";

export interface IReviewContextText {
    head: string;
    link: string;
    description: string;
    readMoreLink: string;
    fillerCard: {
        head: [string, string, string];
        link: string;
    };
}
interface IReviewContextData {
    reviews: IReviewWithFiller;
    countryCode: TCountryCode;
    appId: number;
}

interface IReviewContext {
    data: IReviewContextData;
    text: IReviewContextText;
    themeColor?: string;
}

export const ReviewContext = createContext<IReviewContext | null>(null);

export function useReviewContext() {
    const context = useContext(ReviewContext);

    if (!context) throw new Error("ReviewContext must be used inside ReviewProvider");

    return context;
}
