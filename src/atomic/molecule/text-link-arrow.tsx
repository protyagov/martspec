import React, { ReactNode } from "react";

interface IReviewLinkProps {
    href: string;

    rightIcon: ReactNode;
    text: string | ReactNode;
}

export default function TextLinkArrow({ rightIcon, text, href }: IReviewLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-arrow d-flex align-items-center gap-2 text-decoration-none lh-sm"
        >
            {text}
            {rightIcon}
        </a>
    );
}
