import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";

export default function P7Emotion() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 emotion">

            <section className="pb-5 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/emotion.png" className="ms-base-image" alt={_("EMOTION.IMG")} height={512} width={512} />
                        <h1 className="text-center pt-3 mb-5">{_("EMOTION.HEAD")}</h1>
                        <h3>{_("EMOTION.ABOUT_1")}</h3>
                        <p>{_("EMOTION.ABOUT_2")}</p>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section className="mb-0 pb-5">
                <div className="row g-4 mb-4">
                    <div className="col-lg-8">
                        <div className="block bg-violet">
                            <h3>{_("EMOTION.LIST1.LI1_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI1_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block bg-yellow">
                            <h3>{_("EMOTION.LIST1.LI2_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI2_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-8 order-lg-4">
                        <div className="block bg-violet">
                            <h3>{_("EMOTION.LIST1.LI3_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI3_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-3">
                        <div className="block bg-yellow">
                            <h3>{_("EMOTION.LIST1.LI4_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI4_TEXT")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5 pb-5">
                <div className="row">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD1")}</h2>
                            <p>{_("EMOTION.DESK1")}</p>
                            <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large button">{_("EMOTION.BTN1")}</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/emotion-screen-1.png" className="ms-base-image" alt="" height={512} width={512} />
                    </div>
                </div>
            </section>

            <section className="bg-gray py-5">
                <div className="row mt-5 pt-5">
                    <div className="col-lg-6 d-table mb-lg-0 mb-4">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD2")}</h2>
                            <p>{_("EMOTION.DESK2")}</p>
                            <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large button">{_("EMOTION.BTN2")}</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-table order-lg-first pt-lg-0 pt-5">
                        <img src="/img/emotion-diagram-1.png" className="img-fluid mx-0 px-0" alt="" height={512} />
                    </div>
                </div>
                <div className="row py-5 g-4">
                    <div className="col-lg-4 col-12">
                        <div className="block bg-yellow">
                            <h3>{_("EMOTION.LIST2.LI1_HEAD")}</h3>
                            <p>{_("EMOTION.LIST2.LI1_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="block bg-green">
                            <h3>{_("EMOTION.LIST2.LI2_HEAD")}</h3>
                            <p>{_("EMOTION.LIST2.LI2_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="block bg-violet">
                            <h3>{_("EMOTION.LIST2.LI3_HEAD")}</h3>
                            <p>{_("EMOTION.LIST2.LI3_TEXT")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4">
                <div className="row">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD3")}</h2>
                            <p>{_("EMOTION.DESK3_1")}</p>
                            <img src="/img/emotion-screen-2.png" className="ms-base-image d-block d-lg-none" alt="" height={512} width={512} />
                            <h4 className="mb-4">{_("EMOTION.DESK3_2")}</h4>
                            <ul className="d-flex gap-4 how-list">
                                <li className="bg-orange">{_("EMOTION.LIST3.LI1_TEXT")}</li>
                                <li className="bg-aqua">{_("EMOTION.LIST3.LI2_TEXT")}</li>
                                <li className="bg-yellow">{_("EMOTION.LIST3.LI3_TEXT")}</li>
                                <li className="bg-violet">{_("EMOTION.LIST3.LI4_TEXT")}</li>
                                <li className="bg-blue">{_("EMOTION.LIST3.LI5_TEXT")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/emotion-screen-2.png" className="ms-base-image d-none d-lg-block" alt="" height={512} width={512} />
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="/img/emotion-screen-3.png" className="ms-base-image d-none d-lg-block" alt="" height={512} width={512} />
                    </div>
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD4")}</h2>
                            <p>{_("EMOTION.DESK4_1")}</p>
                            <img src="/img/emotion-screen-3.png" className="ms-base-image d-block d-lg-none" alt="" height={512} width={512} />
                            <h4 className="mb-4">{_("EMOTION.DESK4_2")}</h4>
                            <div className="d-flex flex-wrap g-4 why-list">
                                <p>{_("EMOTION.LIST4.LI1_TEXT")}</p>
                                <p>{_("EMOTION.LIST4.LI2_TEXT")}</p>
                                <p>{_("EMOTION.LIST4.LI3_TEXT")}</p>
                                <p>{_("EMOTION.LIST4.LI4_TEXT")}</p>
                                <p>{_("EMOTION.LIST4.LI5_TEXT")}</p>
                                <p>{_("EMOTION.LIST4.LI6_TEXT")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray py-5">
                <div className="py-5 advantages-list">

                    <div className="row my-2">
                        <div className="col-12">
                            <h2>{_("EMOTION.HEAD5")}</h2>
                        </div>
                        <div className="col-lg-6 pe-3">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-1.svg" alt="" /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI1_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI1_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-2.svg" alt="" /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI2_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI2_TEXT")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-3.svg" alt="" /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI3_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI3_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-4.svg" alt="" /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI4_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI4_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pb-5 metrics-list">

                    <div className="row g-4">
                        <div className="col-12 pb-4">
                            <h2>{_("EMOTION.HEAD6")}</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-violet">
                                <h4>{_("EMOTION.LIST6.LI1_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI1_TEXT")}</p>
                                <a href={"/"}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-green">
                                <h4>{_("EMOTION.LIST6.LI2_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI2_TEXT")}</p>
                                <a href={"/"}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="block bg-aqua">
                                <h4>{_("EMOTION.LIST6.LI3_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI3_TEXT")}</p>
                                <a href={"/"}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-orange">
                                <h4>{_("EMOTION.LIST6.LI4_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI4_TEXT")}</p>
                                <a href={"/"}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>

                        <div className="col-lg-6">                        
                            <div className="block bg-yellow">
                                <h4>{_("EMOTION.LIST6.LI5_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI5_TEXT")}</p>
                                <a href={"/"}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-blue">
                                <h4>{_("EMOTION.LIST6.LI6_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI6_TEXT")}</p>
                                <a href={"/"}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="pt-5">
                <div className="row pt-4">
                    <div className="col-lg-6 pb-3">
                        <h2>{_("EMOTION.HEAD7")}</h2>
                        <p>{_("EMOTION.DESK7")}</p>
                    </div>
                </div>
                <div className="row mb-lg-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-6.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI1_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI1_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-7.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI2_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI2_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-8.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI3_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI3_TEXT")}</p>
                    </div>
                </div>
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-9.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI4_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI4_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-10.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI5_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI5_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-11.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI6_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI6_TEXT")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row py-5 text-lg-start text-center">
                    <div className="d-flex flex-lg-row flex-column block bg-violet">
                        <div className="col-lg-6 col-12 d-flex flex-column">
                            <h2>{_("EMOTION.HEAD8")}</h2>
                            <p className="flex-grow-1">{_("EMOTION.DESK8")}</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple my-5 mx-lg-0 mx-auto"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <div className="col-lg-6 col-8 mx-auto">
                            <img src="/img/emotion-screen-6.png" className="img-fluid ms-lg-auto me-lg-0" alt="" height={400} width={400} />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}
