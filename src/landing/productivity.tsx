import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";

export default function Productivity() {
    const LIST2_COUNT = 8;
    const LIST5_COUNT = 7;
    const LIST6_1_COUNT = 10;
    const LIST6_2_COUNT = 5;

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 emotion personal-trait">

            <section className="pb-3 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/productivity.webp" className="ms-base-image" alt={_("PRODUCTIVITY.IMG")} height={512} width={512} />
                        <h1 className="text-center pt-3 mb-5">{_("PRODUCTIVITY.HEAD")}</h1>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("PRODUCTIVITY.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section className="mb-0">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>{_("PRODUCTIVITY.HEAD1")}</h2>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK1_1")}</p>
                        <p>{_("PRODUCTIVITY.DESK1_2")}</p>
                    </div>
                </div>
            </section>
        
            <section className="mb-0">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>{_("PRODUCTIVITY.HEAD2")}</h2>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK2")}</p>
                    </div>
                    <div className="col-lg-9">
                        <ul className="ms-5">
                            {
                                [...Array(LIST2_COUNT)].map((li, idx) => (
                                    <li key={"LIST2_LI" + ++idx} className="mb-0">
                                        <b>{_("PRODUCTIVITY.LIST2.LI" + idx + "_HEAD")}</b>
                                        <span>{" "} {_("PRODUCTIVITY.LIST2.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <img src="/img/productivity_img_1.webp" className="img-fluid" alt="" />
                    </div>
                </div>
            </section>

            <section className="mb-0">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>{_("PRODUCTIVITY.HEAD3")}</h2>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK3_1")}</p>
                        <p>{_("PRODUCTIVITY.DESK3_2")}</p>
                        <p>{_("PRODUCTIVITY.DESK3_3")}</p>
                        <p>{_("PRODUCTIVITY.DESK3_4")}</p>
                    </div>
                </div>
            </section>

            <section className="mb-0">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>{_("PRODUCTIVITY.HEAD4")}</h2>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK4_1")}</p>
                        <p>{_("PRODUCTIVITY.DESK4_2")}</p>
                        <p>{_("PRODUCTIVITY.DESK4_3")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <img src="/img/productivity_img_2.webp" className="img-fluid" alt="" />
                    </div>
                </div>
            </section>

            <section className="mb-0">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>{_("PRODUCTIVITY.HEAD5")}</h2>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK5_1")}</p>
                    </div>
                    <div className="col-lg-9">
                        <ul className="ms-5">
                            {
                                [...Array(LIST5_COUNT)].map((li, idx) => (
                                    <li key={"LIST5_LI" + ++idx} className="mb-0">
                                        <b>{_("PRODUCTIVITY.LIST5.LI" + idx + "_HEAD")}</b>
                                        <span>{" "} {_("PRODUCTIVITY.LIST5.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK5_2")}</p>
                    </div>
                </div>
            </section>

            <section className="mb-0">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>{_("PRODUCTIVITY.HEAD6")}</h2>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK6_1")}</p>
                    </div>
                    <div className="col-lg-9">
                        <ul className="ms-5">
                            {
                                [...Array(LIST6_1_COUNT)].map((li, idx) => (
                                    <li key={"LIST6_1_LI" + ++idx} className="mb-0">
                                        <span>{" "} {_("PRODUCTIVITY.LIST6_1.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK6_2")}</p>
                    </div>
                    <div className="col-lg-9">
                        <ul className="ms-5">
                            {
                                [...Array(LIST6_2_COUNT)].map((li, idx) => (
                                    <li key={"LIST6_2_LI" + ++idx} className="mb-0">
                                        <span>{" "} {_("PRODUCTIVITY.LIST6_2.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <p>{_("PRODUCTIVITY.DESK6_3")}</p>
                    </div>
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}
