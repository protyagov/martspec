import { IReviewLink } from "@/model/IReviewLink";

export interface IGetAppStoreLink {
    data: Pick<IReviewLink, "appId" | "countryCode">;
    option?: "see-all=reviews" | "action=write-review";
}

export const getFetchReviewsLink = ({ appId, dataType = "json", countryCode = "us", page = 1 }: IReviewLink) =>
    `https://itunes.apple.com/${countryCode}/rss/customerreviews/page=${page}/id=${appId}/sortBy=mostRecent/${dataType}?l=en&cc=gb`;

export const getAppStoreLink = ({ data, option }: IGetAppStoreLink) =>
    `https://apps.apple.com/${data.countryCode || "us"}/app/id${data.appId}${option && `?${option}`}`;
