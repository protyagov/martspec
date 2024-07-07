import React from "react";

import { ScrollSpy } from "bootstrap";

export const useScrollSpy = (scrollTargetId: string, scrollContainerId: string = "root") => {
    const scrollContainer = document.getElementById(scrollContainerId);
    React.useLayoutEffect(() => {
        const target = scrollTargetId.replace(/^[^#]+/, "#$&");
        const scrollSpy = new ScrollSpy(scrollContainer, { target });
    }, []);
};
