import { useEffect } from "react";

export function useTestResultScroll(resultExists: boolean) {
    useEffect(() => {
        if (!resultExists) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [resultExists]);
}