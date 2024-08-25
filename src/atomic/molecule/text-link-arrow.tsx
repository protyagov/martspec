import React, { ReactNode } from "react";

interface TextLinkArrowProps {
    href: string;
    rightIcon: ReactNode;
    text: string | ReactNode;
    isNewTab?: boolean;
}

export default function TextLinkArrow({ rightIcon, text, href, isNewTab }: TextLinkArrowProps) {
    const newTabProps = isNewTab && { target: "_blank", rel: "noreferrer noopener" };

    return (
        <a
            href={href}
            {...newTabProps}
            className="text-link-arrow d-flex align-items-center gap-2 text-decoration-none lh-sm"
        >
            {text}
            {rightIcon}
        </a>
    );
}
