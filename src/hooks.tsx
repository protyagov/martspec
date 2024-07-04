import { ScrollSpy } from "bootstrap";
import React, { useEffect, useState } from "react";

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
