import React, { ReactNode } from "react";

import { IReviewData, TValidatedContentLabel } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";

// models
interface IValidateData {
    origElem: HTMLElement;
    origMsg: string;
    origElemStyles: CSSStyleDeclaration;

    tempElem: HTMLElement;
}
interface IValidateSettings {
    endElem: ReactNode;
    endElemLength: number;
    truncationIndex: number;

    rows: number;
    maxHeight: number;
}

// props
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
}

export interface IValidateReviewMsg {
    data: Pick<IValidateData, "origElem" | "origMsg">;
    settings: Pick<IValidateSettings, "rows" | "endElem">;
}
interface ITruncateIndex {
    data: Pick<IValidateData, "tempElem" | "origMsg">;
    settings: Pick<IValidateSettings, "maxHeight">;
}
interface IValidateTruncationMsg {
    data: Pick<IValidateData, "origMsg">;
    settings: Pick<IValidateSettings, "truncationIndex" | "endElemLength">;
}
interface ICreateTempElement {
    data: Pick<IValidateData, "origElemStyles">;
}
interface IGetMaxHeight {
    data: Pick<IValidateData, "origElemStyles">;
    settings: Pick<IValidateSettings, "rows">;
}
interface IGetLineHeight {
    data: Pick<IValidateData, "origElemStyles">;
}

// types for service methods
type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;

type TValidateReviewMsg = (props: IValidateReviewMsg) => Promise<TValidatedContentLabel>;
type TTruncateIndex = (props: ITruncateIndex) => Promise<number>;
type TValidateTruncationMsg = (props: IValidateTruncationMsg) => Promise<string>;
type TCreateTempElement = (props: ICreateTempElement) => HTMLElement;
type TGetMaxHeight = (props: IGetMaxHeight) => number;
type TGetLineHeight = (props: IGetLineHeight) => number;

// compose types into single interface
interface IValidationService {
    validateReviewMsg: TValidateReviewMsg;
    validateReviewData: TValidateReviewData;
}

