import * as React from "react";
import _, { Locale } from "src/i18n/locale"

function NavigationBarLanguageDropdown() {
    const languages = Locale.SUPPORTED_LANG;
    const path = location.pathname;    

    const getLanguageLink = (language: string) => {           
        if (path.length > 1) {            
            const regex = new RegExp("/" + "(" + languages.join("|") + ")" + "(\/|$)", "i");
            const currentLanguage = path.match(regex) ? path.match(regex)[0] : "/";            

            return path
                .replace(currentLanguage, "/" + language + "/")
                .replace(/\/$/, "");
        };
        return "/" + language;
    };

    return <ul className="navbar-nav">

        <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              { Locale.languageName(Locale.language) }
            </a>
            <ul className="dropdown-menu">
                {
                    languages.map(language => (
                        <li key={"nav-lang-link-" + language} hidden={Locale.language == language}>
                            <a className="nav-link dropdown-item" href={ getLanguageLink(language) }>{ Locale.languageName(language) }</a>
                        </li>
                    ))
                }
            </ul>
        </li>
    </ul>
}


export default function NavigationBar() {
    return <nav className="ms-navbar navbar-expand-lg px-lg-5">
        <div className="container-fluid">

            <a className="navbar-brand" href={Locale.i18nLink("/")}>
                <img src="/img/logo.svg" alt={_("ERROR.404_BTN")} className="d-inline-block align-text-top"
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
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("about")}>{_("ABOUT.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("mission")}>{_("MISSION.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("team")}>{_("TEAM.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("privacy-policy")}>{_("PP.HEAD")}</a></li>
                        </ul>
                    </li>


                    <li className="nav-item dropdown ps-lg-5">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            {_("NAV.APPS")}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("vitamin")}>{_("VITAMIN.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("bodysize")}>{_("SIZE.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("bodymass")}>{_("MASS.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("waistline")}>{_("WAIST.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("bodyzinc")}>{_("ZINC.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("emotion")}>{_("EMOTION.HEAD")}</a></li>
                            <li><a className="nav-link dropdown-item" href={Locale.i18nLink("electrolyte")}>{_("ELECTROLYTE.HEAD")}</a></li>
                        </ul>
                    </li>
                </ul>
          
                {NavigationBarLanguageDropdown()}
          
            </div>
        </div>
    </nav>
}