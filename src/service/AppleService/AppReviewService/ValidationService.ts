import React, { ReactNode } from "react";

import { IReviewData, TValidatedContentLabel } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";

// props
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
}

export interface IValidateReviewMsg {
    data: {
        origElem: HTMLElement;
        origMsg: string;
    };
    settings: {
        rows: number;
        endElem: ReactNode;
    };
}

// types for service methods
type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;
type TValidateReviewMsg = (props: IValidateReviewMsg) => Promise<TValidatedContentLabel>;

// compose types into single interface
interface IValidationService {
    validateReviewMsg: TValidateReviewMsg;
    validateReviewData: TValidateReviewData;
}

const HEIGHT_EPSILON = 0.5;

class ValidationService implements IValidationService {
    validateReviewMsg: TValidateReviewMsg = async ({ data, settings }) => {
        const { origElem, origMsg } = data;
        const lineHeight = this.#getLineHeight(getComputedStyle(origElem));
        const tempElem = this.#createTempElement(origElem);

        try {
            if (this.#fits(tempElem, origMsg, settings.rows * lineHeight)) {
                origElem.dataset.overflowFlag = "false";

                return { overflowFlag: false, content: [origMsg] };
            }

            origElem.dataset.overflowFlag = "true";

            const rows = Math.max(settings.rows, Math.floor((origElem.clientHeight + HEIGHT_EPSILON) / lineHeight));
            const maxHeight = rows * lineHeight;

            if (this.#fits(tempElem, origMsg, maxHeight)) {
                return { overflowFlag: false, content: [origMsg] };
            }

            const endText = this.#getTextContent(settings.endElem);
            const truncatedMsg = this.#truncateMsg(tempElem, origMsg, endText, maxHeight);

            return { overflowFlag: true, content: [truncatedMsg, settings.endElem] };
        } finally {
            tempElem.remove();
        }
    };

    #truncateMsg = (tempElem: HTMLElement, msg: string, endText: string, maxHeight: number): string => {
        const wordCuts = [...msg.matchAll(/\s+/g)].map((m) => m.index!).filter((i) => i > 0);
        const cuts = wordCuts.length ? wordCuts : this.#getCharCuts(msg);

        const getCandidate = (cut: number) =>
            msg
                .substring(0, cut)
                .trimEnd()
                .replace(/\p{P}+$/gu, "")
                .trimEnd();

        let startIndex = 0;
        let endIndex = cuts.length - 1;
        let result = "";

        while (startIndex <= endIndex) {
            const midIndex = Math.floor((startIndex + endIndex) / 2);
            const candidate = getCandidate(cuts[midIndex]);

            if (this.#fits(tempElem, candidate + endText, maxHeight)) {
                result = candidate;
                startIndex = midIndex + 1;
            } else {
                endIndex = midIndex - 1;
            }
        }

        return result;
    };

    #getCharCuts = (msg: string): number[] => {
        const cuts: number[] = [];
        let index = 0;

        for (const char of msg) {
            index += char.length;
            cuts.push(index);
        }

        return cuts;
    };

    #fits = (tempElem: HTMLElement, text: string, maxHeight: number): boolean => {
        tempElem.textContent = text;

        return tempElem.getBoundingClientRect().height <= maxHeight + HEIGHT_EPSILON;
    };

    #createTempElement = (origElem: HTMLElement): HTMLElement => {
        const tempElem = origElem.cloneNode(false) as HTMLElement;

        tempElem.removeAttribute("data-overflow-flag");
        tempElem.setAttribute("aria-hidden", "true");
        Object.assign(tempElem.style, {
            position: "absolute",
            top: "0",
            left: "0",
            visibility: "hidden",
            pointerEvents: "none",
            flex: "none",
            width: `${origElem.clientWidth}px`,
            height: "auto",
            minHeight: "0",
            maxHeight: "none",
            overflow: "visible",
        });

        (origElem.parentElement ?? document.body).appendChild(tempElem);

        return tempElem;
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

    // Get the line height of the text
    #getLineHeight = (styles: CSSStyleDeclaration): number =>
        parseFloat(styles.lineHeight) || parseFloat(styles.fontSize) * 1.2;

    // -----------------------------------------
    validateReviewData: TValidateReviewData = async ({ reviewData }) => {
        if (!reviewData) {
            return [];
        }
    
        if (!Array.isArray(reviewData)) {
            return [reviewData];
        }
    
        return reviewData;
    };
}

export const { validateReviewData, validateReviewMsg } = new ValidationService();
