import * as React from "react";
import _ from "src/i18n/locale";
export default function PageError_404() {
    return React.createElement("div", { className: "ms-base-page text-center pt-5 mt-5" },
        React.createElement("img", { src: "/img/error_404.svg", alt: _("ERROR.404_HEAD"), height: 300, width: 326 }),
        React.createElement("h1", null, _("ERROR.404_HEAD")),
        React.createElement("p", { className: "lead fo-2x" }, _("ERROR.404_TEXT")),
        React.createElement("a", { href: "/" },
            React.createElement("button", { type: "button", className: "btn btn-outline-secondary btn-lg ml-2" }, _("ERROR.404_BTN"))));
}
//# sourceMappingURL=404.js.map