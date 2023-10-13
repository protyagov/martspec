import { ScrollSpy } from "bootstrap";
import React from "react";

export const useScrollSpy = (scrollContainerId: string, scrollTargetId: string) => {
    const scrollContainer = document.getElementById(scrollContainerId);
    React.useLayoutEffect(() => {
        const scrollSpy = new ScrollSpy(scrollContainer, {
            target: '#' + scrollTargetId
        })
    }, []);
};