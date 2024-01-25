import React from "react";
import _ from "src/i18n/locale";
import ButtonApple from "../atom/button-apple";
export default function PageHeader(props) {
    const { title, subtitleLevel1, subtitleLevel2, imgSrc, imgH, imgW, imgAlt, appId, appDownloadTitle, } = props;
    return (React.createElement("div", { className: "ms-base-new" },
        React.createElement("section", { className: "page-header text-center" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    imgSrc && (React.createElement("img", { src: imgSrc, height: imgH, width: imgW, className: "ms-base-image", alt: imgAlt })),
                    React.createElement("div", { className: "headings" },
                        React.createElement("h1", null, _(title)),
                        subtitleLevel1 && React.createElement("h2", null, _(subtitleLevel1)),
                        subtitleLevel2 && React.createElement("h6", null, _(subtitleLevel2))),
                    appId && (React.createElement(ButtonApple, { appId: appId, appDownloadTitle: appDownloadTitle })))))));
}
//# sourceMappingURL=page-header.js.map