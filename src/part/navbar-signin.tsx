import * as React from "react";
import _, { locale } from "src/i18n/locale";

export default function NavBarLang() {
    return <div className="dropdown float-end" >

        <button className="btn btn-link dropdown-toggle shadow-none" data-bs-toggle="dropdown">
            <i className="fo fo-2x icon-language mt-3" />
        </button>
        <ul className="ms-navbar-nav dropdown-menu dropdown-menu-end border-0">
            <li className="nav-item" hidden={locale.language == 'en'}>
                <a className="nav-link" href="/en">English</a>
            </li>
            <li className="nav-item" hidden={locale.language == 'ru'}>
                <a className="nav-link" href="/ru">Русский</a>
            </li>
            <li className="nav-item" hidden={locale.language == 'de'}>
                <a className="nav-link" href="/de">Deutsche</a>
            </li>
            <li className="nav-item" hidden={locale.language == 'hi'}>
                <a className="nav-link" href="/hi">हिन्दी</a>
            </li>
            <li className="nav-item" hidden={locale.language == 'pt'}>
                <a className="nav-link" href="/pt">Português</a>
            </li>
            <li className="nav-item" hidden={locale.language == 'es'}>
                <a className="nav-link" href="/es">Español</a>
            </li>
        </ul>
    </div>
}