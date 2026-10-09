import * as React from 'react';
import _, { Locale } from "@/i18n/locale";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import Header from "@/atomic/organism/header";
import { getAppId } from "@/service/AppleService";
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import { Breadcrumb } from '../organism/breadcrumb';
import CardTitleText from '../molecule/card-title-text';
import CardImage from '../molecule/card-image';
import CardTitleTextImage from '../molecule/card-title-text-image';
import ImageI18N from '../atom/img-i18n';
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import CardTitleTextButton from '../molecule/card-title-text-button';
import CardTitleTextListButton from '../molecule/card-title-text-list-button';
import BulletList from '../molecule/bullet-list';
import ButtonApple from '../atom/button-apple';
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import { SvgFactory } from "@/atomic/atom/svg-factory";
import Review from '../prototype/review';
import ScrollButton from '../atom/scroll-button';
import CallToAction from '../organism/call-to-action-new';

export default function ProteinPage() {
    const appID = getAppId();
    const iconColor = "#7C53CE";
    const items = useBreadcrumbs();

    const advantages: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/icon_iron_4.png",
                alt: _("PROTEIN.IMG1_ALT"),
            },
            title: _("PROTEIN.LIST2.LI2_1_TITLE"),
            subtitle: _("IRON.LIST2.LI2_1_TEXT"),
        },
        {
            icon: {
                component: <SvgFactory type="noads" color={iconColor} />,
                alt: _("PROTEIN.IMG2_ALT"),
            },
            title: _("PROTEIN.LIST2.LI2_2_TITLE"),
            subtitle: _("PROTEIN.LIST2.LI2_2_TEXT"),
        },
        {
            icon: {
                component: <SvgFactory type="shield" color={iconColor} />,
                alt: _("PROTEIN.IMG3_ALT"),
            },
            title: _("PROTEIN.LIST2.LI2_3_TITLE"),
            subtitle: _("PROTEIN.LIST2.LI2_3_TEXT"),
        },
        {
            icon: {
                component: <SvgFactory type="nosignup" color={iconColor} />,
                alt: _("PROTEIN.IMG4_ALT"),
            },
            title: _("PROTEIN.LIST2.LI2_4_TITLE"),
            subtitle: _("PROTEIN.LIST2.LI2_4_TEXT"),
        },
    ]

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page protein">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>

                <Header
                    title={_("PROTEIN.HEAD")}
                    appId={appID}
                    appDownloadTitle={_("PROTEIN.DWN")}
                    imgSrc="/img/page/protein/protein-header-en.webp"
                    imgAlt={_("PROTEIN.IMG")}
                    imgH={305}
                    imgW={450}
                >
                    <div className="fs-4">
                        <ul className="header">
                            <li>{_("PROTEIN.ABOUT_1")}</li>
                            <li>{_("PROTEIN.ABOUT_2")}</li>
                            <li>{_("PROTEIN.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section>
                    <div className="row row-cols-xl-3 row-cols-1 g-4">
                        <div className="col col-md-4">
                            <CardTitleTextImage
                                title={_("PROTEIN.LIST1.LI1_HEAD")}
                                text={_("PROTEIN.LIST1.DESC1")}
                                imgSrc="/img/page/protein/mid-pic-illustration-shaker.webp"
                                imgH={282}
                                imgW={248}
                                imgAlt={_("PROTEIN.LIST1.LI1_IMG_ALT")}
                                imgPosition="default"
                            />
                        </div>
                        <div className="col col-md-4 p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("PROTEIN.LIST1.LI2_HEAD")}
                                        text={_("PROTEIN.LIST1.DESC2")}
                                        bgColor="#F1E7FF"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("PROTEIN.LIST1.LI3_HEAD")}
                                        text={_("PROTEIN.LIST1.DESC3")}
                                        bgColor="#DCEDFF"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <CardImage
                                imgSrc="/img/page/protein/mid-pic-illustration-girl.webp"
                                imgH={400}
                                imgW={434}
                                imgAlt={_("PROTEIN.LIST1.LI3_IMG_ALT")}
                                bgColor="#F4F5F8"
                                alignItems="end"
                                justifyContent="end"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row d-flex align-items-center justify-content-between g-4">
                        <div className="col-12 col-xxl-6">
                            <ImageI18N
                                src="/img/page/protein/why-protein-en.webp"
                                w={620}
                                h={390}
                                alt={_("PROTEIN.IMG2_ALT")}
                                cls="ms-base-image mt-mob-xs"
                            />
                        </div>
                        <div className="mt-5 pt-5 protein col-12 offset-xxl-1 col-xxl-5 order-1 order-xxl-2 pb-2">
                            <CardTitleTextListButton
                                title={_("PROTEIN.HEAD2")}
                                description={_("PROTEIN.DESC2_1")}
                                subtitle={_("PROTEIN.SUB_HEAD")}
                                listItems={[
                                    _("PROTEIN.DESC2_2"),
                                    _("PROTEIN.DESC2_3"),
                                ]}
                                buttonText={_("PROTEIN.BTN_MORE")}
                                buttonLink={Locale.i18nLink(`coming-soon`)}
                                buttonColor="#7C53CE"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="row block p-0" style={{ backgroundColor: "#F1E7FF", overflow: "hidden" }}>
                            <div className="col-lg-7 ps-5 py-5 pr-0">
                                <h2 className="fs-1">{_("PROTEIN.HEAD4")}</h2>
                                <p className="mb-3">{_("PROTEIN.DESC3")}</p>

                                <h3 className="fs-3 fw-semibold mt-4 mb-3 text-start subhead-color">
                                    {_("PROTEIN.SUB_HEAD2")}
                                </h3>

                                <BulletList items={[_("PROTEIN.LIST3.LI1_HEAD")]} iconColor="#7C53CE" className="col-bullet-list fw-bold text-muted m-0 mb-1" />
                                <p className="m-0 mb-3">{_("PROTEIN.LIST3.LI1_TEXT")}</p>

                                <BulletList items={[_("PROTEIN.LIST3.LI2_HEAD")]} iconColor="#7C53CE" className="col-bullet-list fw-bold text-muted m-0 mb-1" />
                                <p className="m-0 mb-3">{_("PROTEIN.LIST3.LI2_TEXT")}</p>

                                <BulletList items={[_("PROTEIN.LIST3.LI3_HEAD")]} iconColor="#7C53CE" className="col-bullet-list fw-bold text-muted m-0 mb-1" />
                                <p className="m-0 mb-3">{_("PROTEIN.LIST3.LI3_TEXT")}</p>

                                <BulletList items={[_("PROTEIN.LIST3.LI4_HEAD")]} iconColor="#7C53CE" className="col-bullet-list fw-bold text-muted m-0 mb-1" />
                                <p className="m-0 mb-3">{_("PROTEIN.LIST3.LI4_TEXT")}</p>

                                <div>
                                    <h3 className="fs-3 fw-semibold mb-3 text-start subhead-color">
                                        {_("PROTEIN.SUB_HEAD3")}
                                    </h3>
                                    <p className="mb-4">{_("PROTEIN.DESC4")}</p>
                                    <ButtonApple appId={appID} appDownloadTitle={_("PROTEIN.DWN")} />
                                </div>
                            </div>

                            <div className="col-lg-5 d-flex justify-content-end align-items-end p-0">
                                <ImageI18N
                                    src="/img/page/protein/loss-weight.svg"
                                    w={600}
                                    h={450}
                                    cls="m-0 img-fluid"
                                    alt={_("PROTEIN.IMG6_ALT")}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("MASS.HEAD3")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
                </section>

                <Review
                    appId={appID}
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
                    themeColor="#7C53CE"
                    hasUnderlineHover={false}
                />

                <section>
                    <CallToAction
                        title="PROTEIN.HEAD5"
                        subtitle="PROTEIN.DESC5"
                        appId={appID}
                        appDownloadTitle={_("PROTEIN.DWN")}
                        imgSrc="/img/page/protein/protein-header-en.webp"
                        imgAlt={_("PROTEIN.IMG_CTA_ALT1")}
                    />
                </section>

            </div>

            <Footer />
            <ScrollButton color="#1686FF" />
        </>
    );
}