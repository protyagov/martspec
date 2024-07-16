import React, { ReactNode } from "react";
import _ from "@/i18n/locale";

interface IReviewLinkProps {
    countryCode: string;
    rightIcon?: ReactNode;
    id: number;
}

export default function ReviewLink({ countryCode, rightIcon, id }: IReviewLinkProps) {
    return (
        <a
            href={`https://apps.apple.com/${countryCode}/app/id${id}?see-all=reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="review__header--link"
        >
            {_("VITAMIN.REVIEW.LINK")}
            {rightIcon}
        </a>
    );
}
