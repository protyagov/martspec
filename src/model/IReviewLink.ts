import { TCountryCode } from "@/model/TCodes";

export interface IReviewLink {
    appId: number;
    countryCode?: TCountryCode;
    page?: number;
    dataType?: "xml" | "json";
}
