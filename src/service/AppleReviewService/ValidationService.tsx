import React from "react";

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

// union for validation returns
interface IValidateReviewMsgReturnsBase {
    overflowFlag: boolean;
}
interface IValidateReviewMsgReturnsTrue extends IValidateReviewMsgReturnsBase {
    overflowFlag: true;
    data: [string, React.JSX.Element];
}
interface IValidateReviewMsgReturnsFalse extends IValidateReviewMsgReturnsBase {
    overflowFlag: false;
    data: [string];
}

// returns data
type IValidateReviewMsgReturns = IValidateReviewMsgReturnsTrue | IValidateReviewMsgReturnsFalse;

// types for service methods
type TValidateReviewMsg = (props: IValidateReviewMsgProps) => Promise<IValidateReviewMsgReturns>;

// compose types into single interface
interface IValidationService {
    ValidateReviewMsg: TValidateReviewMsg;
}

export class ValidationService implements IValidationService {
    // text len
    ValidateReviewMsg: TValidateReviewMsg = async ({ msg, settings }: IValidateReviewMsgProps) => {
        const { REQUIRED_LENGTH, END_SIGN } = settings;
        const END_ELEM = <span className="">{END_SIGN}</span>;

        if (msg.length >= REQUIRED_LENGTH) {
            const slicedMsg = msg.slice(0, REQUIRED_LENGTH);

            return { overflowFlag: true, data: [slicedMsg, END_ELEM] };
        }

        return { overflowFlag: false, data: [msg] };
    };

    // validate review method from review service
}
