interface ITextLen {
    msg: string;
    settings: {
        // const REQUIRED_LENGTH = 200;
        // const RANGE_AMOUNT = 10;
        // const PUNCT_REGEX = new RegExp(/\p{P}/gu);
        // const END_SIGN = "...";
    };
}

export class ValidationService {
    // text len
    textLen = async ({ msg, settings }: ITextLen) => {
        return msg;
    };

    // validate review method from review service
}
