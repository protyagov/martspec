import * as React from "react";
import _ from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ContentsList from "src/atomic/molecule/contents-list";
import { useScrollSpy } from "src/hooks";
import PageHeader from "../../molecule/page-header";
export default function Productivity() {
    const LISTS_COUNT = {
        LIST2: 8,
        LIST5: 7,
        LIST6_1: 10,
        LIST6_2: 5,
    };
    const CONTENTS_COUNT = 6;
    useScrollSpy("contents-list");
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion personality-trait" },
            React.createElement(PageHeader, { title: "PRODUCTIVITY.HEAD", appId: 1562956213, appDownloadTitle: "PRODUCTIVITY.DWN", imgSrc: "/img/page/productivity/productivity.webp", imgAlt: "PRODUCTIVITY.IMG", imgH: 390, imgW: 410 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 order-lg-1 order-2" },
                        React.createElement("div", { id: "section-1", className: "content-wrapper" },
                            React.createElement("h2", null, _("PRODUCTIVITY.HEAD1")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK1_1")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK1_2"))),
                        React.createElement("div", { id: "section-2", className: "content-wrapper" },
                            React.createElement("h2", null, _("PRODUCTIVITY.HEAD2")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LISTS_COUNT.LIST2)].map((li, idx) => (React.createElement("li", { key: "LIST2_LI" + ++idx },
                                React.createElement("strong", null, _("PRODUCTIVITY.LIST2.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("PRODUCTIVITY.LIST2.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/productivity/productivity-img-1.webp", className: "img-fluid", alt: "", width: 805, height: 472 })),
                        React.createElement("div", { id: "section-3", className: "content-wrapper" },
                            React.createElement("h2", null, _("PRODUCTIVITY.HEAD3")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK3_1")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK3_2")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK3_3")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK3_4"))),
                        React.createElement("div", { id: "section-4", className: "content-wrapper" },
                            React.createElement("h2", null, _("PRODUCTIVITY.HEAD4")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK4_1")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK4_2")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK4_3")),
                            React.createElement("img", { src: "/img/page/productivity/productivity-img-2.webp", className: "img-fluid", alt: "", width: 805, height: 472 })),
                        React.createElement("div", { id: "section-5", className: "content-wrapper" },
                            React.createElement("h2", null, _("PRODUCTIVITY.HEAD5")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK5_1")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LISTS_COUNT.LIST5)].map((li, idx) => (React.createElement("li", { key: "LIST5_LI" + ++idx },
                                React.createElement("strong", null, _("PRODUCTIVITY.LIST5.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("PRODUCTIVITY.LIST5.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK5_2"))),
                        React.createElement("div", { id: "section-6", className: "content-wrapper" },
                            React.createElement("h2", null, _("PRODUCTIVITY.HEAD6")),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK6_1")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LISTS_COUNT.LIST6_1)].map((li, idx) => (React.createElement("li", { key: "LIST6_1_LI" + ++idx },
                                React.createElement("span", null, _("PRODUCTIVITY.LIST6_1.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK6_2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LISTS_COUNT.LIST6_2)].map((li, idx) => (React.createElement("li", { key: "LIST6_2_LI" + ++idx },
                                React.createElement("span", null, _("PRODUCTIVITY.LIST6_2.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("PRODUCTIVITY.DESK6_3")))),
                    React.createElement("div", { className: "col-lg-4 order-lg-2 order-1" },
                        React.createElement("div", { className: "contents-list" },
                            React.createElement("h3", null, _("PRODUCTIVITY.CONTENTS")),
                            React.createElement(ContentsList, { PAGE: "PRODUCTIVITY", CONTENTS_COUNT: CONTENTS_COUNT })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=productivity.js.map