import React, { CSSProperties } from "react";
import IconTitleTextElem, { IconTitleText } from "./icon-title-text-elem";

export interface CardIconTitleTextProps {
    iconProps: IconTitleText;
    text: React.ReactNode; 
    bgColor?: CSSProperties["color"];
}

const CardIconTitleText = ({ iconProps, text, bgColor }: CardIconTitleTextProps): JSX.Element => {
    return (
        <div 
            className={`card-icon-title-text ${bgColor ? "has-bg-color" : ""}`}
            style={bgColor ? { backgroundColor: bgColor } : undefined}
        >
            <div className="list-with-icons d-flex justify-content-center align-items-center p-0 m-0">
                <IconTitleTextElem {...iconProps} />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default CardIconTitleText;
