import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import ScrollButton from "../atom/scroll-button";
import appIds from "@/data/app-ids.json";
import Review from "@/atomic/prototype/review";

const getRandomArbitrary = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);
const allAppIds = Object.values(appIds);

export default function LandingPage() {
    return (
        <div className="flex-grow-1 flex-shrink-0">
            <NavigationBar />

            <section id="header" className="ms-s-header">
                <div className="ms-s-offset text-center">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <ImageI18N
                                src="/img/header_screens.en.512.webp"
                                w={512}
                                h={298}
                                cls="ms-base-image"
                                alt={_("MAIN.HEAD")}
                            />
                            <h1>{_("MAIN.HEAD")}</h1>
                            <h4>{_("MAIN.SUBHEAD")}</h4>
                            <img
                                src="/img/header_watches.webp"
                                width={241}
                                height={160}
                                className="d-block float-end float-sm-start watches-img"
                                alt={_("MAIN.IMG")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/vitamin/logo-vitamin.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("VITAMIN.ICO")}
                                />
                                <div>
                                    <h1>{_("VITAMIN.HEAD")}</h1>
                                    <p>{_("VITAMIN.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                <ImageI18N
                                    src="/img/page/vitamin/vitamin-home-en.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 img-fluid"
                                    alt={_("VITAMIN.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("VITAMIN.TEXT")}</h4>
                                <a href={Locale.i18nLink("vitamin")} className="mt-3 ms-btn-large">
                                    {_("VITAMIN.BTN_OPEN")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/body-size/logo-size.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("SIZE.ICO")}
                                />
                                <div>
                                    <h1>{_("SIZE.HEAD")}</h1>
                                    <p>{_("SIZE.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                <ImageI18N
                                    src="/img/page/body-size/size-home-en.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 img-fluid"
                                    alt={_("SIZE.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("SIZE.TEXT")}</h4>
                                <a href={Locale.i18nLink("bodysize")} className="mt-3 ms-btn-large">
                                    {_("SIZE.BTN_OPEN")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/electrolyte/logo-electrolyte.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("ELECTROLYTE.ICO")}
                                />
                                <div>
                                    <h1>{_("ELECTROLYTE.HEAD")}</h1>
                                    <p>{_("ELECTROLYTE.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                <ImageI18N
                                    src="/img/page/electrolyte/electrolyte-home.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 img-fluid"
                                    alt={_("ELECTROLYTE.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("ELECTROLYTE.TEXT")}</h4>
                                <a href={Locale.i18nLink("electrolyte")} className="mt-3 ms-btn-large">
                                    {_("ELECTROLYTE.BTN_MORE")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/body-mass/logo-mass.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("MASS.ICO")}
                                />
                                <div>
                                    <h1>{_("MASS.HEAD")}</h1>
                                    <p>{_("MASS.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                <ImageI18N
                                    src="/img/page/body-mass/mass-home-en.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 px-lg-4 px-0 img-fluid"
                                    alt={_("MASS.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("MASS.TEXT")}</h4>
                                <a href={Locale.i18nLink("bodymass")} className="mt-3 ms-btn-large">
                                    {_("MASS.BTN_OPEN")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/zinc/logo-zinc.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("ZINC.ICO")}
                                />
                                <div>
                                    <h1>{_("ZINC.HEAD")}</h1>
                                    <p>{_("ZINC.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                {/* <ImageI18N src="/img/p_zinc.512.webp" w={512} h={512} cls="mx-auto my-4 img-fluid" alt={_("ZINC.IMG")} /> */}
                                <ImageI18N
                                    src="/img/page/zinc/zinc-app-en.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 img-fluid"
                                    alt={_("ZINC.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("ZINC.TEXT")}</h4>
                                <a href={Locale.i18nLink("bodyzinc")} className="mt-3 ms-btn-large">
                                    {_("ZINC.BTN_OPEN")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product my-5">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/waistline/logo-waist.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("WAIST.ICO")}
                                />
                                <div>
                                    <h1>{_("WAIST.HEAD")}</h1>
                                    <p>{_("WAIST.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                <ImageI18N
                                    src="/img/page/waistline/waist-home-en.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 px-lg-4 px-0 img-fluid"
                                    alt={_("WAIST.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("WAIST.TEXT")}</h4>
                                <a href={Locale.i18nLink("waistline")} className="mt-3 ms-btn-large">
                                    {_("WAIST.BTN_OPEN")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">
                        <div className="col p-container">
                            <div className="d-flex p-head">
                                <img
                                    src="/img/page/emotion/logo-emotion.svg"
                                    className="img-fluid me-3"
                                    height={48}
                                    width={48}
                                    alt={_("EMOTION.ICO")}
                                />
                                <div>
                                    <h1>{_("EMOTION.HEAD")}</h1>
                                    <p>{_("EMOTION.SUBHEAD")}</p>
                                </div>
                            </div>
                            <div className="p-img">
                                <ImageI18N
                                    src="/img/page/emotion/emotion-home-en.webp"
                                    w={512}
                                    h={512}
                                    cls="mx-auto my-4 img-fluid"
                                    alt={_("EMOTION.IMG")}
                                />
                            </div>
                            <div className="p-text">
                                <h4>{_("EMOTION.TEXT")}</h4>
                                <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large">
                                    {_("EMOTION.BTN_OPEN")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*
                div wrapper for proper side margins and fonts, 
                it's only needed for this page 
                and can be easily removed when this page is redesigned.
            */}
            <div className="ms-base-page ms-base-new">
                <Review
                    appId={allAppIds[getRandomArbitrary(0, allAppIds.length)]}
                    codes={{
                        countryCode: Locale.countryCode,
                        languageCode: Locale.language,
                    }}
                    text={{
                        head: _("REVIEW.HEAD"),
                        description: _("REVIEW.DESCRIPTION"),
                        link: _("REVIEW.LINK_ALL_REVIEWS"),
                        fillerCard: {
                            head: [
                                _("REVIEW.FILLER_CARD.HEAD1"),
                                _("REVIEW.FILLER_CARD.HEAD2"),
                                _("REVIEW.FILLER_CARD.HEAD3"),
                            ],
                            link: _("REVIEW.FILLER_CARD.LINK"),
                        },
                    }}
                />
            </div>

            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
            <ScrollButton />
        </div>
    );
}
