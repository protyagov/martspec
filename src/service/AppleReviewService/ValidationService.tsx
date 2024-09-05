import React from "react";

import { IReviewData, TValidatedContentLabel } from "@/model/IReviewData";
import { IFiller, IReviewWithFiller } from "@/model/IReviewWithFiller";

// props data
interface IValidateReviewMsgProps {
    msg: string;
    settings: {
        REQUIRED_LENGTH: number;
        END_SIGN: string;

        // const RANGE_AMOUNT = 10;
        // const PUNCT_REGEX = new RegExp(/\p{P}/gu);
    };
}
interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}

// types for service methods
type TValidateReviewMsg = (props: IValidateReviewMsgProps) => TValidatedContentLabel;
type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;

// compose types into single interface
interface IValidationService {
    validateReviewMsg: TValidateReviewMsg;
    validateReviewData: TValidateReviewData;
}

class ValidationService implements IValidationService {
    // text len
    validateReviewMsg: TValidateReviewMsg = ({ msg, settings }: IValidateReviewMsgProps) => {
        const { REQUIRED_LENGTH, END_SIGN } = settings;
        const END_ELEM = <span className="">{END_SIGN}</span>;

        if (msg.length >= REQUIRED_LENGTH) {
            const slicedMsg = msg.slice(0, REQUIRED_LENGTH);

            return { overflowFlag: true, data: [slicedMsg, END_ELEM] };
        }

        return { overflowFlag: false, data: [msg] };
    };

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
    #fillerArray = (arrLength: number) => Array(arrLength).fill(this.#fillerObject());
}

export const { validateReviewData, validateReviewMsg } = new ValidationService();
