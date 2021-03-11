import * as React from "react";
import _, { Locale } from "src/i18n/locale";

export function LanguageSwitcher() {
    return (
        <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">

            <button className={`rr-btn-lang ${Locale.language == "en" ? 'disabled' : 'active'} language`}
                onClick={() => Locale.language = "en"} >English</button>
            <span>|</span>
            <button className={`rr-btn-lang ${Locale.language == "ru" ? 'disabled' : 'active'} language`}
                onClick={() => Locale.language = "ru"} >Русский</button>
        </div>)
}


export const Footer = () =>
    <footer >
        <p>{_("FOOTER.C")} <br/> <a href="/privacy-policy"> {_("FOOTER.PP")}</a></p>
    </footer>
