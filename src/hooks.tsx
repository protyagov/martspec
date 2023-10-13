import { ScrollSpy } from "bootstrap";
import React from "react";

export const useScrollSpy = (scrollContainerID: string, scrollTargetID: string) => {
    const scrollContainer = document.getElementById(scrollContainerID);
    React.useLayoutEffect(() => {
        const scrollSpy = new ScrollSpy(scrollContainer, {
            target: '#' + scrollTargetID
        })
    }, []);
};