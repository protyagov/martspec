import * as React from "react";
import _ from "src/i18n/locale";
import { useScrollSpy } from "src/hooks";
import { Footer } from "../../organism/footer";
import NavigationBar from "../../organism/navbar";
import ContentsList from "../../molecule/contents-list";
import PageHeader from "../../molecule/page-header";
export default function Harmony() {
    const LIST2_COUNT = 7;
    const LIST3_COUNT = 5;
    const LIST4_COUNT = 8;
    const CONTENTS_COUNT = 4;
    useScrollSpy("contents-list");
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion personality-trait" },
            React.createElement(PageHeader, { title: "HARMONY.HEAD", appId: 1562956213, appDownloadTitle: "HARMONY.DWN", imgSrc: "/img/page/harmony/harmony.webp", imgAlt: "HARMONY.IMG", imgH: 390, imgW: 421 }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-8 order-lg-1 order-2" },
                        React.createElement("div", { id: "section-1", className: "content-wrapper" },
                            React.createElement("h2", null, _("HARMONY.HEAD1")),
                            React.createElement("p", null, _("HARMONY.DESK1_1")),
                            React.createElement("p", null, _("HARMONY.DESK1_2"))),
                        React.createElement("div", { id: "section-2", className: "content-wrapper" },
                            React.createElement("h2", null, _("HARMONY.HEAD2")),
                            React.createElement("p", null, _("HARMONY.DESK2")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST2_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST2_LI" + ++idx },
                                React.createElement("span", null, _("HARMONY.LIST2.LI" + idx + "_TEXT")))))),
                            React.createElement("img", { src: "/img/page/harmony/harmony-1.webp", className: "img-fluid", alt: _("HARMONY.ALT2"), width: 805, height: 472 })),
                        React.createElement("div", { id: "section-3", className: "content-wrapper" },
                            React.createElement("h2", null, _("HARMONY.HEAD3")),
                            React.createElement("p", null, _("HARMONY.DESK3")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST3_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST3_LI" + ++idx },
                                React.createElement("b", null, _("HARMONY.LIST3.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("HARMONY.LIST3.LI" + idx + "_TEXT"))))))),
                        React.createElement("div", { id: "section-4", className: "content-wrapper" },
                            React.createElement("h2", null, _("HARMONY.HEAD4")),
                            React.createElement("p", null, _("HARMONY.DESK4")),
                            React.createElement("ul", { className: "ms-5" }, [...Array(LIST4_COUNT)].map((li, idx) => (React.createElement("li", { key: "LIST4_LI" + ++idx },
                                React.createElement("b", null, _("HARMONY.LIST4.LI" + idx + "_HEAD")),
                                React.createElement("span", null,
                                    " ",
                                    " ",
                                    _("HARMONY.LIST4.LI" + idx + "_TEXT")))))))),
                    React.createElement("div", { className: "col-lg-4 order-lg-2 order-1" },
                        React.createElement("div", { className: "contents-list" },
                            React.createElement("h3", null, _("HARMONY.CONTENTS")),
                            React.createElement(ContentsList, { PAGE: "HARMONY", CONTENTS_COUNT: CONTENTS_COUNT })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=harmony.js.map