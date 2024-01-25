import * as React from "react";
import _ from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";
import PageHeader from "../molecule/page-header";
export default function BodySize() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5" },
            React.createElement(PageHeader, { title: "SIZE.HEAD", subtitleLevel2: "SIZE.ABOUT", appId: 1564205068, appDownloadTitle: "SIZE.DWN", imgSrc: "/img/page/body-size/size-head.svg", imgAlt: "SIZE.IMG", imgH: 512, imgW: 512 }),
            React.createElement("section", null,
                React.createElement("h4", null, _("SIZE.HEAD1")),
                React.createElement("p", { className: "mt-3" }, _("SIZE.DESC1"))),
            React.createElement(ImageI18N, { src: "/img/page/body-size/size-middle-en.webp", w: 512, h: 512, cls: "mx-auto img-fluid", alt: _("SIZE.IMG") }),
            React.createElement("section", null,
                React.createElement("h4", null, _("SIZE.HEAD2")),
                React.createElement("p", { className: "mt-3" }, _("SIZE.DESC2"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("SIZE.HEAD3")),
                React.createElement("p", { className: "mt-3" },
                    React.createElement("a", { href: "https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women", target: "_blank" }, _("WAIST.LINK2")),
                    _("WAIST.DESC2"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("SIZE.HEAD4")),
                React.createElement("p", { className: "mt-3" }, _("SIZE.DESC4"))),
            React.createElement("section", null,
                React.createElement("h4", null, _("WAIST.HEAD1")),
                React.createElement("p", { className: "mt-3" },
                    _("WAIST.DESC1"),
                    React.createElement("a", { href: "https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm", target: "_blank" },
                        React.createElement("br", null),
                        React.createElement("small", null,
                            React.createElement("i", null, _("WAIST.LINK1")))))),
            React.createElement("section", null,
                React.createElement("h4", null, _("SIZE.HEAD5")),
                React.createElement("p", { className: "mt-3" }, _("SIZE.DESC5")))),
        React.createElement("div", { className: "pb-5 text-center" },
            React.createElement(ImageI18N, { src: "/img/page/body-size/size-bottom-en.webp", w: 512, h: 512, cls: "img-fluid mb-3 px-4", alt: _("SIZE.IMG") })),
        React.createElement(Footer, null));
}
//# sourceMappingURL=bodysize.js.map