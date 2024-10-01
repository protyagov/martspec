import React, { CSSProperties, useState, useId } from "react";
import IconChevronCircle from "@/atomic/atom/icon-chevron-circle";
import "@/sass/molecule/accordion.scss";

export interface BackgroundImage {
    src: string;
    width: number;
    height: number;
}

interface AccordionProps {
    title: string;
    bgColor: CSSProperties["color"];
    expandIconColor: CSSProperties["color"];
    bgImg?: BackgroundImage;
    children: React.ReactNode;
    textColor?: CSSProperties["color"];
    defaultExpanded?: boolean;
    mobileBgResized?: boolean;
}

export default function Accordion({
    title,
    bgColor,
    expandIconColor,
    bgImg,
    children,
    textColor = "#212529",
    defaultExpanded = false,
    mobileBgResized = false,
}: AccordionProps): React.ReactNode {
    const collapseId = useId();
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            <h3 className="mb-0">
                <button
                    type="button"
                    onClick={toggleExpand}
                    className="accordion-header position-relative d-flex w-100 align-items-center justify-content-between p-4 overflow-hidden border-0 rounded-4"
                    style={{ backgroundColor: bgColor, color: textColor }}
                    aria-expanded={defaultExpanded}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                >
                    <span className="title text-start fw-medium z-1">{title}</span>
                    <IconChevronCircle
                        className={`accordion-icon ${isExpanded ? "accordion-expanded-icon" : ""}`}
                        style={{ color: expandIconColor }}
                    />
                    {bgImg && (
                        <img
                            className={`bg-image position-absolute ${mobileBgResized ? "mobile-bg-resize" : ""}`}
                            src={bgImg.src}
                            alt=""
                            width={bgImg.width}
                            height={bgImg.height}
                        />
                    )}
                </button>
            </h3>
            <div id={collapseId} className={`collapse ${isExpanded ? "show" : ""}`}>
                <div aria-expanded={isExpanded}>{children}</div>
            </div>
        </>
    );
}
