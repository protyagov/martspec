import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { useScrollSpy } from "src/hooks";
import { Footer } from "../organism/footer";
import NavigationBar from "../organism/navbar";
import ContentsList from "../molecule/contents-list";


export default function Independence() {
    const LIST2_COUNT = 5;
    const LIST3_COUNT = 5;
    const LIST5_COUNT = 7;
    const LIST6_COUNT = 9;
    

    const CONTENTS_COUNT = 6;

    useScrollSpy("contents-list");


    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new emotion personality-trait">

            <section className="pb-3 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/page/independence/independence.webp" className="ms-base-image" alt={_("INDEPENDENCE.IMG")} height={390} width={421} />
                        <h1 className="text-center pt-3 mb-5">{_("INDEPENDENCE.HEAD")}</h1>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("INDEPENDENCE.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>    
                <div className="row">
                    <div className="col-lg-8">
                        <div id="section-1" className="content-wrapper">
                            <h2>{_("INDEPENDENCE.HEAD1")}</h2>
                            <p>{_("INDEPENDENCE.DESK1_1")}</p>
                            <p>{_("INDEPENDENCE.DESK1_2")}</p>
                            <p>{_("INDEPENDENCE.DESK1_3")}</p>
                        </div>

                        <div id="section-2" className="content-wrapper">
                            <h2>{_("INDEPENDENCE.HEAD2")}</h2>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx} >
                                            <b>{_("INDEPENDENCE.LIST2.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("INDEPENDENCE.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <img src="/img/page/independence/independence-1.webp" className="img-fluid" alt={_("INDEPENDENCE.ALT2")} width={768} height={450}/>
                        </div>

                        <div id="section-3" className="content-wrapper">
                            <h2>{_("INDEPENDENCE.HEAD3")}</h2>
                            <p>{_("INDEPENDENCE.DESK3")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx} >
                                            <b>{_("INDEPENDENCE.LIST3.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("INDEPENDENCE.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div id="section-4" className="content-wrapper">
                            <h2>{_("INDEPENDENCE.HEAD4")}</h2>
                            <p>{_("INDEPENDENCE.DESK4_1")}</p>
                            <p>{_("INDEPENDENCE.DESK4_2")}</p>
                            <p>{_("INDEPENDENCE.DESK4_3")}</p>
                            <img src="/img/page/independence/independence-2.webp" className="img-fluid" alt={_("INDEPENDENCE.ALT2")} width={768} height={450}/>
                        </div>

                        <div id="section-5" className="content-wrapper">
                            <h2>{_("INDEPENDENCE.HEAD5")}</h2>
                            <p>{_("INDEPENDENCE.DESK5_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST5_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx} >
                                            <b>{_("INDEPENDENCE.LIST5.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("INDEPENDENCE.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("INDEPENDENCE.DESK5_2")}</p>
                        </div>

                        <div id="section-6" className="content-wrapper">
                            <h2>{_("INDEPENDENCE.HEAD6")}</h2>
                            <p>{_("INDEPENDENCE.DESK6_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST6_COUNT)].map((li, idx) => (
                                        <li key={"LIST6_LI" + ++idx}>
                                            <span>{_("INDEPENDENCE.LIST6.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("INDEPENDENCE.DESK6_2")}</p>
                        </div>
                                        
                    </div>

                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="contents-list">
                            <h3>{_("INDEPENDENCE.CONTENTS")}</h3>
                            <ContentsList PAGE="INDEPENDENCE" CONTENTS_COUNT={CONTENTS_COUNT} />
                        </div>
                    </div>
                 
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}