import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import SocialBar from "@/atomic/organism/social-bar";
import ButtonApple from "@/atomic/atom/button-apple";

export const Footer = () => (
    <footer>
        <div className="px-0 py-5">
            <div className="ms-s-offset my-2">
                <div className="row">
                    <div className="col-md-4 col-7 d-flex flex-column">
                        <h2 className="mb-4"> {_("NAV.ABOUT").toUpperCase()} </h2>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("about")}>
                                {" "}
                                {_("ABOUT.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("mission")}>
                                {" "}
                                {_("MISSION.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("team")}>
                                {" "}
                                {_("TEAM.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("careers")}>
                                {" "}
                                {_("CAREERS.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link">
                            <a href={Locale.i18nLink("privacy-policy")}>
                                {" "}
                                {_("PP.HEAD")}{" "}
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-5 d-flex flex-column">
                        <h2 className="mb-4"> {_("NAV.APPS").toUpperCase()} </h2>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("vitamin")}>
                                {" "}
                                {_("VITAMIN.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("bodysize")}>
                                {" "}
                                {_("SIZE.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("bodymass")}>
                                {" "}
                                {_("MASS.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("waistline")}>
                                {" "}
                                {_("WAIST.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("bodyzinc")}>
                                {" "}
                                {_("ZINC.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("emotion")}>
                                {" "}
                                {_("EMOTION.HEAD")}{" "}
                            </a>
                        </div>
                        <div className="footer-link mb-1">
                            <a href={Locale.i18nLink("electrolyte")}>
                                {" "}
                                {_("ELECTROLYTE.HEAD")}{" "}   
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 d-flex flex-md-column flex-row-reverse px-0 icon-container">
                        <ButtonApple appId={1} appDownloadTitle={_("FOOTER.APPLE_BTN.ALT")} />
                        <SocialBar color="white" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <hr />
        </div>

        <div className="ms-s-offset copyright">
            <div className="row">
                <span className="px-2">{_("FOOTER.C")}</span>
            </div>
        </div>

        <br />
    </footer>
);
