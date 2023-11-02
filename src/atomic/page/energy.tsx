import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ContentsList from "src/atomic/molecule/contents-list";
import { useScrollSpy } from "src/hooks";

export default function Energy() {
    const LIST2_COUNT = 3;
    const LIST3_COUNT = 3;
    const LIST4_1_COUNT = 4;
    const LIST4_2_COUNT = 4;
    const LIST5_COUNT = 10;

    

    const CONTENTS_COUNT = 5;

    useScrollSpy("contents-list");

    return <>
        <NavigationBar />
        <div className="ms-base-page ms-base-new emotion personality-trait">

            <section className="pb-3 text-center">
                <div className="row">
                   <div className="col-12">
                        <img src="/img/page/energy/energy.webp" className="ms-base-image" alt={_("ENERGY.IMG")} height={390} width={421} />
                    </div>
                    <div className="col-12">    
                        <h1 className="text-center pt-3 mb-5">{_("ENERGY.HEAD")}</h1>
                    </div>
                    <div className="col-12">
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("ENERGY.DWN")} className="ms-btn-apple"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>    
                <div className="row">
                    <div className="col-lg-8 order-lg-1 order-2">
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
                                {
                                    [...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx} >
                                            <b>{_("ENERGY.LIST2.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <img src="/img/page/energy/energy-1.webp" className="img-fluid" alt={_("ENERGY.ALT2")} width={768} height={450}/>
                        </div>

                        <div id="section-3" className="content-wrapper">
                            <h2>{_("ENERGY.HEAD3")}</h2>
                            <p>{_("ENERGY.DESK3")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST3_COUNT)].map((li, idx) => (
                                        <li key={"LIST3_LI" + ++idx} >
                                            <b>{_("ENERGY.LIST3.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST3.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div id="section-4" className="content-wrapper">
                            <h2>{_("ENERGY.HEAD4")}</h2>
                            <p>{_("ENERGY.DESK4_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST4_1_COUNT)].map((li, idx) => (
                                        <li key={"LIST4_1_LI" + ++idx}>
                                            <b>{_("ENERGY.LIST4_1.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST4_1.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("ENERGY.DESK4_2")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST4_2_COUNT)].map((li, idx) => (
                                        <li key={"LIST4_2_LI" + ++idx}>
                                            <b>{_("ENERGY.LIST4_2.LI" + idx + "_HEAD")}</b>
                                            <span>{" " + _("ENERGY.LIST4_2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <img src="/img/page/energy/energy-2.webp" className="img-fluid" alt={_("ENERGY.ALT4")} width={768} height={450}/>
                        </div>

                        <div id="section-5" className="content-wrapper">
                            <h2>{_("ENERGY.HEAD5")}</h2>
                            <p>{_("ENERGY.DESK5_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST5_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx}>
                                            <span>{_("ENERGY.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("ENERGY.DESK5_2")}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="contents-list">
                            <h3>{_("ENERGY.CONTENTS")}</h3>
                            <ContentsList PAGE="ENERGY" CONTENTS_COUNT={CONTENTS_COUNT} />
                        </div>
                    </div>
                 
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}