import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _ from "@/i18n/locale";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";

export default function PrivacyPolicy() {
    return (
        <>
            <NavigationBar />
            <div className="pb-5">
                <div className="private-policy">
                    <Header
                        title={_("PP.HEAD")}
                        imgSrc="/img/privacy.svg"
                        imgAlt={_("PP.HEAD")}
                        imgH={398}
                        imgW={542}
                    >
                        <p className="font-normal private-policy__p">
                            <strong>{_("PP.DATE_LABEL")}</strong> {_("PP.DATE")}
                        </p>
                    </Header>
                </div>

                <section className="private-policy">
                    <p className="private-policy__mb-0">{_("PP.P1")}</p>
                    <p className="private-policy__mb-0">
                        <strong>
                            {_("PP.PHILOSOPHY_LABEL")} {_("PP.PHILOSOPHY_TEXT")}
                        </strong>
                    </p>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.INFORMATION_HEAD")}</h4>
                    <p className="private-policy__mb-0">
                        {_("PP.INFORMATION_INTRO")} <strong>{_("PP.INFORMATION_NOTICE")}</strong>
                    </p>
                    <ul className="private-policy__list-style private-policy__mb-0">
                        <li className="private-policy__li">
                            <strong>{_("PP.HEALTH_LABEL")}</strong>
                            {_("PP.HEALTH_TEXT")}
                        </li>
                        <li className="private-policy__li">
                            <strong>{_("PP.ACCOUNTS_LABEL")}</strong>
                            {_("PP.ACCOUNTS_TEXT")}
                        </li>
                        <li className="private-policy__li">
                            <strong>{_("PP.TRACKING_LABEL")}</strong>
                            {_("PP.TRACKING_TEXT")}
                        </li>
                    </ul>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.INTEGRATION_HEAD")}</h4>
                    <p className="private-policy__mb-0">{_("PP.INTEGRATION_INTRO")}</p>
                    <ul className="private-policy__list-style private-policy__mb-0">
                        <li className="private-policy__li">{_("PP.INTEGRATION_DEVICE")}</li>
                        <li className="private-policy__li">{_("PP.INTEGRATION_SERVERS")}</li>
                        <li className="private-policy__li">{_("PP.INTEGRATION_REVOKE")}</li>
                    </ul>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.SHARING_HEAD")}</h4>
                    <p className="private-policy__mb-0">
                        <strong>{_("PP.SHARING_NOTICE")}</strong> {_("PP.SHARING_TEXT")}
                    </p>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.RIGHTS_HEAD")}</h4>
                    <p className="private-policy__mb-0">{_("PP.RIGHTS_INTRO")}</p>
                    <p className="private-policy__mb-0">{_("PP.RIGHTS_CONTROL")}</p>
                    <p className="private-policy__mb-0">{_("PP.RIGHTS_MANAGE")}</p>
                    <ul className="private-policy__list-style private-policy__mb-0">
                        <li className="private-policy__li">
                            <strong>{_("PP.VIEW_LABEL")}</strong>
                            {_("PP.VIEW_TEXT")}
                        </li>
                        <li className="private-policy__li">
                            <strong>{_("PP.DELETE_LABEL")}</strong>
                            {_("PP.DELETE_TEXT")}
                        </li>
                    </ul>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.CHILDREN_HEAD")}</h4>
                    <p className="private-policy__mb-0">{_("PP.CHILDREN_TEXT")}</p>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.CHANGES_HEAD")}</h4>
                    <p className="private-policy__mb-0">{_("PP.CHANGES_TEXT")}</p>
                </section>

                <section className="private-policy">
                    <hr />
                    <h4 className="private-policy__h4">{_("PP.CONTACT_HEAD")}</h4>
                    <p className="private-policy__mb-0">{_("PP.CONTACT_TEXT")}</p>
                    <ul className="private-policy__list-style private-policy__mb-0">
                        <li className="private-policy__li">
                            <strong>{_("PP.EMAIL_LABEL")}</strong>{" "}
                            <a href="mailto:privacy@martspec.com">privacy@martspec.com</a>
                        </li>
                    </ul>
                </section>

                <br className="my-5" />
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
