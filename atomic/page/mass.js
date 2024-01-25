import * as React from "react";
import _ from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import PageHeader from "../molecule/page-header";
export default function Bodymass() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5" },
            React.createElement(PageHeader, { title: "MASS.HEAD", subtitleLevel2: "MASS.ABOUT", appId: 1507588203, appDownloadTitle: "MASS.DWN", imgSrc: "/img/page/body-mass/mass.svg", imgAlt: "MASS.IMG", imgH: 406, imgW: 512 }),
            React.createElement("section", null,
                React.createElement("h4", null, _("MASS.HEAD1")),
                React.createElement("p", { className: "mt-3" }, _("MASS.DESC1"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("MASS.HEAD2")),
                React.createElement("p", { className: "mt-3" }, _("MASS.DESC2"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("MASS.HEAD3")),
                React.createElement("p", { className: "mt-3" }, _("MASS.DESC3"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("MASS.HEAD4")),
                React.createElement("p", { className: "mt-3" },
                    React.createElement("ul", null,
                        React.createElement("li", null, _("MASS.DESC4_1")),
                        React.createElement("li", null, _("MASS.DESC4_2")),
                        React.createElement("li", null, _("MASS.DESC4_3")),
                        React.createElement("li", null, _("MASS.DESC4_4")),
                        React.createElement("li", null, _("MASS.DESC4_5")),
                        React.createElement("li", null, _("MASS.DESC4_6")),
                        React.createElement("li", null, _("MASS.DESC4_7")))))),
        React.createElement("div", { className: "container mb-5 pb-5 text-center" },
            React.createElement("img", { src: "/img/page/body-mass/mass-app.webp", alt: _("MAIN.P2.IMG"), className: "ms-base-image", width: "512px", height: "512px" })),
        React.createElement(Footer, null));
}
//# sourceMappingURL=mass.js.map