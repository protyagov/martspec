import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";

export default function Emotion() {
    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new emotion">

            <section className="pb-5 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/emotion.png" className="ms-base-image" alt={_("EMOTION.IMG")} height={512} width={512} />
                        <h1 className="text-center pt-3 mb-5">{_("EMOTION.HEAD")}</h1>
                        <h3>{_("EMOTION.ABOUT_1")}</h3>
                        <p>{_("EMOTION.ABOUT_2")}</p>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-3"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="row">
                    <div className="col-lg-8 pb-4">
                        <div className="block bg-violet">
                            <h3>{_("EMOTION.LIST1.LI1_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI1_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 pb-4">
                        <div className="block bg-yellow">
                            <h3>{_("EMOTION.LIST1.LI2_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI2_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-8 order-lg-4 pb-4">
                        <div className="block bg-violet">
                            <h3>{_("EMOTION.LIST1.LI3_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI3_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-3 pb-4">
                        <div className="block bg-yellow">
                            <h3>{_("EMOTION.LIST1.LI4_HEAD")}</h3>
                            <p>{_("EMOTION.LIST1.LI4_TEXT")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="row g-5 py-3">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD1")}</h2>
                            <p>{_("EMOTION.DESK1")}</p>
                            <a href={Locale.i18nLink("coming-soon")} className="ms-btn-large button">{_("EMOTION.BTN1")}</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ImageI18N src="/img/emotion_screen_1.en.512.webp" w={512} h={598} cls="ms-base-image" alt={_("EMOTION.ALT1")} />
                    </div>
                </div>
            </section>

            <section className="bg-gray py-5">
                <div className="row g-5 mt-3 py-5">
                    <div className="col-lg-6 d-table mb-lg-0 mb-4">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD2")}</h2>
                            <p>{_("EMOTION.DESK2")}</p>
                            <a href={Locale.i18nLink("emotion/biorhythms")} className="ms-btn-large button">{_("EMOTION.BTN_BIORHYTHM")}</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-table order-lg-first pt-lg-0 pt-5">
                        <ImageI18N src="/img/emotion_diagram.webp" w={512} h={367} cls="img-fluid mx-lg-0 px-0" alt={_("EMOTION.ALT2")} />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-lg-4 col-12 pb-4">
                        <div className="block bg-yellow">
                            <h3>{_("EMOTION.LIST2.LI1_HEAD")}</h3>
                            <p>{_("EMOTION.LIST2.LI1_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 pb-4">
                        <div className="block bg-green">
                            <h3>{_("EMOTION.LIST2.LI2_HEAD")}</h3>
                            <p>{_("EMOTION.LIST2.LI2_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 pb-4">
                        <div className="block bg-violet">
                            <h3>{_("EMOTION.LIST2.LI3_HEAD")}</h3>
                            <p>{_("EMOTION.LIST2.LI3_TEXT")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5">
                <div className="row g-5">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD3")}</h2>
                            <p>{_("EMOTION.DESK3_1")}</p>
                            <ImageI18N src="/img/emotion_screen_2.en.512.webp" w={512} h={522} cls="ms-base-image d-block d-lg-none py-5" alt={_("EMOTION.ALT3")} />
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
                    <div className="col-lg-6 d-flex align-items-center">
                        <ImageI18N src="/img/emotion_screen_2.en.512.webp" w={512} h={443} cls="ms-base-image d-none d-lg-block" alt={_("EMOTION.ALT3")} />
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="row g-5">
                    <div className="col-lg-6 d-flex align-items-center">
                        <ImageI18N src="/img/emotion_screen_3.en.512.webp" w={390} h={512} cls="ms-base-image d-none d-lg-block" alt={_("EMOTION.ALT4")} />
                    </div>
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("EMOTION.HEAD4")}</h2>
                            <p>{_("EMOTION.DESK4_1")}</p>
                            <ImageI18N src="/img/emotion_screen_3.en.512.webp" w={390} h={512} cls="ms-base-image d-block d-lg-none py-5" alt={_("EMOTION.ALT4")} />
                            <h4 className="mb-4">{_("EMOTION.DESK4_2")}</h4>
                            <ul className="checkmark-list">
                                <li>{_("EMOTION.LIST4.LI1_TEXT")}</li>
                                <li>{_("EMOTION.LIST4.LI2_TEXT")}</li>
                                <li>{_("EMOTION.LIST4.LI3_TEXT")}</li>
                                <li>{_("EMOTION.LIST4.LI4_TEXT")}</li>
                                <li>{_("EMOTION.LIST4.LI5_TEXT")}</li>
                                <li>{_("EMOTION.LIST4.LI6_TEXT")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray pt-4 pb-5">
                <div className="py-5 advantages-list">

                    <div className="row my-2">
                        <div className="col-12">
                            <h2>{_("EMOTION.HEAD5")}</h2>
                        </div>
                        <div className="col-lg-6 pe-3">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-1.svg" alt={_("EMOTION.ALT5_1")} /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI1_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI1_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-2.svg" alt={_("EMOTION.ALT5_2")} /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI2_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI2_TEXT")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-3.svg" alt={_("EMOTION.ALT5_3")} /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI3_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI3_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="li">
                                <div className="icon"><img src="/img/emotion-icon-4.svg" alt={_("EMOTION.ALT5_4")} /></div>
                                <div>
                                    <h4>{_("EMOTION.LIST5.LI4_HEAD")}</h4>
                                    <p>{_("EMOTION.LIST5.LI4_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pb-5 metrics-list">

                    <div className="row">
                        <div className="col-12">
                            <h2>{_("EMOTION.HEAD6")}</h2>
                        </div>
                        <div className="col-lg-6 pb-4">
                            <div className="block bg-violet">
                                <h4>{_("EMOTION.LIST6.LI1_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI1_TEXT")}</p>
                                <a href={Locale.i18nLink("coming-soon")}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-4">
                            <div className="block bg-green">
                                <h4>{_("EMOTION.LIST6.LI2_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI2_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/productivity")}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-4">
                            <div className="block bg-aqua">
                                <h4>{_("EMOTION.LIST6.LI3_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI3_TEXT")}</p>
                                <a href={Locale.i18nLink("coming-soon")}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-4">
                            <div className="block bg-orange">
                                <h4>{_("EMOTION.LIST6.LI4_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI4_TEXT")}</p>
                                <a href={Locale.i18nLink("coming-soon")}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-4">
                            <div className="block bg-yellow">
                                <h4>{_("EMOTION.LIST6.LI5_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI5_TEXT")}</p>
                                <a href={Locale.i18nLink("coming-soon")}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-4">
                            <div className="block bg-blue">
                                <h4>{_("EMOTION.LIST6.LI6_HEAD")}</h4>
                                <p>{_("EMOTION.LIST6.LI6_TEXT")}</p>
                                <a href={Locale.i18nLink("coming-soon")}><span>{_("EMOTION.LIST6.BTN")}</span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="pt-5">
                <div className="row pt-3">
                    <div className="col-lg-6 pb-3">
                        <h2>{_("EMOTION.HEAD7")}</h2>
                        <p>{_("EMOTION.DESK7")}</p>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-6.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI1_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI1_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-7.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI2_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI2_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-8.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI3_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI3_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-9.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI4_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI4_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-10.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI5_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI5_TEXT")}</p>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-11.svg" alt="" /></div>
                        <h4>{_("EMOTION.LIST7.LI6_HEAD")}</h4>
                        <p>{_("EMOTION.LIST7.LI6_TEXT")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row py-5 text-lg-start text-center">
                    <div className="d-flex flex-lg-row flex-column block bg-violet">
                        <div className="col-lg-6 col-12">
                            <h2>{_("EMOTION.HEAD8")}</h2>
                            <p className="flex-grow-1">{_("EMOTION.DESK8")}</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-5 mx-lg-0 mx-auto"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <div className="col-lg-6 col-8 mx-auto">
                            <ImageI18N src="/img/emotion_screen_4.en.512.webp" w={400} h={400} cls="img-fluid ms-lg-auto me-lg-0 py-lg-0 py-5" alt={_("EMOTION.ALT4")} />
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <Footer />
    </>
}
