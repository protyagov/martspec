import * as React from "react";
import _, { Locale } from "src/i18n/locale"

function NavigationBarLanguageDropdown() {
    return <ul className="navbar-nav">

        <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              { Locale.languageName(Locale.language) }
            </a>
            <ul className="dropdown-menu dropdown-position border-1">
                <li hidden={Locale.language == 'en'}>
                    <a className="nav-link dropdown-item" href="/en">English</a>
                </li>
                <li hidden={Locale.language == 'ru'}>
                    <a className="nav-link dropdown-item" href="/ru">Русский</a>
                </li>
                <li hidden={Locale.language == 'de'}>
                    <a className="nav-link dropdown-item" href="/de">Deutsche</a>
                </li>
                <li hidden={Locale.language == 'fr'}>
                    <a className="nav-link dropdown-item" href="/fr">Français</a>
                </li>
                <li hidden={Locale.language == 'hi'}>
                    <a className="nav-link dropdown-item" href="/hi">हिन्दी</a>
                </li>
                <li hidden={Locale.language == 'pt'}>
                    <a className="nav-link dropdown-item" href="/pt">Português</a>
                </li>
                <li hidden={Locale.language == 'es'}>
                    <a className="nav-link dropdown-item" href="/es">Español</a>
                </li>
                <li hidden={Locale.language == 'zh'}>
                    <a className="nav-link dropdown-item" href="/zh">中文</a>
                </li>
                <li hidden={Locale.language == 'ja'}>
                    <a className="nav-link dropdown-item" href="/ja">日本語</a>
                </li>
                <li hidden={Locale.language == 'ar'}>
                    <a className="nav-link dropdown-item" href="/ar">عربي</a>
                </li>
            </ul>
        </li>
    </ul>
}


export default function NavigationBar() {
    return <nav className="ms-navbar navbar-expand-lg px-lg-5">
        <div className="container-fluid">

            <a className="navbar-brand" href={Locale.i18nLink("/")}>
                <img src="/img/logo.64.webp" alt={_("ERROR.404_BTN")} className="d-inline-block align-text-top"
                    width={64} height={48} />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav me-auto">

                    <li className="nav-item dropdown ps-lg-5">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {_("HEADER.ABOUT.TITLE")}
                        </a>

                        <ul className="dropdown-menu dropdown-position border-1"
                            aria-labelledby="navbarDropdown">
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.ABOUT.LI1")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.ABOUT.LI2")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.ABOUT.LI1")}</a></li>
                        </ul>
                    </li>


                    <li className="nav-item dropdown ps-lg-5">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {_("HEADER.APPLICATION.TITLE")}
                        </a>
                        <ul className="dropdown-menu dropdown-position border-1" aria-labelledby="navbarDropdown">
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI1")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI2")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI3")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI4")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI5")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI6")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("HEADER.APPLICATION.LI7")}</a></li>
                        </ul>
                    </li>
                </ul>
                {NavigationBarLanguageDropdown()}
            </div>
        </div>
    </nav>
}