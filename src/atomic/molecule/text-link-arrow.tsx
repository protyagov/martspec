import React, { CSSProperties, ReactNode } from "react";
import "@/sass/molecule/text-link-arrow.scss";

interface CSSPropertiesWithVars extends CSSProperties {
    "--hover-color"?: CSSProperties["color"];
}

interface TextLinkArrowProps {
    href: string;
    rightIcon: ReactNode;
    text: string | ReactNode;
    isNewTab?: boolean;
    color?: CSSProperties["color"];
    hoverColor?: CSSProperties["color"];
    hasUnderlineHover?: boolean; 
}

export default function TextLinkArrow({
    rightIcon,
    text,
    href,
    isNewTab,
    color = "#0d6efd",
    hoverColor = "#0a58ca",
    hasUnderlineHover = true, 
}: TextLinkArrowProps) {
    const newTabProps = isNewTab && { target: "_blank", rel: "noreferrer noopener" };

    return (
        <a
            href={href}
            {...newTabProps}
            className={`text-link-arrow d-flex align-items-center gap-2 text-decoration-none lh-sm ${hasUnderlineHover ? "with-underline" : ""}`}
            style={{ color, "--hover-color": hoverColor } as CSSPropertiesWithVars}
        >
            {text}
            {rightIcon}
        </a>
    );
}
