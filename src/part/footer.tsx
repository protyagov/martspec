import * as React from "react";
import _, { Locale } from "src/i18n/locale";

export function LanguageSwitcher() {
    return (
        <div className="btn-group btn-group-toggle text-center" data-toggle="buttons">

            <button className={`ms-btn-lang ${Locale.language == "en" ? 'disabled' : 'active'} language`}
                onClick={() => Locale.language = "en"} >English</button>
            <span>|</span>
            <button className={`ms-btn-lang ${Locale.language == "ru" ? 'disabled' : 'active'} language`}
                onClick={() => Locale.language = "ru"} >Русский</button>
        </div>)
}


export const Footer = () =>
    <footer>
        <div className="px-0 py-5">
            <div className="ms-s-offset my-2">
                <div className="row">

                <div className="col-md-4 col-7 d-flex flex-column">
                    <h2 className="mb-4"> {_("NAV.ABOUT").toUpperCase()} </h2>
                    <a className="footer-link mb-1" href={Locale.i18nLink("about")}> {_("ABOUT.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("mission")}> {_("MISSION.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("team")}> {_("TEAM.HEAD")} </a>
                    <a className="footer-link" href={Locale.i18nLink("privacy-policy")}> {_("PP.HEAD")} </a>
                </div>

                <div className="col-md-4 col-5 d-flex flex-column">
                    <h2 className="mb-4"> {_("NAV.APPS").toUpperCase()} </h2>
                    <a className="footer-link mb-1" href={Locale.i18nLink("vitamin")}> {_("VITAMIN.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("bodysize")}> {_("SIZE.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("electrolyte")}> {_("ELECTROLYTE.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("bodymass")}> {_("MASS.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("bodyzinc")}> {_("ZINC.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("waistline")}> {_("WAIST.HEAD")} </a>
                    <a className="footer-link mb-1" href={Locale.i18nLink("emotion")}> {_("EMOTION.HEAD")} </a>
                </div>

                <div className="col-md-4 col-12 d-flex flex-md-column flex-row-reverse px-0 icon-container">
                    <div>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/developer/martspec-llc/id1506250419?l=${Locale.language}`}
                            target="_blank"
                            title={_("FOOTER.APPLE_BUTTON.TITLE")}
                            className="ms-btn-apple">
                            <img src={'/img/apple_btn/' + Locale.language + '.svg'} alt={_("FOOTER.APPLE_BUTTON.ALT")} />
                        </a>
                    </div>

                    <div>
                        <a className="social-icon" href="https://www.linkedin.com/company/martspec" target="_blank" rel="noopener" aria-label="">
                            <img src="/img/linkedin_icon.svg" alt="linkedin" />
                        </a>

                        <a className="social-icon" href={`mailto:support@martspec.com?subject=Martspec Question&body=I have a question about your products. `} target="_self" rel="noopener" aria-label="">
                            <img src="/img/email_icon.svg" alt="email" />
                        </a>

                        <a className="social-icon" href="https://twitter.com/MartspecCom" target="_blank" rel="noopener" aria-label="">
                            <img src="/img/twitter_icon.svg" alt="twitter" />
                        </a>

                        <a className="social-icon" href="https://www.facebook.com/martspec" target="_blank" rel="noopener" aria-label="">
                            <img src="/img/facebook_icon.svg" alt="facebook" />
                        </a>
                    </div>

                </div>

                </div>
            </div>

        </div>

        <div className="row">
            <hr />
        </div>

        <div className="ms-s-offset copyright">
            <div className="row">

            <span className="px-2">
                {_("FOOTER.C")}
            </span>

            </div>
        </div>

        <br />
    </footer >