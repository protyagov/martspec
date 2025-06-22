import * as React from "react";
import _ from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";

export default function Productivity() {
    const appId = getAppId();
    const LISTS_COUNT = {
        LIST2: 8,
        LIST5: 7,
        LIST6_1: 10,
        LIST6_2: 5,
    };

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion personality-trait">
                <Header
                    title={_("PRODUCTIVITY.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("PRODUCTIVITY.DWN")}
                    imgSrc="/img/page/productivity/productivity.svg"
                    imgAlt={_("PRODUCTIVITY.IMG")}
                    imgH={390}
                    imgW={512}
                >
                    <div className="productivity-lists">
                        <ul className="header-content-list-productivity" >
                            <li>{_("PRODUCTIVITY.ABOUT_1")}</li>
                            <li>{_("PRODUCTIVITY.ABOUT_2")}</li>
                            <li>{_("PRODUCTIVITY.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>


                <section>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div id="section-1" className="content-wrapper">
                                <h2>{_("PRODUCTIVITY.HEAD1")}</h2>
                                <p>{_("PRODUCTIVITY.DESK1_1")}</p>
                                <p>{_("PRODUCTIVITY.DESK1_2")}</p>
                            </div>

                            <div id="section-2" className="content-wrapper">
                                <h2>{_("PRODUCTIVITY.HEAD2")}</h2>
                                <p>{_("PRODUCTIVITY.DESK2")}</p>
                                <ul className="ms-5">
                                    {[...Array(LISTS_COUNT.LIST2)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx}>
                                            <strong>{_("PRODUCTIVITY.LIST2.LI" + idx + "_HEAD")}</strong>
                                            <span>{" " + _("PRODUCTIVITY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src="/img/page/productivity/productivity-img-1.webp"
                                    className="img-fluid"
                                    alt={_("PRODUCTIVITY.ALT_1")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-3" className="content-wrapper">
                                <h2>{_("PRODUCTIVITY.HEAD3")}</h2>
                                <p>{_("PRODUCTIVITY.DESK3_1")}</p>
                                <p>{_("PRODUCTIVITY.DESK3_2")}</p>
                                <p>{_("PRODUCTIVITY.DESK3_3")}</p>
                                <p>{_("PRODUCTIVITY.DESK3_4")}</p>
                            </div>

                            <div id="section-4" className="content-wrapper">
                                <h2>{_("PRODUCTIVITY.HEAD4")}</h2>
                                <p>{_("PRODUCTIVITY.DESK4_1")}</p>
                                <p>{_("PRODUCTIVITY.DESK4_2")}</p>
                                <p>{_("PRODUCTIVITY.DESK4_3")}</p>
                                <img
                                    src="/img/page/productivity/productivity-img-2.webp"
                                    className="img-fluid"
                                    alt={_("PRODUCTIVITY.ALT_2")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-5" className="content-wrapper">
                                <h2>{_("PRODUCTIVITY.HEAD5")}</h2>
                                <p>{_("PRODUCTIVITY.DESK5_1")}</p>
                                <ul className="ms-5">
                                    {[...Array(LISTS_COUNT.LIST5)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx}>
                                            <strong>{_("PRODUCTIVITY.LIST5.LI" + idx + "_HEAD")}</strong>
                                            <span>{" " + _("PRODUCTIVITY.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("PRODUCTIVITY.DESK5_2")}</p>
                            </div>

                            <div id="section-6" className="content-wrapper">
                                <h2>{_("PRODUCTIVITY.HEAD6")}</h2>
                                <p>{_("PRODUCTIVITY.DESK6_1")}</p>
                                <ul className="ms-5">
                                    {[...Array(LISTS_COUNT.LIST6_1)].map((li, idx) => (
                                        <li key={"LIST6_1_LI" + ++idx}>
                                            <span>{_("PRODUCTIVITY.LIST6_1.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("PRODUCTIVITY.DESK6_2")}</p>
                                <ul className="ms-5">
                                    {[...Array(LISTS_COUNT.LIST6_2)].map((li, idx) => (
                                        <li key={"LIST6_2_LI" + ++idx}>
                                            <span>{_("PRODUCTIVITY.LIST6_2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("PRODUCTIVITY.DESK6_3")}</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
