import * as React from "react";
import _ from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";
import PageHeader from "../molecule/page-header";
export default function BodyZinc() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5" },
            React.createElement(PageHeader, { title: "ZINC.HEAD", subtitleLevel2: "ZINC.ABOUT", appId: 1547395353, appDownloadTitle: "ZINC.DWN", imgSrc: "/img/page/zinc/body-zinc.svg", imgAlt: "ZINC.IMG", imgH: 426, imgW: 420 }),
            React.createElement("section", null,
                React.createElement("h4", null, _("ZINC.HEAD1")),
                React.createElement("p", { className: "mt-3" },
                    _("ZINC.DESC1"),
                    React.createElement("a", { href: "https://www.healthline.com/nutrition/zinc", target: "_blank" },
                        React.createElement("br", null),
                        React.createElement("small", null,
                            React.createElement("i", null, _("ZINC.LINK1")))))),
            React.createElement("section", null,
                React.createElement("h4", null, _("ZINC.HEAD2")),
                React.createElement("p", { className: "mt-3" },
                    _("ZINC.DESC2"),
                    React.createElement("a", { href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4413488/", target: "_blank" },
                        React.createElement("br", null),
                        React.createElement("small", null,
                            React.createElement("i", null, "Indian J Plast Surg. 2015 Jan-Apr; 48(1): 4\u201316."))))),
            React.createElement("section", null,
                React.createElement("h4", null, _("ZINC.HEAD3")),
                React.createElement("p", { className: "mt-3" },
                    _("ZINC.DESC3"),
                    React.createElement("a", { href: "https://www.ncbi.nlm.nih.gov/books/NBK493173/", target: "_blank" },
                        React.createElement("br", null),
                        React.createElement("small", null,
                            React.createElement("i", null, "Chronic Inflammation")))))),
        React.createElement("div", { className: "container mb-5 pb-5 text-center" },
            React.createElement(ImageI18N, { src: '/img/page/zinc/zinc-app-en.webp', alt: _("MAIN.P4.IMG"), cls: "ms-base-image", w: 512, h: 512 })),
        React.createElement(Footer, null));
}
//# sourceMappingURL=bodyzinc.js.map