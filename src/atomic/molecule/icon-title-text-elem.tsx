import React, { ForwardedRef } from "react";

interface Icon {
    src?: string;
    alt?: string;
    component?: JSX.Element;
}

export interface IconTitleText {
    icon: Icon;
    title: string;
    subtitle?: string;
    forwardedRef?: ForwardedRef<HTMLHeadingElement>;
}

interface IconTitleTextElemProps extends IconTitleText {}

const IconTitleTextElem = ({ icon, title, subtitle, forwardedRef }: IconTitleTextElemProps): JSX.Element => {
    const appleIconName = "icon-apple-health.svg";
    const appleIconClass = "no-filter";

    return (
        <div className="d-flex h-100 gap-3 align-items-start">
            <div className={`icon${icon.src?.includes(appleIconName) ? ` ${appleIconClass}` : ""}`}>
                {icon.component ? icon.component : icon.src ? <img src={icon.src} alt={icon.alt || ""} /> : null}
            </div>
            <h3 className="mb-2" ref={forwardedRef}>
                {title}
            </h3>
            {subtitle && <p className="mb-0">{subtitle}</p>}
        </div>
    );
};


export default IconTitleTextElem;
