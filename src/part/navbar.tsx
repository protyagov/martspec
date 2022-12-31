import * as React from "react";
import _, { Locale } from "src/i18n/locale"

function NavigationBarLanguageDropdown() {
    return <ul className="navbar-nav">

        <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              { Locale.languageName(Locale.language) }
            </a>
            <ul className="dropdown-menu">
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

            <button className="navbar-toggler navbar-toggler-open" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#5396C6"/>
                </svg>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav me-auto">

                    <li className="nav-item dropdown ps-lg-5">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            {_("NAV.ABOUT")}
                        </a>

                        <ul className="dropdown-menu"
                            aria-labelledby="navbarDropdown">
                            <li><a className="nav-link dropdown-item" href="#">{_("ABOUT.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("MISSION.HEAD")}</a></li>
                        </ul>
                    </li>


                    <li className="nav-item dropdown ps-lg-5">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            {_("NAV.APPS")}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="nav-link dropdown-item" href="#">{_("VITAMIN.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("SIZE.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("MASS.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("WAIST.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("ZINC.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("EMOTION.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href="#">{_("ELECTROLYTE.HEAD")}</a></li>
                        </ul>
                    </li>
                </ul>
          
                {NavigationBarLanguageDropdown()}
          
            </div>
        </div>
    </nav>
}