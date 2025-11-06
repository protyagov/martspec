import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import CallToAction from "@/atomic/organism/call-to-action-new";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import Header from "@/atomic/organism/header";
import BulletList from "@/atomic/molecule/bullet-list";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "../atom/scroll-button";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import CardIconTitleText from "../molecule/card-icon-title-text"

export default function Emotion() {
    const appId = getAppId();
    const items = useBreadcrumbs();
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

            <div className="ms-base-page emotion">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <Header
                    title={_("EMOTION.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("EMOTION.DWN")}
                    imgSrc="/img/page/emotion/emotion-header-img-en.webp"
                    imgAlt={_("EMOTION.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    <div className="emotion">
                        <ul className="header-content-list">
                            <li>{_("EMOTION.ABOUT_1")}</li>
                            <li>{_("EMOTION.ABOUT_2")}</li>
                            <li>{_("EMOTION.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <div className="row g-4">
                    <div className="col-12 col-lg-4">
                        <CardTitleTextImageCustom
                            title={_("EMOTION.LIST1.LI1_HEAD")}
                            text={_("EMOTION.LIST1.DESC1")}
                            imgSrc={`/img/page/emotion/section-left-${Locale.language}.svg`}
                            cardHeight="30rem"
                            imgPosition="center-bottom"
                            imgH="19rem"
                            imgMobileH="17rem"
                            shadow={true}
                            mobileBreakpoint={1150}
                            responsive={true}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="d-flex flex-column h-100 gap-4">
                        <CardTitleTextImageCustom
                            title={_("EMOTION.LIST1.LI2_HEAD")}
                            text={_("EMOTION.LIST1.DESC2")}
                            bgColor="#E5EEFF"
                            cardHeight="15rem"
                            shadow={false}
                        />
                        <CardTitleTextImageCustom
                            title={_("EMOTION.LIST1.LI3_HEAD")}
                            text={_("EMOTION.LIST1.DESC3")}
                            bgColor="#FAEBFF"
                            cardHeight="15rem"
                            shadow={false}
                        />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardTitleTextImageCustom
                            title={_("EMOTION.LIST1.LI4_HEAD")}
                            text={_("EMOTION.LIST1.DESC4")}
                            imgSrc="/img/page/emotion/section-right.svg"
                            bgColor="#F4F5F8"
                            cardHeight="30rem"
                            imgPosition="right-bottom"
                            imgH="19rem"
                            imgMobileH="15rem"
                            shadow={false}
                            mobileBreakpoint={1150}
                            responsive={true}
                        />
                    </div>
                </div>

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

                <section className="biorhythms-container">
                    <div className="row row-cols-xl-3 row-cols-1">
                        <div className="col col-md-4 p-0 card-alignment-small">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col  img-wrapper ">
                                    <CardTitleTextImageCustom
                                        title={_("SIZE.HEAD9")}
                                        text={_("SIZE.DESC9")}
                                        bgColor="#FFFFFF"
                                        imgSrc="/img/page/body-size/orange_curly_ine.png"
                                        imgPosition="right-bottom"
                                        shadow={true}
                                        cardHeight="15rem"
                                        imgH="6rem"
                                        responsive={true}
                                    />
                                </div>
                                <div className="col  mt-5 img-wrapper">
                                    <CardTitleTextImageCustom
                                        title={_("SIZE.HEAD10")}
                                        text={_("SIZE.DESC10")}
                                        bgColor="#FFFFFF"
                                        imgSrc="/img/page/body-size/green_curly_line.png"
                                        imgPosition="left-bottom"
                                        shadow={true}
                                        cardHeight="15rem"
                                        imgH="6rem"
                                        responsive={true}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col col-md-4 img-wrapper-big card-alignment-big" >
                            <CardTitleTextImageCustom
                                        title={_("SIZE.HEAD11")}
                                        text={_("SIZE.DESC11")}
                                        bgColor="#FFFFFF"
                                        imgSrc="/img/page/emotion/masks.svg"
                                        imgPosition="right-bottom"
                                        shadow={true}
                                        cardHeight="35.5rem"
                                        imgH="25rem"
                                        responsive={true}
                                    />
                        </div>
                        <div  className="col col-md-4 text-alignment" >
                            <CardTitleTextButton
                                title={_("SIZE.HEAD8")}
                                textContent={[_("SIZE.DESC8_1"), _("SIZE.DESC8_2")]}
                                buttonText={_("SIZE.BTN_MORE")}
                                buttonLink={Locale.i18nLink(`emotion/biorhythms`)}
                                buttonColor="#7B62FE"
                            />
                        </div> 
                    </div>
                </section>
                
                <section>
                    <div className="row">
                        <div className="row block p-0" style={{backgroundColor: "#ECE9FF", overflow: "hidden"}}>
                            <div className="col-lg-6 p-5" >
                                <CardTitleTextButton
                                    title={_("EMOTION.HEAD9")}
                                    textContent={[_("EMOTION.DESC9_1"), _("EMOTION.DESC9_2")]}
                                    buttonText={_("SIZE.BTN_MORE")}
                                    buttonLink={Locale.i18nLink(`emotion/biorhythms`)}
                                    buttonColor="#7B62FE"
                                />
                            </div>

                            <div className="col-lg-6 d-flex justify-content-end align-items-end">
                                <ImageI18N
                                    src="/img/page/emotion/img-metoday-en.svg"
                                    w={600}
                                    h={450}
                                    cls="ms-base-image mt-mob-xs m-0 img-fluid"
                                    alt={_("ZINC.ALT1")}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6 how-head mt-3">
                            <h2 className="mt-0">{_("SIZE.HEAD2")}</h2>
                            <p>{_("EMOTION.DESK3_1")}</p>
                            <ImageI18N
                                src="/img/page/emotion/img-howthisworks-en.svg"
                                w={629}
                                h={575}
                                cls="ms-base-image d-none d-lg-block"
                            />
                        </div>
                        <div className="col-lg-6 how-head">
                            <h3>{_("EMOTION.DESK3_2")}</h3>
                            <ul className="d-flex gap-4 how-list">
                                <li className="bg-green">{_("EMOTION.LIST3.LI1_TEXT")}</li>
                                <li className="bg-pink">{_("EMOTION.LIST3.LI2_TEXT")}</li>
                                <li className="bg-violet">{_("EMOTION.LIST3.LI4_TEXT")}</li>
                                <li className="bg-orange">{_("EMOTION.LIST3.LI3_TEXT")}</li>
                                <li className="bg-blue">{_("EMOTION.LIST3.LI5_TEXT")}</li>
                            </ul>
                            <p className="mt-4">{_("EMOTION.DESK4_1")}</p>
                            
                            
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

                <section>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("EMOTION.HEAD5")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
                </section>

                <section className="PersonalityTraits-container">
                    <div className="row g-4 mb-1">
                        <div className="col-12 mb-2 ">
                            <h2>{_("EMOTION.HEAD6")}</h2>
                            <p>{_("EMOTION.DESC6")}</p>
                        </div>
                        <div className="col-12 col-lg-6 p-0">
                            <div className="row h-100 g-4 p-0">
                                <div className="col-12 mt-1 p-3 pb-0 custom-card-padding card-big">
                                    <CardTitleTextImageCustom
                                        cardHeight="14rem"
                                        title={_("EMOTION.LIST6.LI1_HEAD")}
                                        text={_("EMOTION.LIST6.LI1_TEXT")}
                                        imgSrc="/img/page/emotion/traits-mask-1.svg"
                                        imgPosition="right-bottom"
                                        imgH="17rem"
                                        responsive={true}
                                        actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("emotion/anxiety"),}}
                                        primaryColor="#7B62FE"
                                        linkHoverColor="#7B62FE"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0">
                            <div className="row h-100 g-4 p-0">
                                <div className="col-12 col-md-6 mt-1 p-3 pb-0">
                                    <CardTitleTextImageCustom
                                        cardHeight="14rem"
                                        title={_("EMOTION.LIST6.LI2_HEAD")}
                                        text={_("EMOTION.LIST6.LI2_TEXT")}
                                        actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("emotion/productivity"),}}
                                        primaryColor="#7B62FE"
                                        linkHoverColor="#7B62FE"
                                    />
                                </div>
                                <div className="col-12 col-md-6 mt-1 p-3 pb-0">
                                    <CardTitleTextImageCustom
                                        cardHeight="14rem"
                                        title={_("EMOTION.LIST6.LI3_HEAD")}
                                        text={_("EMOTION.LIST6.LI3_TEXT")}
                                        actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("emotion/harmony"),}}
                                        primaryColor="#7B62FE"
                                        linkHoverColor="#7B62FE"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-12 col-lg-6 p-0">
                            <div className="row h-100 g-4 p-0">
                                <div className="col-12 col-md-6 mt-1 p-3">
                                    <CardTitleTextImageCustom
                                        cardHeight="14rem"
                                        title={_("EMOTION.LIST6.LI4_HEAD")}
                                        text={_("EMOTION.LIST6.LI4_TEXT")}
                                        actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("emotion/independence"),}}
                                        primaryColor="#7B62FE"
                                        linkHoverColor="#7B62FE"
                                    />
                                </div>
                                <div className="col-12 col-md-6 mt-1 p-3">
                                    <CardTitleTextImageCustom
                                        cardHeight="14rem"
                                        title={_("EMOTION.LIST6.LI5_HEAD")}
                                        text={_("EMOTION.LIST6.LI5_TEXT")}
                                        actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("emotion/energy"),}}
                                        primaryColor="#7B62FE"
                                        linkHoverColor="#7B62FE"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0">
                            <div className="row h-100 g-4 p-0">
                                <div className="col-12 mt-1 p-3 custom-card-padding card-big">
                                    <CardTitleTextImageCustom
                                        cardHeight="14rem"
                                        title={_("EMOTION.LIST6.LI6_HEAD")}
                                        text={_("EMOTION.LIST6.LI6_TEXT")}
                                        imgSrc="/img/page/emotion/traits-mask-2.svg"
                                        imgPosition="right-bottom"
                                        imgH="17rem"
                                        responsive={true}
                                        actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("emotion/openness"),}}
                                        primaryColor="#7B62FE"
                                        linkHoverColor="#7B62FE"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row mb-6">
                        <div className="col-lg-6">
                            <h2>{_("EMOTION.HEAD7")}</h2>
                            <p className="mb-0">{_("EMOTION.DESK7")}</p>
                        </div>
                    </div>
                    <div className="row emotion-info-section UseCasses-container  mb-0">
                        <div className="info-list row g-4">
                            <div className="col-12 col-xxl-4 col-lg-6 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-sport.svg",
                                        },
                                        title: _("EMOTION.LIST7.LI1_HEAD"),
                                    }}
                                    text={_("EMOTION.LIST7.LI1_TEXT")}
                                    bgColor="#ECE9FF"
                                />
                            </div>
                            <div className="col-12 col-xxl-4 col-lg-6 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-bag.svg",
                                        },
                                        title: _("EMOTION.LIST7.LI2_HEAD"),
                                    }}
                                    text={_("EMOTION.LIST7.LI2_TEXT")}
                                    bgColor="#FFFFFF"
                                />
                            </div>
                            <div className="col-12 col-xxl-4 col-lg-12 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-health.svg",
                                        },
                                        title: _("EMOTION.LIST7.LI3_HEAD"),
                                    }}
                                    text={_("EMOTION.LIST7.LI3_TEXT")}
                                    bgColor="#ECE9FF"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row waist-info-section UseCasses-container">
                        <div className="info-list row g-4">
                            <div className="col-12 col-xxl-4 col-lg-6 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-research.svg",
                                        },
                                        title: _("EMOTION.LIST7.LI4_HEAD"),
                                    }}
                                    text={_("EMOTION.LIST7.LI4_TEXT")}
                                    bgColor="#FFFFFF"
                                    
                                />
                            </div>
                            <div className="col-12 col-xxl-4 col-lg-6 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-note.svg",
                                        },
                                        title: _("EMOTION.LIST7.LI5_HEAD"),
                                    }}
                                    text={_("EMOTION.LIST7.LI5_TEXT")}
                                    bgColor="#ECE9FF"
                                />
                            </div>
                            <div className="col-12 col-xxl-4 col-lg-12 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-heart.svg",
                                        },
                                        title: _("EMOTION.LIST7.LI6_HEAD"),
                                    }}
                                    text={_("EMOTION.LIST7.LI6_TEXT")}
                                    bgColor="#FFFFFF"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Review
                    appId={appId}
                    codes={{
                        countryCode: Locale.countryCode,
                        languageCode: Locale.language,
                    }}
                    text={{
                        head: _("REVIEW.HEAD"),
                        description: _("REVIEW.DESCRIPTION"),
                        link: _("REVIEW.LINK_ALL_REVIEWS"),
                        readMoreLink: _("REVIEW.READ_MORE_LINK"),
                        fillerCard: {
                            head: [
                                _("REVIEW.FILLER_CARD.HEAD1"),
                                _("REVIEW.FILLER_CARD.HEAD2"),
                                _("REVIEW.FILLER_CARD.HEAD3"),
                            ],
                            link: _("REVIEW.FILLER_CARD.LINK"),
                        },
                    }}
                    themeColor="#7B62FE"
                    hasUnderlineHover={false}
                />

                <section>
                    <CallToAction
                        title="EMOTION.HEAD8"
                        subtitle="EMOTION.DESK8"
                        appId={appId}
                        appDownloadTitle={_("EMOTION.DWN")}
                        imgSrc="/img/page/emotion/img-cta-en.webp"
                        imgAlt={_("EMOTION.ALT4")}
                    />
                </section>
            </div>

            <Footer />
            <ScrollButton color="#7B62FE" />
        </>
    );
}
