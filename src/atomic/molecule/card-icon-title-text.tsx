import React, { CSSProperties, ForwardedRef } from "react";
import IconTitleTextElem, { IconTitleText } from "./icon-title-text-elem";

export interface CardIconTitleTextProps {
    iconProps: IconTitleText;
    text: React.ReactNode;
    bgColor?: CSSProperties["color"];
    forwardedRef?: ForwardedRef<HTMLHeadingElement>;
}

const CardIconTitleText = React.forwardRef<HTMLDivElement, CardIconTitleTextProps>(
    ({ iconProps, text, bgColor, forwardedRef }, ref) => {
        return (
            <div
                ref={ref}
                className={`card-icon-title-text ${bgColor ? "has-bg-color" : ""}`}
                style={bgColor ? { backgroundColor: bgColor } : undefined}
            >
                <div className="d-flex align-items-center p-0 m-0">
                    <IconTitleTextElem {...iconProps}
                        forwardedRef={forwardedRef}
                    />
                </div>
                <p>{text}</p>
            </div>
        );
    }
);

export default CardIconTitleText;
