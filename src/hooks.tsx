import React from "react";

export const useScrollSpy = (scrollContainerID: string, scrollTargetID: string) => {
    const scrollContainer = document.getElementById(scrollContainerID);
    React.useLayoutEffect(() => {
        scrollContainer.setAttribute("data-bs-spy", "scroll");
        scrollContainer.setAttribute("data-bs-target", `#${scrollTargetID}`);
    }, []);
};