import * as React from "react";
import _ from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export default function Independence() {
    const appId = getAppId();
    const LIST2_COUNT = 5;
    const LIST3_COUNT = 5;
    const LIST5_COUNT = 7;
    const LIST6_COUNT = 9;
    const items = useBreadcrumbs();

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion personality-trait">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <Header
                    title={_("INDEPENDENCE.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("INDEPENDENCE.DWN")}
                    imgSrc="/img/page/independence/independence.svg"
                    imgAlt={_("INDEPENDENCE.IMG")}
                    imgH={390}
                    imgW={512}
                >
                    <div className="independence-lists">
                        <ul className="header-content-list-independence" >
                            <li>{_("INDEPENDENCE.ABOUT_1")}</li>
                            <li>{_("INDEPENDENCE.ABOUT_2")}</li>
                            <li>{_("INDEPENDENCE.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div id="section-1" className="content-wrapper">
                                <h2>{_("INDEPENDENCE.HEAD1")}</h2>
                                <p>{_("INDEPENDENCE.DESK1_1")}</p>
                                <p>{_("INDEPENDENCE.DESK1_2")}</p>
                                <p>{_("INDEPENDENCE.DESK1_3")}</p>
                            </div>

                            <div id="section-2" className="content-wrapper">
                                <h2>{_("INDEPENDENCE.HEAD2")}</h2>
                                <ul className="ms-5">
                                    {[...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx}>
                                            <b>{_("INDEPENDENCE.LIST2.LI" + idx + "_HEAD")}</b>
                                            <span> {_("INDEPENDENCE.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src="/img/page/independence/independence-1.webp"
                                    className="img-fluid"
                                    alt={_("INDEPENDENCE.ALT2")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-3" className="content-wrapper">
                                <h2>{_("INDEPENDENCE.HEAD3")}</h2>
                                <p>{_("INDEPENDENCE.DESK3")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx}>
                                            <b>{_("INDEPENDENCE.LIST3.LI" + idx + "_HEAD")}</b>
                                            <span> {_("INDEPENDENCE.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div id="section-4" className="content-wrapper">
                                <h2>{_("INDEPENDENCE.HEAD4")}</h2>
                                <p>{_("INDEPENDENCE.DESK4_1")}</p>
                                <p>{_("INDEPENDENCE.DESK4_2")}</p>
                                <p>{_("INDEPENDENCE.DESK4_3")}</p>
                                <img
                                    src="/img/page/independence/independence-2.webp"
                                    className="img-fluid"
                                    alt={_("INDEPENDENCE.ALT2")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-5" className="content-wrapper">
                                <h2>{_("INDEPENDENCE.HEAD5")}</h2>
                                <p>{_("INDEPENDENCE.DESK5_1")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST5_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx}>
                                            <b>{_("INDEPENDENCE.LIST5.LI" + idx + "_HEAD")}</b>
                                            <span> {_("INDEPENDENCE.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("INDEPENDENCE.DESK5_2")}</p>
                            </div>

                            <div id="section-6" className="content-wrapper">
                                <h2>{_("INDEPENDENCE.HEAD6")}</h2>
                                <p>{_("INDEPENDENCE.DESK6_1")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST6_COUNT)].map((li, idx) => (
                                        <li key={"LIST6_LI" + ++idx}>
                                            <span>{_("INDEPENDENCE.LIST6.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>{_("INDEPENDENCE.DESK6_2")}</p>
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
