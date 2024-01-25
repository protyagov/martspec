import * as React from "react";
import _ from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ContentsList from "src/atomic/molecule/contents-list";
import { useScrollSpy } from "src/hooks";
import PageHeader from "../../molecule/page-header";
export default function Openness() {
    const LIST3_COUNT = 6;
    const LIST5_1_COUNT = 6;
    const LIST5_2_COUNT = 6;
    const CONTENTS_COUNT = 6;
    useScrollSpy("contents-list");
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion personality-trait" },
            React.createElement(PageHeader, { title: "OPENNESS.HEAD", appId: 1562956213, appDownloadTitle: "OPENNESS.DWN", imgSrc: "/img/page/openness/openness.webp", imgAlt: "OPENNESS.IMG", imgH: 390, imgW: 421 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 order-lg-1 order-2" },
                        React.createElement("div", { id: "section-1", className: "content-wrapper" },
                            React.createElement("h2", null, _("OPENNESS.HEAD1")),
                            React.createElement("p", null, _("OPENNESS.DESK1_1")),
                            React.createElement("p", null, _("OPENNESS.DESK1_2"))),
                        React.createElement("div", { id: "section-2", className: "content-wrapper" },
                            React.createElement("h2", null, _("OPENNESS.HEAD2")),
                            React.createElement("p", null, _("OPENNESS.DESK2_1")),
                            React.createElement("p", null, _("OPENNESS.DESK2_2")),
                            React.createElement("img", { src: "/img/page/openness/openness-1.webp", className: "img-fluid", alt: _("OPENNESS.ALT2"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-3", className: "content-wrapper" },
                            React.createElement("h2", null, _("OPENNESS.HEAD3")),
                            React.createElement("p", null, _("OPENNESS.DESK3")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST3_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST3_LI" + ++idx },
                                React.createElement("b", null, _("OPENNESS.LIST3.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("OPENNESS.LIST3.LI" + idx + "_TEXT"))))))),
                        React.createElement("div", { id: "section-4", className: "content-wrapper" },
                            React.createElement("h2", null, _("OPENNESS.HEAD4")),
                            React.createElement("p", null, _("OPENNESS.DESK4_1")),
                            React.createElement("p", null, _("OPENNESS.DESK4_2")),
                            React.createElement("p", null, _("OPENNESS.DESK4_3")),
                            React.createElement("p", null, _("OPENNESS.DESK4_4")),
                            React.createElement("p", null, _("OPENNESS.DESK4_5")),
                            React.createElement("p", null, _("OPENNESS.DESK4_6")),
                            React.createElement("img", { src: "/img/page/openness/openness-2.webp", className: "img-fluid", alt: _("OPENNESS.ALT4"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-5", className: "content-wrapper" },
                            React.createElement("h2", null, _("OPENNESS.HEAD5")),
                            React.createElement("p", null, _("OPENNESS.DESK5_1")),
                            React.createElement("p", null, _("OPENNESS.DESK5_2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST5_1_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST5_1_LI" + ++idx },
                                React.createElement("span", null, _("OPENNESS.LIST5_1.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("OPENNESS.DESK5_3")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST5_2_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST5_2_LI" + ++idx },
                                React.createElement("span", null, _("OPENNESS.LIST5_2.LI" + idx + "_TEXT"))))))),
                        React.createElement("div", { id: "section-6", className: "content-wrapper" },
                            React.createElement("h2", null, _("OPENNESS.HEAD6")),
                            React.createElement("p", null, _("OPENNESS.DESK6_1")),
                            React.createElement("p", null, _("OPENNESS.DESK6_2")),
                            React.createElement("p", null, _("OPENNESS.DESK6_3")),
                            React.createElement("p", null, _("OPENNESS.DESK6_4")),
                            React.createElement("p", null, _("OPENNESS.DESK6_5")))),
                    React.createElement("div", { className: "col-lg-4 order-lg-2 order-1" },
                        React.createElement("div", { className: "contents-list" },
                            React.createElement("h3", null, _("OPENNESS.CONTENTS")),
                            React.createElement(ContentsList, { PAGE: "OPENNESS", CONTENTS_COUNT: CONTENTS_COUNT })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=openness.js.map