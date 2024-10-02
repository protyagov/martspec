import { useEffect, useState } from "react";

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
