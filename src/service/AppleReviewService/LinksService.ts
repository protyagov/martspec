import { TCountryCode } from "@/model/TCodes";

export interface ILink {
    id: number;
    country_code?: TCountryCode;
    page?: number;
    data_type?: "xml" | "json";
}

export const getFetchReviewsLink = ({ id, data_type = "json", country_code = "us", page = 1 }: ILink) =>
    `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;

export const getAllReviewsLink = ({ id, country_code = "us" }: Pick<ILink, "id" | "country_code">) =>
    `https://apps.apple.com/${country_code}/app/id${id}?see-all=reviews`;
