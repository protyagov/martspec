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
//import ScrollButton from "../atom/scroll-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import Table, { TableData } from "@/atomic/molecule/table";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";


export default function Capsules() {
    const items = useBreadcrumbs();
    const FIRST_COL = [
    "Source",
    "Dissolving_speed",
    "Suitability",
    "Concerns"
    ];

    const tableData: TableData = {
        caption: _("CAPSULES.CAPSULES.CAPTION"), //SEO описание
        headers: [
            _("CAPSULES.CAPSULES.EMPTY"),
            _("CAPSULES.CAPSULES.HEAD1"),
            _("CAPSULES.CAPSULES.HEAD2")
        ],
        rows: FIRST_COL.map((colname, idx) => {
            const gelatin = _("CAPSULES.CAPSULES.TEXT.GELATIN")[idx];
            const vegan = _("CAPSULES.CAPSULES.TEXT.VEGAN")[idx];
            
            return [
                _("CAPSULES.CAPSULES.FIRST_COL." + colname),
                gelatin ? `${_("CAPSULES.CAPSULES.TEXT.GELATIN." + [idx])}` : " ",
                vegan ? `${_("CAPSULES.CAPSULES.TEXT.VEGAN." + [idx])}` : " "
            ];
        })
    };
    return (
        <>
            <NavigationBar />

            <div className="vitamin">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <section className="mt-0">
                    <div className="">
                        <div className="row align-items-center">
                        {/* Текстовый блок (половина ширины) */}
                        <div className="col-12 col-lg-6">
                            <h1>{_("CAPSULES.HEAD")}</h1>
                            <p>{_("CAPSULES.DESC")}</p>
                        </div>

                        {/* Блок с картинкой (половина ширины) */}
                        <div className="col-12 col-lg-6 mx-0">
                            <ImageI18N
                            src="/img/page/vitamin/capsules_header.avif"
                            w={425}
                            h={314}
                            cls="ms-base-image mx-0"
                            alt={_("CAPSULES.ALT")}
                            />
                        </div>
                        </div>
                    </div>
                </section>

                {/*ТАБЛИЦА ВИТАМИННЫЕ КАПСУЛЫ*/}
                <section>
                    <div className="row">
                        <h1>{_("CAPSULES.HEAD2")}</h1>
                        <p>{_("CAPSULES.DESC2")}</p>
                    </div>
                
                    <div className="row mb-2">
                        <div className="col-12 pe-2 m-0">
                            <Table 
                                data={tableData} 
                                transformMobile={true} 
                                headerBgColor="#F5EFFF"
                                firstColumnBgColor="#F9F5FF" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <CardTitleTextImageCustom
                            cardHeight="8rem"
                            title={_("CAPSULES.HEAD4")}
                            text={_("CAPSULES.DESC4")}
                            imgSrc="/img/page/vitamin/pill.avif"
                            imgPosition="right-bottom"
                            imgH="8.2rem"
                            responsive={true}
                            shadow={false}
                            bgColor="#F9F5FF"
                            primaryColor="#F9F5FF"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row mb-1">
                        <h1>{_("CAPSULES.HEAD3")}</h1>
                        <p>{_("CAPSULES.DESC3")}</p>
                    </div>
                    <div className="">
                        <div className="row">
                            {/* Карточка 1: DYES */}
                            <div className="col-12 col-md-6 py-3">
                                <CardTitleTextImageCustom
                                cardHeight="14rem"
                                title={_("CAPSULES.CARDS.HEAD")}
                                text={_("CAPSULES.CARDS.DESC")}
                                imgSrc="/img/page/vitamin/card1.avif"
                                imgPosition="right-bottom"
                                imgH="17rem"
                                responsive={true}
                                shadow={true}
                                bgColor="#FFFFFF"
                                primaryColor="#7B62FE"
                                />
                            </div>

                            {/* Карточка 2: LUBRICANTS */}
                            <div className="col-12 col-md-6 py-3">
                                <CardTitleTextImageCustom
                                cardHeight="14rem"
                                title={_("CAPSULES.CARDS.HEAD2")}
                                text={_("CAPSULES.CARDS.DESC2")}
                                imgSrc="/img/page/vitamin/card2.avif"
                                imgPosition="right-bottom"
                                imgH="17rem"
                                responsive={true}
                                shadow={true}
                                bgColor="#FFFFFF"
                                primaryColor="#7B62FE"
                                />
                            </div>

                            {/* Карточка 3: FILLERS */}
                            <div className="col-12 col-md-6 py-3">
                                <CardTitleTextImageCustom
                                cardHeight="14rem"
                                title={_("CAPSULES.CARDS.HEAD3")}
                                text={_("CAPSULES.CARDS.DESC3")}
                                imgSrc="/img/page/vitamin/card3.avif"
                                imgPosition="right-bottom"
                                imgH="17rem"
                                responsive={true}
                                shadow={true}
                                bgColor="#FFFFFF"
                                primaryColor="#7B62FE"
                                />
                            </div>

                            {/* Карточка 4: PRESERVATIVES */}
                            <div className="col-12 col-md-6 py-3">
                                <CardTitleTextImageCustom
                                cardHeight="14rem"
                                title={_("CAPSULES.CARDS.HEAD4")}
                                text={_("CAPSULES.CARDS.DESC4")}
                                imgSrc="/img/page/vitamin/card4.avif"
                                imgPosition="right-bottom"
                                imgH="17rem"
                                responsive={true}
                                shadow={true}
                                bgColor="#FFFFFF"
                                primaryColor="#7B62FE"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
            {/*<ScrollButton color="#FEB215" />*/}
        </>
    );

}