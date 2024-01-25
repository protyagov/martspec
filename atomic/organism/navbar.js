import * as React from "react";
import _, { Locale } from "src/i18n/locale";
function NavigationBarLanguageDropdown() {
    const languages = Locale.SUPPORTED_LANG;
    const path = location.pathname;
    const getLanguageLink = (language) => {
        if (path.length > 1) {
            const regex = new RegExp("/" + "(" + languages.join("|") + ")" + "(\/|$)", "i");
            const currentLanguage = path.match(regex) ? path.match(regex)[0] : "/";
            return path
                .replace(currentLanguage, "/" + language + "/")
                .replace(/\/$/, "");
        }
        ;
        return "/" + language;
    };
    return React.createElement("ul", { className: "navbar-nav" },
        React.createElement("li", { className: "nav-item dropdown" },
            React.createElement("a", { className: "nav-link", href: "#", id: "navbarDropdown", role: "button", "data-bs-toggle": "dropdown", "data-bs-display": "static", "aria-expanded": "false" }, Locale.languageName(Locale.language)),
            React.createElement("ul", { className: "dropdown-menu" }, languages.map(language => (React.createElement("li", { key: "nav-lang-link-" + language, hidden: Locale.language == language },
                React.createElement("a", { className: "nav-link dropdown-item", href: getLanguageLink(language) }, Locale.languageName(language))))))));
}
export default function NavigationBar() {
    return React.createElement("nav", { className: "ms-navbar navbar-expand-lg" },
        React.createElement("div", { className: "ms-s-offset my-0" },
            React.createElement("a", { className: "navbar-brand", href: Locale.i18nLink("/") },
                React.createElement("img", { src: "/img/logo.svg", alt: _("ERROR.404_BTN"), className: "d-inline-block align-text-top", width: 64, height: 48 })),
            React.createElement("button", { className: "navbar-toggler navbar-toggler-open", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNavDropdown", "aria-controls": "navbarNavDropdown", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("svg", { width: "18", height: "12", viewBox: "0 0 18 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z", fill: "#5396C6" }))),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarNavDropdown" },
                React.createElement("ul", { className: "navbar-nav me-auto" },
                    React.createElement("li", { className: "nav-item dropdown ps-lg-5" },
                        React.createElement("a", { className: "nav-link", href: "#", id: "navbarDropdownMain", role: "button", "data-bs-toggle": "dropdown", "data-bs-display": "static", "aria-expanded": "false" }, _("NAV.ABOUT")),
                        React.createElement("ul", { className: "dropdown-menu", "aria-labelledby": "navbarDropdownMain" },
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("about") }, _("ABOUT.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("mission") }, _("MISSION.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("team") }, _("TEAM.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("privacy-policy") }, _("PP.HEAD"))))),
                    React.createElement("li", { className: "nav-item dropdown ps-lg-5" },
                        React.createElement("a", { className: "nav-link", href: "#", id: "navbarDropdownPages", role: "button", "data-bs-toggle": "dropdown", "data-bs-display": "static", "aria-expanded": "false" }, _("NAV.APPS")),
                        React.createElement("ul", { className: "dropdown-menu", "aria-labelledby": "navbarDropdownPages" },
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("vitamin") }, _("VITAMIN.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("bodysize") }, _("SIZE.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("bodymass") }, _("MASS.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("waistline") }, _("WAIST.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("bodyzinc") }, _("ZINC.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("emotion") }, _("EMOTION.HEAD"))),
                            React.createElement("li", null,
                                React.createElement("a", { className: "nav-link dropdown-item", href: Locale.i18nLink("electrolyte") }, _("ELECTROLYTE.HEAD")))))),
                NavigationBarLanguageDropdown())));
}
//# sourceMappingURL=navbar.js.map