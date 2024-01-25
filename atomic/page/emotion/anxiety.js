import * as React from "react";
import _ from "src/i18n/locale";
import { useScrollSpy } from "src/hooks";
import { Footer } from "../../organism/footer";
import NavigationBar from "../../organism/navbar";
import ContentsList from "../../molecule/contents-list";
import PageHeader from "../../molecule/page-header";
export default function Anxiety() {
    const LIST2_COUNT = 3;
    const LIST3_COUNT = 9;
    const LIST4_COUNT = 6;
    const CONTENTS_COUNT = 5;
    useScrollSpy("contents-list");
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion personality-trait" },
            React.createElement(PageHeader, { title: "ANXIETY.HEAD", appId: 1562956213, appDownloadTitle: "ANXIETY.DWN", imgSrc: "/img/page/anxiety/anxiety.webp", imgAlt: "ANXIETY.IMG", imgH: 390, imgW: 512 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 order-lg-1 order-2" },
                        React.createElement("div", { id: "section-1", className: "content-wrapper" },
                            React.createElement("h2", null, _("ANXIETY.HEAD1")),
                            React.createElement("p", null, _("ANXIETY.DESK1_1")),
                            React.createElement("p", null, _("ANXIETY.DESK1_2")),
                            React.createElement("p", null, _("ANXIETY.DESK1_3"))),
                        React.createElement("div", { id: "section-2", className: "content-wrapper" },
                            React.createElement("h2", null, _("ANXIETY.HEAD2")),
                            React.createElement("p", null, _("ANXIETY.DESK2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST2_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST2_LI" + ++idx },
                                React.createElement("b", null, _("ANXIETY.LIST2.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("ANXIETY.LIST2.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/anxiety/anxiety-img-1.webp", className: "img-fluid", alt: _("ANXIETY.ALT2"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-3", className: "content-wrapper" },
                            React.createElement("h2", null, _("ANXIETY.HEAD3")),
                            React.createElement("p", null, _("ANXIETY.DESK3")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST3_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST3_LI" + ++idx },
                                React.createElement("span", null, _("ANXIETY.LIST3.LI" + idx + "_TEXT"))))))),
                        React.createElement("div", { id: "section-4", className: "content-wrapper" },
                            React.createElement("h2", null, _("ANXIETY.HEAD4")),
                            React.createElement("p", null, _("ANXIETY.DESK4")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST4_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST4_LI" + ++idx },
                                React.createElement("b", null, _("ANXIETY.LIST4.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("ANXIETY.LIST4.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/anxiety/anxiety-img-2.webp", className: "img-fluid", alt: _("ANXIETY.ALT4"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-5", className: "content-wrapper" },
                            React.createElement("h2", null, _("ANXIETY.HEAD5")),
                            React.createElement("p", null, _("ANXIETY.DESK5_1")),
                            React.createElement("p", null, _("ANXIETY.DESK5_2")),
                            React.createElement("p", null, _("ANXIETY.DESK5_3")),
                            React.createElement("p", null, _("ANXIETY.DESK5_4")),
                            React.createElement("p", null, _("ANXIETY.DESK5_5")))),
                    React.createElement("div", { className: "col-lg-4 order-lg-2 order-1" },
                        React.createElement("div", { className: "contents-list" },
                            React.createElement("h3", null, _("ANXIETY.CONTENTS")),
                            React.createElement(ContentsList, { PAGE: "ANXIETY", CONTENTS_COUNT: CONTENTS_COUNT })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=anxiety.js.map