import React, { ReactNode } from "react";

interface IReviewLinkProps {
    href: string;
    className: string;

    rightIcon: ReactNode;
    text: string | ReactNode;
}

export default function ReviewLink({ rightIcon, text, className, href }: IReviewLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {text}
            {rightIcon}
        </a>
    );
}
