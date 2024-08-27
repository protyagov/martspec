import React from "react";

import { ScrollSpy } from "bootstrap";

export const useScrollSpy = (scrollTargetId: string, scrollContainerId: string = "root") => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (!scrollContainer) throw new Error(`html element scrollContainer with id: "${scrollContainerId}" was not found`);

    React.useLayoutEffect(() => {
        const target = scrollTargetId.replace(/^[^#]+/, "#$&");
        const scrollSpy = new ScrollSpy(scrollContainer, { target });
    }, []);
};
