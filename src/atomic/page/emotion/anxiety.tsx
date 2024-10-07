import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { useScrollSpy } from "@/hooks";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ContentsList from "@/atomic/molecule/contents-list";
import PageHeader from "@/atomic/molecule/page-header";
import { getAppId } from "@/service/AppleService";

export default function Anxiety() {
    const appId = getAppId();
    const LIST2_COUNT = 3;
    const LIST3_COUNT = 9;
    const LIST4_COUNT = 6;

    const CONTENTS_COUNT = 5;

    useScrollSpy("contents-list");

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion personality-trait">
                <PageHeader
                    title={_("ANXIETY.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("ANXIETY.DWN")}
                    imgSrc="/img/page/anxiety/anxiety.webp"
                    imgAlt={_("ANXIETY.IMG")}
                    imgH={390}
                    imgW={512}
                />

                <section>
                    <div className="row">
                        <div className="col-lg-8 order-lg-1 order-2">
                            <div id="section-1" className="content-wrapper">
                                <h2>{_("ANXIETY.HEAD1")}</h2>
                                <p>{_("ANXIETY.DESK1_1")}</p>
                                <p>{_("ANXIETY.DESK1_2")}</p>
                                <p>{_("ANXIETY.DESK1_3")}</p>
                            </div>

                            <div id="section-2" className="content-wrapper">
                                <h2>{_("ANXIETY.HEAD2")}</h2>
                                <p>{_("ANXIETY.DESK2")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx}>
                                            <b>{_("ANXIETY.LIST2.LI" + idx + "_HEAD")}</b>
                                            <span> {_("ANXIETY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src="/img/page/anxiety/anxiety-img-1.webp"
                                    className="img-fluid"
                                    alt={_("ANXIETY.ALT2")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-3" className="content-wrapper">
                                <h2>{_("ANXIETY.HEAD3")}</h2>
                                <p>{_("ANXIETY.DESK3")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx}>
                                            <span>{_("ANXIETY.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div id="section-4" className="content-wrapper">
                                <h2>{_("ANXIETY.HEAD4")}</h2>
                                <p>{_("ANXIETY.DESK4")}</p>
                                <ul className="ms-5">
                                    {[...Array(LIST4_COUNT)].map((li, idx) => (
                                        <li key={"LIST4_LI" + ++idx}>
                                            <b>{_("ANXIETY.LIST4.LI" + idx + "_HEAD")}</b>
                                            <span> {_("ANXIETY.LIST4.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))}
                                </ul>
                                <img
                                    src="/img/page/anxiety/anxiety-img-2.webp"
                                    className="img-fluid"
                                    alt={_("ANXIETY.ALT4")}
                                    width={805}
                                    height={472}
                                />
                            </div>

                            <div id="section-5" className="content-wrapper">
                                <h2>{_("ANXIETY.HEAD5")}</h2>
                                <p>{_("ANXIETY.DESK5_1")}</p>
                                <p>{_("ANXIETY.DESK5_2")}</p>
                                <p>{_("ANXIETY.DESK5_3")}</p>
                                <p>{_("ANXIETY.DESK5_4")}</p>
                                <p>{_("ANXIETY.DESK5_5")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 order-lg-2 order-1">
                            <div className="contents-list">
                                <h3>{_("ANXIETY.CONTENTS")}</h3>
                                <ContentsList PAGE="ANXIETY" CONTENTS_COUNT={CONTENTS_COUNT} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
