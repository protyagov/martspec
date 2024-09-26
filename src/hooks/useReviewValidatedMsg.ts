import { TValidatedContentLabel } from "@/model/IReviewData";
import { IValidateReviewMsg, validateReviewMsg } from "@/service/AppleReviewService";
import { useLayoutEffect, useRef, useState } from "react";

interface IUseReviewValidatedMsg {
    data: Pick<IValidateReviewMsg["data"], "origMsg">;
    settings: IValidateReviewMsg["settings"];
}

export const useReviewValidatedMsg = ({ data, settings }: IUseReviewValidatedMsg) => {
    const reviewTextRef = useRef<HTMLParagraphElement>(null);
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
    }, []);

    return { validatedData, reviewTextRef };
};
