export interface IDataWithAppId<D = "IReviewData"> {
    data: D;
    appId: number;
}

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

export interface IReview {
    author: IAuthor;
    updated: ILabel;
    "im:rating": ILabel;
    "im:version": ILabel;
    id: ILabel;
    title: ILabel;
    content: {
        label: ILabel["label"];
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
