export interface IDataWithAppId<D = "IReviewData"> {
    data: D;
    appId: number;
}

// compose blocks
export interface IReviewData {
    feed: {
        author: IAuthor;
        entry: IReview[] | IReview | undefined;
        updated: ILabel;
        rights: ILabel;
        title: ILabel;
        icon: ILabel;
        link: ILink[];
        id: ILabel;
    };
}

// blocks
export interface IReview {
    author: IAuthor;
    updated: ILabel;
    "im:rating": ILabel;
    "im:version": ILabel;
    id: ILabel;
    title: ILabel;
    content: {
        label: ILabel["label"];
        // UsingReviewHook guarantees that you get a validatedLabel parameter
        // api doesnt provide it
        validatedLabel: TValidatedContentLabel;
        attributes: {
            type: "text";
        };
    };
    link: ILink;
    "im:voteSum": ILabel;
    "im:contentType": {
        attributes: {
            term: "Application";
            label: "Application";
        };
    };
    "im:voteCount": ILabel;
}

export type TValidatedContentLabel = IValidateReviewMsgReturnsTrue | IValidateReviewMsgReturnsFalse;

interface ILink {
    attributes: {
        rel: "related" | "alternate" | "self" | "first" | "last" | "previous" | "next";
        type?: "text/html";
        href: string;
    };
}

interface IAuthor {
    name: ILabel;
    uri: ILabel;
    label?: ILabel["label"];
}

interface ILabel {
    label: string;
}

// unions for validation content label
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
