import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { useScrollSpy } from "src/hooks";
import { Footer } from "../organism/footer";
import NavigationBar from "../organism/navbar";
import ContentsList from "../molecule/contents-list";
import PageHeader from "../molecule/page-header";


export default function Harmony() {
    const LIST2_COUNT = 7;
    const LIST3_COUNT = 5;
    const LIST4_COUNT = 8;
    

    const CONTENTS_COUNT = 4;

    useScrollSpy("contents-list");


    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new emotion personality-trait">

            <PageHeader
                title="HARMONY.HEAD"
                appId={1562956213}
                appDownloadTitle="HARMONY.DWN"
                imgSrc="/img/page/harmony/harmony.webp"
                imgAlt="HARMONY.IMG"
                imgH={390}
                imgW={421}
            />

            <section>    
                <div className="row">
                    <div className="col-lg-8">
                        <div id="section-1" className="content-wrapper">
                            <h2>{_("HARMONY.HEAD1")}</h2>
                            <p>{_("HARMONY.DESK1_1")}</p>
                            <p>{_("HARMONY.DESK1_2")}</p>
                        </div>

                        <div id="section-2" className="content-wrapper">
                            <h2>{_("HARMONY.HEAD2")}</h2>
                            <p>{_("HARMONY.DESK2")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx}>
                                            <span>{_("HARMONY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <img src="/img/page/harmony/harmony-1.webp" className="img-fluid" alt={_("HARMONY.ALT2")} width={768} height={450}/>
                        </div>

                        <div id="section-3" className="content-wrapper">
                            <h2>{_("HARMONY.HEAD3")}</h2>
                            <p>{_("HARMONY.DESK3")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx} >
                                            <b>{_("HARMONY.LIST3.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("HARMONY.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div id="section-4" className="content-wrapper">
                            <h2>{_("HARMONY.HEAD4")}</h2>
                            <p>{_("HARMONY.DESK4")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST4_COUNT)].map((li, idx) => (
                                        <li key={"LIST4_LI" + ++idx}>
                                            <b>{_("HARMONY.LIST4.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("HARMONY.LIST4.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                                        
                    </div>

                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="contents-list">
                            <h3>{_("HARMONY.CONTENTS")}</h3>
                            <ContentsList PAGE="HARMONY" CONTENTS_COUNT={CONTENTS_COUNT} />
                        </div>
                    </div>
                 
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}