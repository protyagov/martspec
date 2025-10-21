import * as React from "react";
import _ from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export default function Energy() {
    const appId = getAppId();
    const LIST2_COUNT = 3;
    const LIST3_COUNT = 3;
    const LIST4_1_COUNT = 4;
    const LIST4_2_COUNT = 4;
    const LIST5_COUNT = 10;
    const items = useBreadcrumbs();

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion personality-trait">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>

                <Header
                    title={_("ENERGY.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("ENERGY.DWN")}
                    imgSrc="/img/page/energy/energy.svg"
                    imgAlt={_("ENERGY.IMG")}
                    imgH={390}
                    imgW={421}
                >
                    <div className="energy-lists">
                        <ul className="header-content-list-energy">
                            <li>{_("ENERGY.ABOUT_1")}</li>
                            <li>{_("ENERGY.ABOUT_2")}</li>
                            <li>{_("ENERGY.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div id="section-1" className="content-wrapper">
                                <h2>{_("ENERGY.HEAD1")}</h2>
                                <p>{_("ENERGY.DESK1_1")}</p>
                                <p>{_("ENERGY.DESK1_2")}</p>
                                <p>{_("ENERGY.DESK1_3")}</p>
                            </div>

                            <div id="section-2" className="content-wrapper">
                                <h2>{_("ENERGY.HEAD2")}</h2>
                                <p>{_("ENERGY.DESK2")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx}>
                                            <b>{_("ENERGY.LIST2.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src="/img/page/energy/energy-1.webp"
                                    className="img-fluid"
                                    alt={_("ENERGY.ALT2")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-3" className="content-wrapper">
                                <h2>{_("ENERGY.HEAD3")}</h2>
                                <p>{_("ENERGY.DESK3")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx}>
                                            <b>{_("ENERGY.LIST3.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div id="section-4" className="content-wrapper">
                                <h2>{_("ENERGY.HEAD4")}</h2>
                                <p>{_("ENERGY.DESK4_1")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST4_1_COUNT)].map((li, idx) => (
                                        <li key={"LIST4_1_LI" + ++idx}>
                                            <b>{_("ENERGY.LIST4_1.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST4_1.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("ENERGY.DESK4_2")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST4_2_COUNT)].map((li, idx) => (
                                        <li key={"LIST4_2_LI" + ++idx}>
                                            <b>{_("ENERGY.LIST4_2.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST4_2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src="/img/page/energy/energy-2.webp"
                                    className="img-fluid"
                                    alt={_("ENERGY.ALT4")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-5" className="content-wrapper">
                                <h2>{_("ENERGY.HEAD5")}</h2>
                                <p>{_("ENERGY.DESK5_1")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST5_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx}>
                                            <span>{_("ENERGY.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("ENERGY.DESK5_2")}</p>
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
