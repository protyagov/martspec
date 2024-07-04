import React, { ReactNode } from "react";
import _ from "@/i18n/locale";

interface IReviewLinkProps {
    countryCode: string;
    content: ReactNode;
}

export default function ReviewLink({ countryCode, content }: IReviewLinkProps) {
    return (
        <a
            href={`https://apps.apple.com/${countryCode}/app/id1519596234?see-all=reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="review-header__link"
        >
            {content}
        </a>
    );
}
