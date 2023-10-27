import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";

export default function BodySizeTest() {
    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new emotion">
            
            <section className="page-header text-center">
                <div className="row">
                    <div className="col-12">
                        <img src="/img/page/body-size/size-head.svg" className="ms-base-image" alt={_("SIZE.IMG")} height={340} width={480} />
                    </div>
                    <div className="col-12">
                        <h1>{_("SIZE.HEAD")}</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="col-12">
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1564205068?l=${Locale.language}`}
                            target="_blank" title={_("SIZE.DWN")} className="ms-btn-apple"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <h2>{_("SIZE.HEAD5")}</h2>
                        <p>{_("SIZE.DESC5")}</p>
                        <a href={Locale.i18nLink("coming-soon")} className="ms-btn-large">Try the lorem app</a>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <ImageI18N src="/img/page/body-size/size-home-en.webp" w={440} h={440} cls="ms-base-image mt-mob-xs" alt={_("SIZE.IMG")} />
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>{_("SIZE.HEAD1")}</h2>
                        <p>{_("SIZE.DESC1")}</p>
                        <a href={Locale.i18nLink("coming-soon")} className="ms-btn-large">Open the lorem app</a>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/page/body-size/size-middle.webp" width={440} height={440} className="ms-base-image mt-mob-xs" alt={_("SIZE.IMG")} />
                    </div>
                </div>
            </section>

            <section className="bg-gray">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href={Locale.i18nLink("coming-soon")} className="ms-btn-large">Try the Bodysize</a>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-12">
                        <div className="block bg-blue">
                            <h3>{_("SIZE.HEAD2")}</h3>
                            <p>{_("SIZE.DESC2").substring(0, 150) + "..."}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="block bg-orange">
                            <h3>{_("SIZE.HEAD3")}</h3>
                            <p>
                                {_("WAIST.LINK2")}
                                {_("WAIST.DESC2")}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="block bg-violet">
                            <h3>{_("SIZE.HEAD4")}</h3>
                            <p>{_("SIZE.DESC4").substring(0, 150) + "..."}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Why to use the Lorem BodySize?</h2>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="list-with-icons">
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-defense.svg" alt={_("EMOTION.ALT5_1")} /></div>
                                <div>
                                    <h3>{_("EMOTION.LIST5.LI1_HEAD")}</h3>
                                    <p>{_("EMOTION.LIST5.LI1_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-sync.svg" alt={_("EMOTION.ALT5_2")} /></div>
                                <div>
                                    <h3>{_("EMOTION.LIST5.LI2_HEAD")}</h3>
                                    <p>{_("EMOTION.LIST5.LI2_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-no-auth.svg" alt={_("EMOTION.ALT5_3")} /></div>
                                <div>
                                    <h3>{_("EMOTION.LIST5.LI3_HEAD")}</h3>
                                    <p>{_("EMOTION.LIST5.LI3_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-no-ads.svg" alt={_("EMOTION.ALT5_4")} /></div>
                                <div>
                                    <h3>{_("EMOTION.LIST5.LI4_HEAD")}</h3>
                                    <p>{_("EMOTION.LIST5.LI4_TEXT")}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                    <div className="row text-lg-start text-center page-bottom">
                        <div className="col-12 block bg-violet">
                            <div>
                                <h2>Download our Lorem BodySize</h2>
                                <p className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                    target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-5 mx-lg-0 mx-auto"
                                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                                </a>
                            </div>
                            <ImageI18N src="/img/page/body-size/size-bottom-en.webp" w={500} h={500} cls="ms-base-image ms-lg-auto me-lg-0" alt={_("EMOTION.ALT4")} />
                        </div>
                    </div>
            </section>

        </div>

        <Footer />
    </>
}