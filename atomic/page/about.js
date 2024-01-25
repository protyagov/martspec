import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale";
import PageHeader from "../molecule/page-header";
export default function About() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5" },
            React.createElement(PageHeader, { title: "ABOUT.HEAD", imgSrc: "/img/about.svg", imgAlt: "ABOUT.IMG", imgH: 400, imgW: 426 }),
            React.createElement("section", null,
                React.createElement("p", null, _("ABOUT.P1")),
                React.createElement("p", null, _("ABOUT.P2")),
                React.createElement("p", null, _("ABOUT.P3")),
                React.createElement("p", null, _("ABOUT.P4")),
                React.createElement("p", null, _("ABOUT.P5")),
                React.createElement("p", null, _("ABOUT.P6")))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=about.js.map