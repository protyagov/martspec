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
        <div className="container">

                {/* fix the ms-s-offset class for the < 992 px */}
                <div className="row ms-footer-offset">

                    <div className="col-md-9">
                        <div className="d-flex justify-content-evenly my-5">

                                <div className="d-flex flex-column mx-2">
                                    <h2 className="mb-4"> {_("NAV.ABOUT").toUpperCase()} </h2>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("about")}> {_("ABOUT.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("mission")}> {_("MISSION.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("team")}> {_("TEAM.HEAD")} </a>
                                    <a className="footer-link" href={Locale.i18nLink("privacy-policy")}> {_("PP.HEAD")} </a>
                                </div>

                                <div className="d-flex flex-column">
                                    <h2 className="mb-4"> {_("NAV.APPS").toUpperCase()} </h2>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("logvitamin")}> {_("VITAMIN.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("bodysize")}> {_("SIZE.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("electrolyte")}> {_("ELECTROLYTE.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("bodymass")}> {_("MASS.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("bodyzinc")}> {_("ZINC.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("waistline")}> {_("WAIST.HEAD")} </a>
                                    <a className="footer-link mb-1" href={Locale.i18nLink("emotion")}> {_("EMOTION.HEAD")} </a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="d-flex flex-sm-row flex-row-reverse flex-sm-row-reverse flex-md-column icon-container justify-content-evenly">
                            <div className="text-center">
                                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/developer/martspec-llc/id1506250419?l=${Locale.language}`}
                                    target="_blank" title={_("MAIN.P1.DWN")}
                                    className="ms-btn-apple float-md-right">
                                        <img src={'/img/apple_btn/' + Locale.language + '.svg'} alt="email" />
                                </a>
                            </div>

                            <div className="d-flex flex-row-reverse justify-content-center mt-md-3 mt-sm-1 mt-1">
                                <a className="social-icon" href="https://www.facebook.com/martspec" target="_blank" rel="noopener" aria-label="">
                                    <img src="/img/facebook_icon.svg" alt="twitter" />
                                </a>

                                <a className="social-icon" href="https://twitter.com/MartspecCom" target="_blank" rel="noopener" aria-label="">
                                    <img src="/img/twitter_icon.svg" alt="twitter" />
                                </a>

                                <a className="social-icon" href={`mailto:support@martspec.com?subject=Martspec Question&body=I have a question about your products. `} target="_self" rel="noopener" aria-label="">
                                    <img src="/img/email_icon.svg" alt="email" />
                                </a>

                                <a className="social-icon" href="https://www.linkedin.com/company/martspec" target="_blank" rel="noopener" aria-label="">
                                    <img src="/img/linkedin_icon.svg" alt="email" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

        </div>

        <div className="row">
            <hr />
        </div>

        <div className="row justify-content-center">
            <span className="mx-auto px-2 copyright">
                {_("FOOTER.C")}
            </span>
        </div>

        <br />
    </footer >