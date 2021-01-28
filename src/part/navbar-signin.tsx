import * as React from "react";
import _, {locale} from "src/i18n/locale";
const logo = require("src/img/logo.png").default;

export default function NavBarLang() {
    return <div className="pos-f-t">

        <nav className="navbar">
            <a className="navbar-brand" href="#" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">

                <i className="fo icon-language" />
                {/* <span className="navbar-toggler-icon"></span> */}
            </button>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="p-4 text-right">
                <ul className="ms-navbar-nav">
                    <li className="nav-item" hidden={locale.language == 'en'}>
                        <a className="nav-link" href="/en">English</a>
                    </li>
                    <li className="nav-item" hidden={locale.language == 'ru'}>
                        <a className="nav-link" href="/ru">Russian</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}