class ValidationService implements IValidationService {
    validateReviewMsg: TValidateReviewMsg = async ({ data, settings }) => {
        const origElemStyles = getComputedStyle(data.origElem);
        const tempElem = this.#createTempElement({ data: { origElemStyles } });
        const maxHeight = this.#getMaxHeight({
            data: { origElemStyles },
            settings,
        });

        // check for size overflow,
        // - this check is needed for the first render when the initial sizes are large
        const sizeOverflowFlag = data.origElem.scrollHeight > maxHeight;
        // check if the element has already been checked as overflowed
        // - this check is necessary when resizing the window when the element is already cropped
        // - and therefore its size is small and cannot be checked via sizeOverflow
        const overflowElemFlag = data.origElem.dataset.overflowFlag === "true";

        // overflow check
        if (overflowElemFlag || sizeOverflowFlag) {
            // set overflow state
            data.origElem.dataset.overflowFlag = "true";

            // append the temp element to the body
            document.body.appendChild(tempElem);

            // calc trunc index
            const truncationIndex = await this.#truncateIndex({
                data: { ...data, tempElem },
                settings: { maxHeight },
            });

            // remove the temp element from the body
            document.body.removeChild(tempElem);

            // calc endElem length
            const endElemLength = this.#getTextContent(settings.endElem).length;
            // get validated msg
            const validatedTruncationMsg = await this.#validateTruncationMsg({
                data,
                settings: { endElemLength, truncationIndex },
            });

            return {
                overflowFlag: true,
                content: [validatedTruncationMsg, settings.endElem],
            };
        }

        // set overflow state
        data.origElem.dataset.overflowFlag = "false";

        return { overflowFlag: false, content: [data.origMsg] };
    };

    // Binary search to find the optimal truncation point
    #truncateIndex: TTruncateIndex = async ({ data, settings }) => {
        // Handle empty text case
        if (!data.origMsg.length) return 0;

        // initialize indexes
        let startIndex = 0;
        let endIndex = data.origMsg.length - 1;

        while (startIndex <= endIndex) {
            // calc mid index
            const midIndex = Math.floor((startIndex + endIndex) / 2);

            // text assign
            const testText = data.origMsg.substring(0, midIndex);
            data.tempElem.textContent = testText; // Use textContent for measurement (faster then innerText)

            if (data.tempElem.scrollHeight <= settings.maxHeight) {
                // Move to the upper half
                startIndex = midIndex + 1;
            } else {
                // Move to the lower half
                endIndex = midIndex - 1;
            }
        }

        // When the loop exits, endIndex is the last index where the text still fits
        return endIndex;
    };

    // Validate the truncation index to find the last whitespace or punctuation mark
    #validateTruncationMsg: TValidateTruncationMsg = async ({ data, settings }) => {
        // If the index is 0, return origMsg (no truncation)
        if (settings.truncationIndex === 0) return data.origMsg;

        // ensure that the endElem fits perfectly into the row
        const textFitsIndex = settings.truncationIndex - settings.endElemLength;
        // find last space
        const validatedTruncationIndex = data.origMsg.lastIndexOf(" ", textFitsIndex);

        // if no spaces (gibberish) return gibberish
        if (validatedTruncationIndex < 0) return data.origMsg.substring(0, textFitsIndex);

        // remove punctuation marks and white spaces
        return data.origMsg
            .substring(0, validatedTruncationIndex)
            .replace(/\p{P}+$/gu, "")
            .trim();
    };

    // Create a temporary element to measure the text height
    #createTempElement: TCreateTempElement = ({ data }) => {
        const tempElement = document.createElement("div");

        tempElement.style.position = "absolute";
        tempElement.style.visibility = "hidden";
        tempElement.style.overflow = "hidden";
        tempElement.style.display = "inline-block";
        tempElement.style.whiteSpace = "pre-wrap";

        tempElement.style.fontSize = data.origElemStyles.fontSize;
        tempElement.style.lineHeight = data.origElemStyles.lineHeight;
        tempElement.style.fontFamily = data.origElemStyles.fontFamily;
        tempElement.style.padding = data.origElemStyles.padding;
        tempElement.style.margin = data.origElemStyles.margin;
        tempElement.style.border = data.origElemStyles.border;
        tempElement.style.maxWidth = data.origElemStyles.width;
        tempElement.style.maxHeight = data.origElemStyles.height;

        return tempElement;
    };

    #getTextContent = (node: ReactNode): string => {
        // If it's a string, return it directly
        if (typeof node === "string") return node;
        // If it's a number, convert it to string
        if (typeof node === "number") return node.toString();

        // If it's a React element, recursively get text from its children
        if (React.isValidElement(node)) {
            return React.Children.toArray(node.props.children)
                .map(this.#getTextContent) // Map over children and get text content
                .join(""); // Join the results into a single string
        }

        // For any other type, return an empty string
        return "";
    };

    // Calculate the maximum height based on the number of rows
    #getMaxHeight: TGetMaxHeight = ({ data, settings }) =>
        settings.rows * this.#getLineHeight({ data: { origElemStyles: data.origElemStyles } });

    // Get the line height of the text
    #getLineHeight: TGetLineHeight = ({ data }) =>
        parseFloat(data.origElemStyles.lineHeight) || parseFloat(data.origElemStyles.fontSize);

    // -----------------------------------------

    // validation always returns an array with review or filler data
    // validateReviewData: TValidateReviewData = async ({ reviewData, arrLength }) => {
    //     // if no data return fillers
    //     if (!reviewData) {
    //         return this.#fillerArray(arrLength);
    //     }

    //     // if review is a single object return data + fillers
    //     if (!Array.isArray(reviewData)) {
    //         return [reviewData, ...this.#fillerArray(arrLength - 1)];
    //     }

    //     // if review is array but length less than needed return data + fillers
    //     if (reviewData.length < arrLength) {
    //         return [...reviewData, ...this.#fillerArray(arrLength - reviewData.length)];
    //     }

    //     // by default, return reviews
    //     return reviewData;
    // };

    validateReviewData: TValidateReviewData = async ({ reviewData }) => {
        if (!reviewData) {
            return [];
        }
    
        if (!Array.isArray(reviewData)) {
            return [reviewData];
        }
    
        return reviewData;
    };
    

    // create filler object
//     #fillerObject = (): IFiller => ({ filler: true });

//     // create an array of fillers to be used in the validateReviewData
//     #fillerArray = (arrLength: number): IFiller[] => Array(arrLength).fill(this.#fillerObject());
}

export const { validateReviewData, validateReviewMsg } = new ValidationService();
