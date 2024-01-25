import * as React from "react";
import _ from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import PageHeader from "../molecule/page-header";
export default function WaistLine() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5" },
            React.createElement(PageHeader, { title: "WAIST.HEAD", subtitleLevel2: "WAIST.ABOUT", appId: 1506250420, appDownloadTitle: "WAIST.DWN", imgSrc: "/img/page/waistline/waist.svg", imgAlt: "WAIST.IMG", imgH: 468, imgW: 430 }),
            React.createElement("section", null,
                React.createElement("h4", null, _("WAIST.HEAD3")),
                React.createElement("p", { className: "mt-3" }, _("WAIST.DESC3"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("WAIST.HEAD2")),
                React.createElement("p", { className: "mt-3" },
                    React.createElement("a", { href: "https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women", target: "_blank" }, _("WAIST.LINK2")),
                    _("WAIST.DESC2"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("WAIST.HEAD1")),
                React.createElement("p", { className: "mt-3" },
                    _("WAIST.DESC1"),
                    React.createElement("a", { href: "https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm", target: "_blank" },
                        React.createElement("br", null),
                        React.createElement("small", null,
                            React.createElement("i", null, _("WAIST.LINK1")))))),
            React.createElement("section", null,
                React.createElement("h4", null, _("WAIST.HEAD4")),
                React.createElement("p", { className: "mt-3" },
                    React.createElement("ul", null,
                        React.createElement("li", null, _("WAIST.DESC4_1")),
                        React.createElement("li", null, _("WAIST.DESC4_2")),
                        React.createElement("li", null, _("WAIST.DESC4_3")),
                        React.createElement("li", null,
                            React.createElement("i", null,
                                React.createElement("small", null,
                                    _("WAIST.DESC4_4"),
                                    React.createElement("a", { href: "https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.107.739714", target: "_blank" }, "Circulation, Vol. 117, No. 13"),
                                    ", \u00A0",
                                    React.createElement("a", { href: "https://www.cnn.com/2008/HEALTH/conditions/11/12/healthmag.waist.death.risk/", target: "_blank" }, "CNN"))))))),
            React.createElement("div", { className: "container mb-5 pb-5 text-center" },
                React.createElement("img", { src: "/img/page/waistline/waist-app.webp", alt: _("WAIST.IMG"), className: "ms-base-image", width: "512px", height: "512px" }))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=waist.js.map