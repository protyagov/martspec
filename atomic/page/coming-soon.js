import * as React from "react";
import _ from "src/i18n/locale";
import SocialBar from "src/atomic/organism/social-bar";
export default function ComingSoon() {
    return React.createElement("div", { className: "ms-base-page text-center py-5" },
        React.createElement("section", null,
            React.createElement("img", { src: "/img/coming-soon.png", className: "ms-base-image mb-4", alt: _("COMING_SOON.HEAD"), height: 300, width: 328 }),
            React.createElement("h1", { className: "mb-3" }, _("COMING_SOON.HEAD")),
            React.createElement("p", { className: "mb-0", style: { fontFamily: "os4", color: "#444444" } }, _("COMING_SOON.TEXT_1")),
            React.createElement("p", { className: "mb-4", style: { fontFamily: "os4", color: "#444444" } }, _("COMING_SOON.TEXT_2")),
            React.createElement("a", { href: "/", className: "ms-btn-large mt-1 mb-4" }, _("COMING_SOON.BTN"))),
        React.createElement("section", null,
            React.createElement("p", { className: "pt-3 mb-1", style: { fontFamily: "os4", color: "#444444" } }, _("COMING_SOON.CTA")),
            React.createElement(SocialBar, { color: "black" })));
}
//# sourceMappingURL=coming-soon.js.map