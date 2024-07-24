import React, { ReactNode } from "react";

interface IReviewLinkProps {
    countryCode: string;
    id: number;

    rightIcon?: ReactNode;
    text: string;
}

export default function ReviewLink({ countryCode, rightIcon, id, text }: IReviewLinkProps) {
    return (
        <a
            href={`https://apps.apple.com/${countryCode}/app/id${id}?see-all=reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="review__header--link"
        >
            {text}
            {rightIcon}
        </a>
    );
}
