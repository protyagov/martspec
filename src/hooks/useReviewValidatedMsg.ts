import { useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

import { TValidatedContentLabel } from "@/model/IReviewData";
import { IValidateReviewMsg, validateReviewMsg } from "@/service/AppleService";

interface IUseReviewValidatedMsg {
    data: Pick<IValidateReviewMsg["data"], "origMsg">;
    settings: IValidateReviewMsg["settings"] & {
        resizeDelay?: number;
    };
}

export const useReviewValidatedMsg = ({ data, settings }: IUseReviewValidatedMsg) => {
    const reviewTextRef = useRef<HTMLParagraphElement>(null);
    const resizeFlag = useWindowSize(settings.resizeDelay);
    const [validatedData, setValidatedData] = useState<TValidatedContentLabel>({
        overflowFlag: false,
        content: [data.origMsg],
    });

    useLayoutEffect(() => {
        const reviewTextElem = reviewTextRef.current;

        if (reviewTextElem) {
            validateReviewMsg({
                data: { ...data, origElem: reviewTextElem },
                settings,
            }).then((d) => setValidatedData(d));
        }
    }, [resizeFlag]);

    return { validatedData, reviewTextRef };
};
