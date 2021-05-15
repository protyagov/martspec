import * as React from "react";
import _, { Locale } from "src/i18n/locale"
import NavBarLang from "./navbar-lang";

interface NavBarProps {
    title: string;
}

export default function NavigationBar(props: NavBarProps) {
    return (
        <nav className="rr-navbar">
            <div className="lButton">
                <a className="btn btn-link" href={Locale.i18nLink("/")}>
                    <img src="/img/logo.png" className="img-fluid" alt={_("ERROR.404_BTN")} />
                </a>
            </div>

            <h2 className="title">{props.title}</h2>

            <NavBarLang />
        </nav>
    )
}