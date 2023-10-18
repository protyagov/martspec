import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ContentsList from "src/atomic/molecule/contents-list";
import { useScrollSpy } from "src/hooks";

export default function Productivity() {
    const LISTS_COUNT = {
        LIST2: 8,
        LIST5: 7,
        LIST6_1: 10,
        LIST6_2: 5,
    };

    const CONTENTS_COUNT = 6;

    useScrollSpy("contents-list");

    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new emotion personality-trait">

            <section className="pb-3 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/productivity.webp" className="ms-base-image" alt={_("PRODUCTIVITY.IMG")} height={390} width={410} />
                        <h1 className="text-center pt-3 mb-5">{_("PRODUCTIVITY.HEAD")}</h1>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("PRODUCTIVITY.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>    
                <div className="row">
                    <div className="col-lg-8 order-lg-1 order-2">
                        <div id="section-1" className="content-wrapper">
                            <h2>{_("PRODUCTIVITY.HEAD1")}</h2>
                            <p>{_("PRODUCTIVITY.DESK1_1")}</p>
                            <p>{_("PRODUCTIVITY.DESK1_2")}</p>
                        </div>

                        <div id="section-2" className="content-wrapper">
                            <h2>{_("PRODUCTIVITY.HEAD2")}</h2>
                            <p>{_("PRODUCTIVITY.DESK2")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LISTS_COUNT.LIST2)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx}>
                                            <strong>{_("PRODUCTIVITY.LIST2.LI" + idx + "_HEAD")}</strong>
                                            <span>{" " + _("PRODUCTIVITY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <img src="/img/productivity_img_1.webp" className="img-fluid" alt="" />
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
                            <img src="/img/productivity_img_2.webp" className="img-fluid" alt="" />
                        </div>
                
                        <div id="section-5" className="content-wrapper">
                            <h2>{_("PRODUCTIVITY.HEAD5")}</h2>
                            <p>{_("PRODUCTIVITY.DESK5_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LISTS_COUNT.LIST5)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx}>
                                            <strong>{_("PRODUCTIVITY.LIST5.LI" + idx + "_HEAD")}</strong>
                                            <span>{" " + _("PRODUCTIVITY.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("PRODUCTIVITY.DESK5_2")}</p>
                        </div>

                        <div id="section-6" className="content-wrapper">
                            <h2>{_("PRODUCTIVITY.HEAD6")}</h2>
                            <p>{_("PRODUCTIVITY.DESK6_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LISTS_COUNT.LIST6_1)].map((li, idx) => (
                                        <li key={"LIST6_1_LI" + ++idx}>
                                            <span>{_("PRODUCTIVITY.LIST6_1.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("PRODUCTIVITY.DESK6_2")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LISTS_COUNT.LIST6_2)].map((li, idx) => (
                                        <li key={"LIST6_2_LI" + ++idx}>
                                            <span>{_("PRODUCTIVITY.LIST6_2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("PRODUCTIVITY.DESK6_3")}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="contents-list">
                            <h3>{_("PRODUCTIVITY.CONTENTS")}</h3>
                            <ContentsList PAGE="PRODUCTIVITY" CONTENTS_COUNT={CONTENTS_COUNT} />
                        </div>
                    </div>

                </div>
            </section>
            
        </div>

        <Footer />
    </>
}
