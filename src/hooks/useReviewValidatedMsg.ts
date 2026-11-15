import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { TValidatedContentLabel } from "@/model/IReviewData";
import { IValidateReviewMsg, validateReviewMsg } from "@/service/AppleService";

interface IUseReviewValidatedMsg {
    data: Pick<IValidateReviewMsg["data"], "origMsg">;
    settings: IValidateReviewMsg["settings"];
}

export const useReviewValidatedMsg = ({ data, settings }: IUseReviewValidatedMsg) => {
    const reviewTextRef = useRef<HTMLParagraphElement>(null);
    const [layoutFlag, setLayoutFlag] = useState(0);
    const [validatedData, setValidatedData] = useState<TValidatedContentLabel>({
        overflowFlag: false,
        content: [data.origMsg],
    });
    const [longTextFlag, setLongTextFlag] = useState(false);

    useEffect(() => {
        const reviewTextElem = reviewTextRef.current;
        if (!reviewTextElem) return;

        let isActive = true;
        const relayout = () => isActive && setLayoutFlag((flag) => flag + 1);

        const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(relayout) : null;
        resizeObserver?.observe(reviewTextElem);
        document.fonts?.ready.then(relayout);

        return () => {
            isActive = false;
            resizeObserver?.disconnect();
        };
    }, []);

    useLayoutEffect(() => {
        const reviewTextElem = reviewTextRef.current;

        if (reviewTextElem) {
            validateReviewMsg({
                data: { ...data, origElem: reviewTextElem },
                settings,
            }).then((d) => {
                setValidatedData(d);
                setLongTextFlag(reviewTextElem.dataset.overflowFlag === "true");
            });
        }
    }, [layoutFlag, data.origMsg]);

    return { validatedData, longTextFlag, reviewTextRef };
};
