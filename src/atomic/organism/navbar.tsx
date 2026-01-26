import * as React from "react";
import _, { Locale } from "@/i18n/locale";

function NavigationBarLanguageDropdown() {
    const languages = Locale.SUPPORTED_LANG;
    const path = location.pathname;

    const getLanguageLink = (language: string) => {
        if (path.length > 1) {
            const regex = new RegExp("/" + "(" + languages.join("|") + ")" + "(/|$)", "i");
            const languageMatch = path.match(regex);
            const currentLanguage = languageMatch ? languageMatch[0] : "/";

            return path.replace(currentLanguage, "/" + language + "/").replace(/\/$/, "");
        }
        return "/" + language;
    };

    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                >
                    {Locale.languageName(Locale.language)}
                </a>
                <ul className="dropdown-menu dropdown-menu-end fade-down">
                    {languages.map((language) => (
                        <li key={"nav-lang-link-" + language} hidden={Locale.language == language}>
                            <a className="nav-link dropdown-item" href={getLanguageLink(language)}>
                                {Locale.languageName(language)}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}

const menuItems = [
    { key: "vitamin", labelKey: "VITAMIN.HEAD" },
    { key: "bodysize", labelKey: "SIZE.HEAD" },
    { key: "bodymass", labelKey: "MASS.HEAD" },
    { key: "magnesium", labelKey: "MAGNESIUM.HEAD" },
    { key: "waistline", labelKey: "WAIST.HEAD" },
    { key: "bodyzinc", labelKey: "ZINC.HEAD" },
    { key: "emotion", labelKey: "EMOTION.HEAD" },
    { key: "electrolyte", labelKey: "ELECTROLYTE.HEAD" },
    { key: "iron", labelKey: "IRON.HEAD" },
];

export default function NavigationBar() {
    return (
        <nav className="ms-navbar navbar-expand-lg">
            <div className="ms-s-offset my-0">
                <a className="ms-navbar-brand" href={Locale.i18nLink("/")}>
                    <img
                        src="/img/logo.svg"
                        width="87"
                        height="30"
                        alt={_("ERROR.404_BTN")}
                        className="d-inline-block align-text-top"
                    />
                </a>

                <button
                    className="navbar-toggler navbar-toggler-open"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#5396C6" />
                    </svg>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown ps-lg-5">
                            <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownMain"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                {_("NAV.ABOUT")}
                            </a>

                            <ul
                                className="dropdown-menu dropdown-menu-end fade-down"
                                aria-labelledby="navbarDropdownMain"
                            >
                                <li>
                                    <a className="nav-link dropdown-item" href={Locale.i18nLink("about")}>
                                        {_("ABOUT.HEAD")}
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link dropdown-item" href={Locale.i18nLink("team")}>
                                        {_("TEAM.HEAD")}
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link dropdown-item" href={Locale.i18nLink("careers")}>
                                        {_("CAREERS.HEAD")}
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown ps-lg-5">
                            <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownPages"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                {_("NAV.APPS")}
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end fade-down"
                                aria-labelledby="navbarDropdownPages"
                            >
                                {menuItems
                                    .map(({ key, labelKey }) => ({
                                        key,
                                        text: _(labelKey),
                                    }))
                                    .sort((a, b) => a.text.localeCompare(b.text))
                                    .map(({ key, text }) => (
                                        <li key={key}>
                                            <a className="nav-link dropdown-item" href={Locale.i18nLink(key)}>
                                                {text}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    </ul>

                    {NavigationBarLanguageDropdown()}
                </div>
            </div>
        </nav>
    );
}
