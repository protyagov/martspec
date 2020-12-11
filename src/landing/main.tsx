import * as React from "react";
import { useHistory } from "react-router-dom";
import _ from "src/i18n/locale"
import { Footer } from "../part/footer";
import ContactUs from "src/part/contact-us";
import Spinner from "../part/spinner";
import NavigationBar from "src/part/navbar";
const p1 = require("src/img/p_electrolyte.png").default;
const p2 = require("src/img/p_mass.png").default;
const p3 = require("src/img/p_vitamin.png").default;
const p4 = require("src/img/p_waist.png").default;
const logo = require("src/img/logo2.png").default;


export default function LandingPage() {
    const [isLoading, setIsLoading] = React.useState(false);
    let history = useHistory();

    return (
        <div>
            <NavigationBar
                leftButtonText=" "
                leftButtonIcon=" "
                rightButtonIcon="fo icon-language"
                title="" />
            {/* <NavBarSignIn leftIsHomeLogo={true} title="" /> */}
            <Spinner show={isLoading} marginTop='50%' />

            <section id="header" className="ms-s-header">
                <div className="text-vertical-center">
                    <img src={logo} alt={_("MAIN.HEAD")} />
                    <h1>{_("MAIN.HEAD")}</h1>
                    <h4>{_("MAIN.SUBHEAD")}</h4>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="ms-product-row">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P1.SUBHEAD")}</p>
                        <h1>{_("MAIN.P1.HEAD")}</h1>
                        <h2>{_("MAIN.P1.TEXT")}</h2>
                        <a href="/product/electrolyte" className="mt-3 rr-btn-large">{_("MAIN.P1.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <a href="/product/electrolyte"><img src={p1} className="img-fluid" alt={_("MAIN.P1.IMG")} /></a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product my-5">
                <div className="ms-product-row">
                    <div className="col-md-4">
                        <a href="/product/logmass"><img src={p2} className="img-fluid" alt={_("MAIN.P2.IMG")} /></a>
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P2.SUBHEAD")}</p>
                        <h1>{_("MAIN.P2.HEAD")}</h1>
                        <h2>{_("MAIN.P2.TEXT")}</h2>
                        <a href="/product/logmass" className="mt-3 rr-btn-large pull-right">{_("MAIN.P2.BTN")}</a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="ms-product-row">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P3.SUBHEAD")}</p>
                        <h1>{_("MAIN.P3.HEAD")}</h1>
                        <h2>{_("MAIN.P3.TEXT")}</h2>
                        <a href="/product/logvitamin" className="mt-3 rr-btn-large">{_("MAIN.P3.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <a href="/product/logvitamin"><img src={p3} className="img-fluid" alt={_("MAIN.P3.IMG")} /></a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product my-5">
                <div className="ms-product-row">
                    <div className="col-md-4">
                        <a href="/product/logwaist"><img src={p4} className="img-fluid" alt={_("MAIN.P4.IMG")} /></a>
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P4.SUBHEAD")}</p>
                        <h1>{_("MAIN.P4.HEAD")}</h1>
                        <h2>{_("MAIN.P4.TEXT")}</h2>
                        <a href="/product/logwaist" className="mt-3 rr-btn-large pull-right">{_("MAIN.P4.BTN")}</a>
                    </div>
                </div>
            </section>

            <ContactUs setIsLoading={setIsLoading} />
            <Footer />
        </div>
    );
}