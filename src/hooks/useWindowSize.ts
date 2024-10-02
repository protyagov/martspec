import { useEffect, useState } from "react";

const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;

    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => func(...args), delay);
    };
};

export const useWindowSize = (debounceDelay: number = 1000) => {
    const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // use the debounce to be less aggressive in our re-rendering for performance reasons
        const handleResize = debounce(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, debounceDelay);

        // Add the resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [debounceDelay]);

    return windowSize;
};
