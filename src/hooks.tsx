import { ScrollSpy } from "bootstrap";
import React, { useEffect, useState } from "react";
import { IReviewData } from "./data/IReviewData";
import { Locale } from "@/i18n/locale";

export const useScrollSpy = (scrollTargetId: string, scrollContainerId: string = "root") => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (!scrollContainer) throw new Error(`html element scrollContainer with id: "${scrollContainerId}" was not found`);

    React.useLayoutEffect(() => {
        const target = scrollTargetId.replace(/^[^#]+/, "#$&");
        const scrollSpy = new ScrollSpy(scrollContainer, { target });
    }, []);
};

//-------------------------------------------------------------------------------

export const useMediaQuery = (query: string): boolean => {
    const [match, setMatches] = useState(false);

    // set match on mount
    useEffect(() => {
        setMatches(window.matchMedia(query).matches);
    }, []);

    // handle match event
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const matchHandler = (e: MediaQueryListEvent) => setMatches(e.matches);

        mediaQuery.addEventListener("change", matchHandler);

        return () => mediaQuery.removeEventListener("change", matchHandler);
    }, []);

    return match;
};

//-------------------------------------------------------------------------------
const ID_VITAMIN = "1519596234";

interface IGetLink {
    id: string;
    country_code: string;
    page?: number;
    data_type?: "xml" | "json";
}

const getLink = ({ id, data_type = "json", country_code, page = 1 }: IGetLink) =>
    `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;

async function getData(linkData: IGetLink): Promise<IReviewData> {
    const res = await fetch(getLink(linkData));
    const data = await res.json();

    return data;
}

export const useReviewData = () => {
    const [reviews, setReviews] = useState<IReviewData["feed"]["entry"] | undefined>(undefined);

    useEffect(() => {
        getData({ id: ID_VITAMIN, country_code: Locale.countryCode }).then((r) => setReviews(r.feed.entry));
    }, []);

    return reviews;
};
