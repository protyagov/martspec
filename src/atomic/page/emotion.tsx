import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import PageHeader from "@/atomic/molecule/page-header";
import CallToAction from "@/atomic/organism/call-to-action";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import Header from "@/atomic/organism/header";
import BulletList from "@/atomic/molecule/bullet-list";
import Review from "@/atomic/prototype/review";
import { TLanguageCode } from "@/model/TCodes";

export default function Emotion() {
    const advantages: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("EMOTION.ALT5_1"),
            },
            title: _("EMOTION.LIST5.LI1_HEAD"),
            subtitle: _("EMOTION.LIST5.LI1_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-sync.svg",
                alt: _("EMOTION.ALT5_2"),
            },
            title: _("EMOTION.LIST5.LI2_HEAD"),
            subtitle: _("EMOTION.LIST5.LI2_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-auth.svg",
                alt: _("EMOTION.ALT5_3"),
            },
            title: _("EMOTION.LIST5.LI3_HEAD"),
            subtitle: _("EMOTION.LIST5.LI3_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-ads.svg",
                alt: _("EMOTION.ALT5_4"),
            },
            title: _("EMOTION.LIST5.LI4_HEAD"),
            subtitle: _("EMOTION.LIST5.LI4_TEXT"),
        },
    ];

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion">
                <Header
                    title={_("EMOTION.HEAD")}
                    appId={1562956213}
                    appDownloadTitle={_("EMOTION.DWN")}
                    imgSrc="/img/page/emotion/emotion-header-img-en.webp"
                    imgAlt={_("EMOTION.IMG")}
                    imgH={531}
                    imgW={722}
                    content={
                        <ul className="header-content-list">
                            <li>{_("EMOTION.ABOUT_1")}</li>
                            <li>{_("EMOTION.ABOUT_2")}</li>
                            <li>{_("EMOTION.ABOUT_3")}</li>
                        </ul>
                    }
                />

                <section>
                    <div className="row g-4">
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI1_HEAD")}
                            text={_("EMOTION.LIST1.LI1_TEXT")}
                            bgColor="#EDE1FF"
                            className="col-lg-8 col-md-6"
                        />
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI2_HEAD")}
                            text={_("EMOTION.LIST1.LI2_TEXT")}
                            bgColor="#FFF9E3"
                            className="col-lg-4 col-md-6"
                        />
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI3_HEAD")}
                            text={_("EMOTION.LIST1.LI3_TEXT")}
                            bgColor="#EDE1FF"
                            className="col-lg-8 col-md-6 order-md-4"
                        />
                        <TitleTextCard
                            title={_("EMOTION.LIST1.LI4_HEAD")}
                            text={_("EMOTION.LIST1.LI4_TEXT")}
                            bgColor="#FFF9E3"
                            className="col-lg-4 col-md-6"
                        />
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD1")}</h2>
                            <p>{_("EMOTION.DESK1")}</p>
                            <a href={Locale.i18nLink("emotion/color-test")} className="ms-btn-large">
                                {_("EMOTION.BTN1")}
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-april-en.webp"
                                w={512}
                                h={598}
                                cls="ms-base-image mt-mob-xs"
                                alt={_("EMOTION.ALT1")}
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD2")}</h2>
                            <p>{_("EMOTION.DESK2")}</p>
                            <a href={Locale.i18nLink("emotion/biorhythms")} className="ms-btn-large">
                                {_("EMOTION.BTN_BIORHYTHM")}
                            </a>
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <ImageI18N
                                src="/img/page/emotion/emotion-diagram.webp"
                                w={512}
                                h={367}
                                cls="mx-lg-0 ms-base-image mt-mob-s"
                                alt={_("EMOTION.ALT2")}
                            />
                        </div>
                    </div>
                    <div className="row g-4">
                        <TitleTextCard
                            title={_("EMOTION.LIST2.LI1_HEAD")}
                            text={_("EMOTION.LIST2.LI1_TEXT")}
                            bgColor="#FFF9E3"
                        />
                        <TitleTextCard
                            title={_("EMOTION.LIST2.LI2_HEAD")}
                            text={_("EMOTION.LIST2.LI2_TEXT")}
                            bgColor="#E8FAE0"
                        />
                        <TitleTextCard
                            title={_("EMOTION.LIST2.LI3_HEAD")}
                            text={_("EMOTION.LIST2.LI3_TEXT")}
                            bgColor="#EDE1FF"
                        />
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD3")}</h2>
                            <p>{_("EMOTION.DESK3_1")}</p>
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-stress-en.webp"
                                w={512}
                                h={522}
                                cls="ms-base-image d-block d-lg-none mt-mob-xs mb-mob-xs"
                                alt={_("EMOTION.ALT3")}
                            />
                            <h3>{_("EMOTION.DESK3_2")}</h3>
                            <ul className="d-flex gap-4 how-list">
                                <li className="bg-orange">{_("EMOTION.LIST3.LI1_TEXT")}</li>
                                <li className="bg-aqua">{_("EMOTION.LIST3.LI2_TEXT")}</li>
                                <li className="bg-yellow">{_("EMOTION.LIST3.LI3_TEXT")}</li>
                                <li className="bg-violet">{_("EMOTION.LIST3.LI4_TEXT")}</li>
                                <li className="bg-blue">{_("EMOTION.LIST3.LI5_TEXT")}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-stress-en.webp"
                                w={512}
                                h={443}
                                cls="ms-base-image d-none d-lg-block"
                                alt={_("EMOTION.ALT3")}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-test-en.webp"
                                w={390}
                                h={512}
                                cls="ms-base-image d-none d-lg-block"
                                alt={_("EMOTION.ALT4")}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD4")}</h2>
                            <p>{_("EMOTION.DESK4_1")}</p>
                            <ImageI18N
                                src="/img/page/emotion/emotion-screen-test-en.webp"
                                w={390}
                                h={512}
                                cls="ms-base-image d-block d-lg-none mt-mob-xs mb-mob-xs"
                                alt={_("EMOTION.ALT4")}
                            />
                            <h3>{_("EMOTION.DESK4_2")}</h3>
                            <BulletList
                                items={[
                                    _("EMOTION.LIST4.LI1_TEXT"),
                                    _("EMOTION.LIST4.LI2_TEXT"),
                                    _("EMOTION.LIST4.LI3_TEXT"),
                                    _("EMOTION.LIST4.LI4_TEXT"),
                                    _("EMOTION.LIST4.LI5_TEXT"),
                                    _("EMOTION.LIST4.LI6_TEXT"),
                                ]}
                                iconColor="#7B62FE"
                                className="bullet-list"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("EMOTION.HEAD5")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
                </section>

                <section className="bg-gray bg-merge-top personality-traits-list">
                    <div className="row mb-0">
                        <div className="col-12 mb-2">
                            <h2>{_("EMOTION.HEAD6")}</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="block bg-violet">
                                <h3>{_("EMOTION.LIST6.LI1_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI1_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/anxiety")} className="ms-read-more-btn">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-green">
                                <h3>{_("EMOTION.LIST6.LI2_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI2_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/productivity")} className="ms-read-more-btn">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-aqua">
                                <h3>{_("EMOTION.LIST6.LI3_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI3_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/harmony")} className="ms-read-more-btn">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-orange">
                                <h3>{_("EMOTION.LIST6.LI4_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI4_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/independence")} className="ms-read-more-btn">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-yellow">
                                <h3>{_("EMOTION.LIST6.LI5_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI5_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/energy")} className="ms-read-more-btn">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-blue">
                                <h3>{_("EMOTION.LIST6.LI6_HEAD")}</h3>
                                <p>{_("EMOTION.LIST6.LI6_TEXT")}</p>
                                <a href={Locale.i18nLink("emotion/openness")} className="ms-read-more-btn">
                                    <span>{_("EMOTION.LIST6.BTN")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD7")}</h2>
                            <p className="mb-0">{_("EMOTION.DESK7")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="list-with-icons extended">
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-sport.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI1_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI1_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-bag.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI2_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI2_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-health.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI3_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI3_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-research.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI4_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI4_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-note.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI5_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI5_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-heart.svg" alt="" />
                                    </div>
                                    <div>
                                        <h3>{_("EMOTION.LIST7.LI6_HEAD")}</h3>
                                        <p>{_("EMOTION.LIST7.LI6_TEXT")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Review
                    countryCode={Locale.countryCode}
                    languageCode={Locale.language as TLanguageCode}
                    headText={_("REVIEW.HEAD")}
                    descriptionText={_("REVIEW.DESCRIPTION")}
                    linkText={_("REVIEW.LINKS.VIEW_ALL")}
                />

                <section>
                    <CallToAction
                        // bgColor={bg_color}
                        title={_("EMOTION.HEAD8")}
                        subtitle={_("EMOTION.DESK8")}
                        appId={1562956213}
                        appDownloadTitle={_("EMOTION.DWN")}
                        imgSrc="/img/org/call-to-action/emotion/emotion-screen-app-en.webp"
                        imgAlt={_("EMOTION.ALT4")}
                    />
                    {/* <div className="row text-lg-start text-center page-bottom">
                    <div className="col-12 block bg-violet">
                        <div>
                            <h2>{_("EMOTION.HEAD8")}</h2>
                            <p className="flex-grow-1">{_("EMOTION.DESK8")}</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-5 mx-lg-0 mx-auto"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <ImageI18N src="/img/page/emotion/emotion-screen-app-en.webp" w={400} h={400} cls="ms-base-image ms-lg-auto me-lg-0" alt={_("EMOTION.ALT4")} />
                    </div>
                </div> */}
                </section>
            </div>

            <Footer />
        </>
    );
}
