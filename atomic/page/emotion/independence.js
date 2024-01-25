import * as React from "react";
import _ from "src/i18n/locale";
import { useScrollSpy } from "src/hooks";
import { Footer } from "../../organism/footer";
import NavigationBar from "../../organism/navbar";
import ContentsList from "../../molecule/contents-list";
import PageHeader from "../../molecule/page-header";
export default function Independence() {
    const LIST2_COUNT = 5;
    const LIST3_COUNT = 5;
    const LIST5_COUNT = 7;
    const LIST6_COUNT = 9;
    const CONTENTS_COUNT = 6;
    useScrollSpy("contents-list");
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion personality-trait" },
            React.createElement(PageHeader, { title: "INDEPENDENCE.HEAD", appId: 1562956213, appDownloadTitle: "INDEPENDENCE.DWN", imgSrc: "/img/page/independence/independence.webp", imgAlt: "INDEPENDENCE.IMG", imgH: 390, imgW: 421 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 order-lg-1 order-2" },
                        React.createElement("div", { id: "section-1", className: "content-wrapper" },
                            React.createElement("h2", null, _("INDEPENDENCE.HEAD1")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK1_1")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK1_2")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK1_3"))),
                        React.createElement("div", { id: "section-2", className: "content-wrapper" },
                            React.createElement("h2", null, _("INDEPENDENCE.HEAD2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST2_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST2_LI" + ++idx },
                                React.createElement("b", null, _("INDEPENDENCE.LIST2.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("INDEPENDENCE.LIST2.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/independence/independence-1.webp", className: "img-fluid", alt: _("INDEPENDENCE.ALT2"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-3", className: "content-wrapper" },
                            React.createElement("h2", null, _("INDEPENDENCE.HEAD3")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK3")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST3_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST3_LI" + ++idx },
                                React.createElement("b", null, _("INDEPENDENCE.LIST3.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("INDEPENDENCE.LIST3.LI" + idx + "_TEXT"))))))),
                        React.createElement("div", { id: "section-4", className: "content-wrapper" },
                            React.createElement("h2", null, _("INDEPENDENCE.HEAD4")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK4_1")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK4_2")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK4_3")),
                            React.createElement("img", { src: "/img/page/independence/independence-2.webp", className: "img-fluid", alt: _("INDEPENDENCE.ALT2"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-5", className: "content-wrapper" },
                            React.createElement("h2", null, _("INDEPENDENCE.HEAD5")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK5_1")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST5_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST5_LI" + ++idx },
                                React.createElement("b", null, _("INDEPENDENCE.LIST5.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("INDEPENDENCE.LIST5.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("INDEPENDENCE.DESK5_2"))),
                        React.createElement("div", { id: "section-6", className: "content-wrapper" },
                            React.createElement("h2", null, _("INDEPENDENCE.HEAD6")),
                            React.createElement("p", null, _("INDEPENDENCE.DESK6_1")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST6_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST6_LI" + ++idx },
                                React.createElement("span", null, _("INDEPENDENCE.LIST6.LI" + idx + "_TEXT")))))),
                            React.createElement("p", null, _("INDEPENDENCE.DESK6_2")))),
                    React.createElement("div", { className: "col-lg-4 order-lg-2 order-1" },
                        React.createElement("div", { className: "contents-list" },
                            React.createElement("h3", null, _("INDEPENDENCE.CONTENTS")),
                            React.createElement(ContentsList, { PAGE: "INDEPENDENCE", CONTENTS_COUNT: CONTENTS_COUNT })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=independence.js.map