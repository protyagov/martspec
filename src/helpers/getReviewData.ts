import { IReviewData } from "@/data/IReviewData";

interface IGetLink {
    id: string;
    country_code: string;
    page?: number;
    data_type?: "xml" | "json";
}

export async function getReviewData(linkData: IGetLink): Promise<IReviewData> {
    const res = await fetch(getReviewLink(linkData));
    const data = await res.json();

    return data;
}

const getReviewLink = ({ id, data_type = "json", country_code, page = 1 }: IGetLink) =>
    `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;
