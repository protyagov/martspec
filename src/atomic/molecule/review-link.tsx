import React, { ReactNode } from "react";
import _ from "@/i18n/locale";

interface IReviewLinkProps {
    countryCode: string;
    rightIcon?: ReactNode;
}

export default function ReviewLink({ countryCode, rightIcon }: IReviewLinkProps) {
    return (
        <a
            href={`https://apps.apple.com/${countryCode}/app/id1519596234?see-all=reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="review__header--link"
        >
            {_("VITAMIN.REVIEW.LINK")}
            {rightIcon}
        </a>
    );
}
