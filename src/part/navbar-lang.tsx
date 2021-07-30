import * as React from "react";
import _, { Locale } from "src/i18n/locale";

export default function NavBarLang() {
    return <div className="dropdown float-end" >
        <button className="btn btn-link dropdown-toggle shadow-none" data-bs-toggle="dropdown" style={{fontSize:"1.5rem"}}>
           {Locale.languageName(Locale.language)}<i className="fo fo-2x icon-language mt-3" />
        </button>
        <ul className="ms-navbar-nav dropdown-menu dropdown-menu-end border-0">
            <li className="nav-item" hidden={Locale.language == 'en'}>
                <a className="nav-link" href="/en">English</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'ru'}>
                <a className="nav-link" href="/ru">Русский</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'de'}>
                <a className="nav-link" href="/de">Deutsche</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'fr'}>
                <a className="nav-link" href="/fr">Français</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'hi'}>
                <a className="nav-link" href="/hi">हिन्दी</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'pt'}>
                <a className="nav-link" href="/pt">Português</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'es'}>
                <a className="nav-link" href="/es">Español</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'zh'}>
                <a className="nav-link" href="/zh">中文</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'ja'}>
                <a className="nav-link" href="/ja">日本語</a>
            </li>
            <li className="nav-item" hidden={Locale.language == 'ar'}>
                <a className="nav-link" href="/ar">عربي</a>
            </li>
        </ul>
    </div>
}