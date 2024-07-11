import { Locale } from "@/i18n/locale";

import { IReviewData } from "@/data/IReviewData";
import appIds from "@/data/app-ids.json";

interface IGetLink {
    id: number;
    country_code?: string;
    page?: number;
    data_type?: "xml" | "json";
}

type TGetReviewData = (props?: Partial<IGetLink>) => Promise<{ data: IReviewData; id: number }>;

export const getReviewData: TGetReviewData = async (linkData) => {
    const id = await getReviewId();
    const res = await fetch(getReviewLink({ id, ...linkData }));
    const data: IReviewData = await res.json();

    return { data, id };
};

const getReviewId = async (): Promise<number> => {
    const pathname = new URL(document.URL).pathname;
    const pathnameItems = pathname.split("/");

    let key: keyof typeof appIds;
    for (key in appIds) {
        if (pathnameItems.includes(key)) return appIds[key];
    }

    throw new Error(`ID NOT FOUND, pathnameItems:${JSON.stringify(pathnameItems)}, appIds: ${JSON.stringify(appIds)}`);
};

const getReviewLink = ({ id, data_type = "json", country_code = Locale.countryCode, page = 1 }: IGetLink) =>
    `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;
