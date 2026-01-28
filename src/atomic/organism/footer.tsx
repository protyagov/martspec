import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import SocialBar from "@/atomic/organism/social-bar";
import ButtonApple from "@/atomic/atom/button-apple";

export const Footer = () => (
    <footer>
        <div className="px-0 py-5">
            <div className="ms-s-offset my-2">
                <div className="row">
                    <div className="col-lg-2 col-md-12 d-flex flex-column text-center text-lg-start mb-5 mb-lg-0">
                        <a href={Locale.i18nLink("/")}>
                            <img
                                src="/img/logo.svg"
                                width="110"
                                height="38"
                                alt={_("ERROR.404_BTN")}
                            />
                        </a>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex text-center text-lg-start flex-column">
                        <h2 className="mb-4"> {_("NAV.ABOUT")} </h2>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("about")}> {_("ABOUT.HEAD")} </a>
                        </div>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("team")}> {_("TEAM.HEAD")} </a>
                        </div>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("careers")}> {_("CAREERS.HEAD")} </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex text-center text-lg-start flex-column mb-3 mb-lg-9">
                        <h2 className="mb-4"> {_("NAV.APPS")} </h2>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("vitamin")}> {_("VITAMIN.HEAD")} </a>
                        </div>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("bodysize")}> {_("SIZE.HEAD")} </a>
                        </div>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("emotion")}> {_("EMOTION.HEAD")} </a>
                        </div>
                        <div className="footer-link mb-2">
                            <a href={Locale.i18nLink("coming-soon")}> {_("ENERGY.HEAD_MAIN")} </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 d-flex flex-column">
                        <div className="col-lg-12 col-6 text-center text-lg-start ">
                            <h2 className="mb-4 text-center text-lg-start"> {_("NAV.WATCH")}</h2>
                        </div>
                        <div className="row text-center text-lg-start">
                            <div className="col-md-6 col-sm-6 col-6">
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("vitamin")}> {_("VITAMIN.SUBHEAD2")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("electrolyte")}> {_("ELECTROLYTE.HEAD")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("bodyzinc")}> {_("ZINC.HEAD")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("bodymass")}> {_("MASS.HEAD")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("waistline")}> {_("WAIST.HEAD")} </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6">
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("iron")}> {_("IRON.HEAD")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("coming-soon")}> {_("CALCIUM.HEAD")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("magnesium")}> {_("MAGNESIUM.HEAD")} </a>
                                </div>
                                <div className="footer-link mb-2">
                                    <a href={Locale.i18nLink("coming-soon")}> {_("PROTEIN.HEAD")} </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12 d-flex flex-column px-0 icon-container align-items-center align-items-lg-end">
                        <SocialBar color="white" />
                        <ButtonApple appId={1} appDownloadTitle={_("FOOTER.APPLE_BTN.ALT")} />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <hr />
        </div>

        <div className="ms-s-offset copyright">
            <div className="row text-center text-md-start">
                <div className="col-md-4 col-sm-12">{_("FOOTER.C")}</div>
                <div className="col-md-2 col-sm-12">{_("FOOTER.R")}</div>
                <div className="col-md-4 col-sm-12">
                    <a href={Locale.i18nLink("privacy-policy")}> {_("FOOTER.P")} </a>
                </div>
            </div>
        </div>

        <br />
    </footer>
);
