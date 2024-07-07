import { ScrollSpy } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Locale } from "@/i18n/locale";
import { getReviewData } from "./helpers/getReviewData";
import { validateReviewData } from "./helpers/validateReviewData";
import { IReviewWithFiller } from "./data/IReviewWithFiller";
import { fillerArray } from "./helpers/fillerArray";

export const useScrollSpy = (scrollTargetId: string, scrollContainerId: string = "root") => {
    const scrollContainer = document.getElementById(scrollContainerId);
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
const ARR_LENGTH = 3;

export const useReviewData = () => {
    const [reviews, setReviews] = useState<IReviewWithFiller>(fillerArray(ARR_LENGTH));

    useEffect(() => {
        getReviewData({ id: ID_VITAMIN, country_code: Locale.countryCode })
            .then((r) => validateReviewData({ reviewData: r.feed.entry, arrLength: ARR_LENGTH }))
            .then((r) => setReviews(r));
    }, []);

    return reviews;
};
