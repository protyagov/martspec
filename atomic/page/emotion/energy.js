import * as React from "react";
import _ from "src/i18n/locale";
import { useScrollSpy } from "src/hooks";
import { Footer } from "../../organism/footer";
import NavigationBar from "../../organism/navbar";
import ContentsList from "../../molecule/contents-list";
import PageHeader from "../../molecule/page-header";
export default function Energy() {
    const LIST2_COUNT = 3;
    const LIST3_COUNT = 3;
    const LIST4_1_COUNT = 4;
    const LIST4_2_COUNT = 4;
    const LIST5_COUNT = 10;
    const CONTENTS_COUNT = 5;
    useScrollSpy("contents-list");
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion personality-trait" },
            React.createElement(PageHeader, { title: "ENERGY.HEAD", appId: 1562956213, appDownloadTitle: "ENERGY.DWN", imgSrc: "/img/page/energy/energy.webp", imgAlt: "ENERGY.IMG", imgH: 390, imgW: 421 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 order-lg-1 order-2" },
                        React.createElement("div", { id: "section-1", className: "content-wrapper" },
                            React.createElement("h2", null, _("ENERGY.HEAD1")),
                            React.createElement("p", null, _("ENERGY.DESK1_1")),
                            React.createElement("p", null, _("ENERGY.DESK1_2")),
                            React.createElement("p", null, _("ENERGY.DESK1_3"))),
                        React.createElement("div", { id: "section-2", className: "content-wrapper" },
                            React.createElement("h2", null, _("ENERGY.HEAD2")),
                            React.createElement("p", null, _("ENERGY.DESK2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST2_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST2_LI" + ++idx },
                                React.createElement("b", null, _("ENERGY.LIST2.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("ENERGY.LIST2.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/energy/energy-1.webp", className: "img-fluid", alt: _("ENERGY.ALT2"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-3", className: "content-wrapper" },
                            React.createElement("h2", null, _("ENERGY.HEAD3")),
                            React.createElement("p", null, _("ENERGY.DESK3")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST3_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST3_LI" + ++idx },
                                React.createElement("b", null, _("ENERGY.LIST3.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("ENERGY.LIST3.LI" + idx + "_TEXT"))))))),
                        React.createElement("div", { id: "section-4", className: "content-wrapper" },
                            React.createElement("h2", null, _("ENERGY.HEAD4")),
                            React.createElement("p", null, _("ENERGY.DESK4_1")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST4_1_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST4_1_LI" + ++idx },
                                React.createElement("b", null, _("ENERGY.LIST4_1.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("ENERGY.LIST4_1.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("ENERGY.DESK4_2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST4_2_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST4_2_LI" + ++idx },
                                React.createElement("b", null, _("ENERGY.LIST4_2.LI" + idx + "_HEAD")),
                                React.createElement("span", null, " " + _("ENERGY.LIST4_2.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/energy/energy-2.webp", className: "img-fluid", alt: _("ENERGY.ALT4"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-5", className: "content-wrapper" },
                            React.createElement("h2", null, _("ENERGY.HEAD5")),
                            React.createElement("p", null, _("ENERGY.DESK5_1")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST5_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST5_LI" + ++idx },
                                React.createElement("span", null, _("ENERGY.LIST5.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("ENERGY.DESK5_2")))),
                    React.createElement("div", { className: "col-lg-4 order-lg-2 order-1" },
                        React.createElement("div", { className: "contents-list" },
                            React.createElement("h3", null, _("ENERGY.CONTENTS")),
                            React.createElement(ContentsList, { PAGE: "ENERGY", CONTENTS_COUNT: CONTENTS_COUNT })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=energy.js.map