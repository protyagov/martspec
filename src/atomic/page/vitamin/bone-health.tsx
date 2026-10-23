import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import CallToAction from "@/atomic/organism/call-to-action-new";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import Header from "@/atomic/organism/header";
import BulletList from "@/atomic/molecule/bullet-list";
import CardImage from "@/atomic/molecule/card-image";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardTitleSubtitle, { CardTitleSubtitleProps } from "@/atomic/molecule/card-title-subtitle";
import Review from "@/atomic/prototype/review";
import CardVitamin, * as VitaminCard from "@/atomic/molecule/card-vitamin";
import Accordion, * as VitaminAccordion from "@/atomic/molecule/accordion";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import Table, { TableData } from "@/atomic/molecule/table";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";

export default function BoneHealth() {
    const appId = getAppId();
    const items = useBreadcrumbs();

    return (
        <>
            <NavigationBar />

            <div className="vitamin">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <section className="mt-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12 col-md-6">
                                <h1>{_("BONE_HEALTH.HEAD")}</h1>
                            </div>

                            <ImageI18N
                                src="/img/page/vitamin/bones-woman-work-out.webp"
                                w={500}
                                h={314}
                                cls="ms-base-image w-100 my-3 my-lg-4"
                                alt={_("BONE_HEALTH.ALT1")}
                            />

                            <p>{_("BONE_HEALTH.DESC1")}</p>
                            <p>{_("BONE_HEALTH.DESC2")}</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <h2>{_("BONE_HEALTH.HEAD2")}</h2>
                        <p>{_("BONE_HEALTH.DESC3")}</p>
                        <p>
                            <strong>{_("BONE_HEALTH.SUBHEADS.HEAD1")}</strong> {_("BONE_HEALTH.SUBTITLES.TITLE1")}
                        </p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                        <div className="col">
                            <CardTitleTextImageCustom
                                title={_("BONE_HEALTH.CARDS.HEAD1")}
                                text={_("BONE_HEALTH.CARDS.DESC1")}
                                shadow={true}
                            />
                        </div>
                        <div className="col">
                            <CardTitleTextImageCustom
                                title={_("BONE_HEALTH.CARDS.HEAD2")}
                                text={_("BONE_HEALTH.CARDS.DESC2")}
                                bgColor="#F4F5F8"
                                shadow={true}
                            />
                        </div>
                        <div className="col">
                            <CardTitleTextImageCustom
                                title={_("BONE_HEALTH.CARDS.HEAD3")}
                                text={_("BONE_HEALTH.CARDS.DESC3")}
                                shadow={true}
                            />
                        </div>
                    </div>
                    <div className="row bone-health">
                        <div className="col-12">
                            <div className="bone-health-card d-flex flex-wrap align-items-center justify-content-between shadow rounded-5">
                                <div className="col-12 col-xxl-6 order-2 order-xxl-2 my-4 rounded-5 overflow-hidden">
                                    <ImageI18N
                                        src="/img/page/vitamin/bones-back-ache.webp"
                                        w={480}
                                        h={360}
                                        alt={_("BONE_HEALTH.ALT2")}
                                        cls="ms-base-image mt-mob-xs rounded-5"
                                    />
                                </div>

                                <div className="col-12 col-xxl-5 order-1 order-xxl-1 p-4 p-lg-5">
                                    <p>
                                        <strong>{_("BONE_HEALTH.SUBHEADS.HEAD2")}</strong>{" "}
                                        {_("BONE_HEALTH.SUBTITLES.TITLE2")}
                                    </p>
                                    <ul className="header-content-list">
                                        <li>{_("BONE_HEALTH.LIST.1")}</li>
                                        <li>{_("BONE_HEALTH.LIST.2")}</li>
                                        <li>{_("BONE_HEALTH.LIST.3")}</li>
                                        <li>{_("BONE_HEALTH.LIST.4")}</li>
                                    </ul>
                                    <p>{_("BONE_HEALTH.SUBTITLES.TITLE3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <p>
                            <strong>{_("BONE_HEALTH.SUBHEADS.HEAD3")}</strong> {_("BONE_HEALTH.SUBTITLES.TITLE4")}
                        </p>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12">
                            <div className="bone-health-section shadow rounded-5 p-4 p-lg-5">
                                <h2>{_("BONE_HEALTH.HEAD3")}</h2>
                                <p>{_("BONE_HEALTH.DESC4")}</p>
                                <p>{_("BONE_HEALTH.DESC5")}</p>
                                <p>{_("BONE_HEALTH.DESC6")}</p>
                                <ul className="header-content-list">
                                    <li>{_("BONE_HEALTH.DESC7")}</li>
                                    <li>{_("BONE_HEALTH.DESC8")}</li>
                                </ul>
                                <p>{_("BONE_HEALTH.DESC9")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row p-0 mt-0">
                    <CallToAction
                        title={_("VITAMIN.HEAD6")}
                        subtitle={_("VITAMIN.DESC6")}
                        appId={appId}
                        appDownloadTitle={_("VITAMIN.DWN")}
                        imgSrc="/img/org/call-to-action/vitamin/Img-CallToAction-en.webp"
                        imgAlt={_("VITAMIN.ALT3")}
                    />
                </section>
            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
