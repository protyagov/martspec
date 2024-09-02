import { IReviewLink } from "@/model/IReviewLink";

export const getFetchReviewsLink = ({ appId, dataType = "json", countryCode = "us", page = 1 }: IReviewLink) =>
    `https://itunes.apple.com/${countryCode}/rss/customerreviews/page=${page}/id=${appId}/sortBy=mostRecent/${dataType}?l=en&cc=gb`;

export const getAllReviewsLink = ({ appId, countryCode = "us" }: Pick<IReviewLink, "appId" | "countryCode">) =>
    `https://apps.apple.com/${countryCode}/app/id${appId}?see-all=reviews`;
