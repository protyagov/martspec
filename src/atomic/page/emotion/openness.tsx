import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ContentsList from "src/atomic/molecule/contents-list";
import { useScrollSpy } from "src/hooks";
import PageHeader from "../../molecule/page-header";



export default function Openness() {
    const LIST3_COUNT = 6;
    const LIST5_1_COUNT = 6 ;
    const LIST5_2_COUNT = 6;

    const CONTENTS_COUNT = 6;

    useScrollSpy("contents-list");


    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new emotion personality-trait">

        <PageHeader
                title="OPENNESS.HEAD"
                appId={1562956213}
                appDownloadTitle="OPENNESS.DWN"
                imgSrc="/img/page/openness/openness.webp"
                imgAlt="OPENNESS.IMG"
                imgH={390}
                imgW={421}
            />

            <section>
                <div className="row">
                    <div className="col-lg-8 order-lg-1 order-2">
                        <div id="section-1" className="content-wrapper">
                            <h2>{_("OPENNESS.HEAD1")}</h2>
                            <p>{_("OPENNESS.DESK1_1")}</p>
                            <p>{_("OPENNESS.DESK1_2")}</p>
                        </div>

                        <div id="section-2" className="content-wrapper">
                            <h2>{_("OPENNESS.HEAD2")}</h2>
                            <p>{_("OPENNESS.DESK2_1")}</p>
                            <p>{_("OPENNESS.DESK2_2")}</p>
                            <img src="/img/page/openness/openness-1.webp" className="img-fluid" alt={_("OPENNESS.ALT2")} width={768} height={450}/>
                        </div>

                        <div id="section-3" className="content-wrapper">
                            <h2>{_("OPENNESS.HEAD3")}</h2>
                            <p>{_("OPENNESS.DESK3")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx} >
                                            <b>{_("OPENNESS.LIST3.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("OPENNESS.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>

                        <div id="section-4" className="content-wrapper">
                            <h2>{_("OPENNESS.HEAD4")}</h2>
                            <p>{_("OPENNESS.DESK4_1")}</p>
                            <p>{_("OPENNESS.DESK4_2")}</p>
                            <p>{_("OPENNESS.DESK4_3")}</p>
                            <p>{_("OPENNESS.DESK4_4")}</p>
                            <p>{_("OPENNESS.DESK4_5")}</p>
                            <p>{_("OPENNESS.DESK4_6")}</p>
                            <img src="/img/page/openness/openness-2.webp" className="img-fluid" alt={_("OPENNESS.ALT4")} width={768} height={450}/>
                        </div>

                        <div id="section-5" className="content-wrapper">
                            <h2>{_("OPENNESS.HEAD5")}</h2>
                            <p>{_("OPENNESS.DESK5_1")}</p>
                            <p>{_("OPENNESS.DESK5_2")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST5_1_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_1_LI" + ++idx}>
                                            <span>{_("OPENNESS.LIST5_1.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("OPENNESS.DESK5_3")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST5_2_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_2_LI" + ++idx}>
                                            <span>{_("OPENNESS.LIST5_2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div id="section-6" className="content-wrapper">
                            <h2>{_("OPENNESS.HEAD6")}</h2>
                            <p>{_("OPENNESS.DESK6_1")}</p>
                            <p>{_("OPENNESS.DESK6_2")}</p>
                            <p>{_("OPENNESS.DESK6_3")}</p>
                            <p>{_("OPENNESS.DESK6_4")}</p>
                            <p>{_("OPENNESS.DESK6_5")}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="contents-list">
                            <h3>{_("OPENNESS.CONTENTS")}</h3>
                            <ContentsList PAGE="OPENNESS" CONTENTS_COUNT={CONTENTS_COUNT} />
                        </div>
                    </div>

                </div>
            </section>

        </div>

        <Footer />
    </>
}