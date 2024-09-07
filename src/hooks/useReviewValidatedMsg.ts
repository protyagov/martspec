import { TValidatedContentLabel } from "@/model/IReviewData";
import { IReviewWithFiller } from "@/model/IReviewWithFiller";
import { IValidateReviewMsgSettings, validateReviewMsg } from "@/service/AppleReviewService";
import { useLayoutEffect, useRef, useState } from "react";

interface IUseReviewValidatedMsg {
    originalMsg: string;
    settings: IValidateReviewMsgSettings;
}

export const useReviewValidatedMsg = ({ originalMsg, settings }: IUseReviewValidatedMsg) => {
    // validated stuff move into hook
    const reviewTextRef = useRef<HTMLParagraphElement>(null);
    const [validatedData, setValidatedData] = useState<TValidatedContentLabel>({
        overflowFlag: false,
        data: [originalMsg],
    });

    useLayoutEffect(() => {
        const reviewTextElem = reviewTextRef.current;

        if (reviewTextElem) {
            validateReviewMsg({
                data: { elem: reviewTextElem, originalMsg },
                settings,
            }).then((d) => setValidatedData(d));
        }
    }, []);

    return { validatedData, reviewTextRef };
};
