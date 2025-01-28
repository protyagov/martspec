import React from "react";

interface Icon {
    src: string;
    alt: string;
}

export interface IconTitleText {
    icon: Icon;
    title: string;
    subtitle?: string;
}

interface IconTitleTextElemProps extends IconTitleText {}

const IconTitleTextElem = ({ icon, title, subtitle }: IconTitleTextElemProps): JSX.Element => {
    const appleIconName = "icon-apple-health.svg";
    const appleIconClass = "no-filter";

    return (
        <li>
            <div className={`icon${icon.src.includes(appleIconName) ? ` ${appleIconClass}` : ""}`}>
                <img src={icon.src} alt={icon.alt} />
            </div>
            <div>
                <h3>{title}</h3>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </li>
    );
};

export default IconTitleTextElem;
