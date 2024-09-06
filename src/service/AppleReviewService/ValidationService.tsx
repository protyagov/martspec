import { ReactNode } from "react";

import { IReviewData, TValidatedContentLabel } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";

// models
interface IValidateReviewMsgData {
    originalMsg: string;
    elem: HTMLElement;
}
interface IValidateReviewMsgSettings {
    maxLines: number;
    endElem: ReactNode;
}

// props data
interface IValidateReviewMsgProps {
    data: IValidateReviewMsgData;
    settings: IValidateReviewMsgSettings;
}
interface IGetTruncationIndex extends IValidateReviewMsgData {
    maxHeight: number;
}
interface IValidateTruncation extends IValidateReviewMsgData {
    startIndex: number;
}
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}

// types for service methods
type TValidateReviewMsg = (props: IValidateReviewMsgProps) => TValidatedContentLabel;
type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;
type TGetTruncationIndex = (props: IGetTruncationIndex) => number;
type TValidateTruncation = (props: IValidateTruncation) => number;

// compose types into single interface
interface IValidationService {
    validateReviewMsg: TValidateReviewMsg;
    validateReviewData: TValidateReviewData;
}

class ValidationService implements IValidationService {
    // text len
    validateReviewMsg: TValidateReviewMsg = ({ data, settings }: IValidateReviewMsgProps) => {
        const maxHeight = this.#getMaxHeight(data.elem, settings.maxLines);
        console.log("validated runss");

        // overflow check
        if (data.elem.scrollHeight > maxHeight) {
            const truncationIndex = this.#getTruncationIndex({ ...data, maxHeight });
            const validatedTruncationIndex = this.#validateTruncation({ ...data, startIndex: truncationIndex });
            console.log({ truncationIndex, validatedTruncationIndex });

            return {
                overflowFlag: true,
                data: [data.originalMsg.substring(0, validatedTruncationIndex), settings.endElem],
            };
        }

        return { overflowFlag: false, data: [data.originalMsg] };
    };

    // styles to hide possible pop up text on window resizing (when the trunc point is recalculated)
    attachCssHideStyles = () => {
        // max-height
        // overflow: hidden
    };

    // Binary search to find the optimal truncation point
    #getTruncationIndex: TGetTruncationIndex = (data) => {
        let startIndex = 0;
        let endIndex = data.originalMsg.length - 1;

        while (startIndex <= endIndex) {
            let midIndex = Math.floor((startIndex + endIndex) / 2);
            let testText = data.originalMsg.substring(0, midIndex);

            data.elem.innerText = testText;

            if (data.elem.scrollHeight <= data.maxHeight) {
                // Move to the upper half
                startIndex = midIndex + 1;
            } else {
                // Move to the lower half
                endIndex = midIndex - 1;
            }
        }

        // When the loop exits, startIndex is the first index where the text no longer fits
        // Therefore, startIndex - 1 is the last index where the text still fits
        return startIndex - 1;
    };

    // search ending of the last word
    #validateTruncation: TValidateTruncation = (data) => {
        // Find the last space within the valid range
        // dont forget about punct regex
        const validatedTruncationPoint = data.originalMsg.lastIndexOf(" ", data.startIndex - 1);

        return validatedTruncationPoint;
    };

    #getLineHeight = (elem: HTMLElement): number => parseFloat(getComputedStyle(elem).lineHeight);

    #getMaxHeight = (elem: HTMLElement, maxLines: number): number => maxLines * this.#getLineHeight(elem);

    // validation always returns an array with review or filler data
    validateReviewData: TValidateReviewData = async ({ reviewData, arrLength }) => {
        // if no data return fillers
        if (!reviewData) {
            return this.#fillerArray(arrLength);
        }

        // if review is a single object return data + fillers
        if (!Array.isArray(reviewData)) {
            return [reviewData, ...this.#fillerArray(arrLength - 1)];
        }

        // if review is array but length less than needed return data + fillers
        if (reviewData.length < arrLength) {
            return [...reviewData, ...this.#fillerArray(arrLength - reviewData.length)];
        }

        // by default, return reviews
        return reviewData;
    };

    // create filler object
    #fillerObject = (): IFiller => ({ filler: true });

    // create an array of fillers to be used in the validateReviewData
    #fillerArray = (arrLength: number): IFiller[] => Array(arrLength).fill(this.#fillerObject());
}

export const { validateReviewData, validateReviewMsg } = new ValidationService();
