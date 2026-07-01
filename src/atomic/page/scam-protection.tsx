import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _, { Locale } from "@/i18n/locale";
import Header from "@/atomic/organism/header";
import ScrollButton from "../atom/scroll-button";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ImageI18N from "@/atomic/atom/img-i18n";
import CardIconTitleText from "@/atomic/molecule/card-icon-title-text";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import ButtonLinkStyleAnimated from "@/atomic/atom/buttonLinkStyleAnimated";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import BulletList from "@/atomic/molecule/bullet-list";

export default function ScamProtection() {
    const items = useBreadcrumbs();

    return (
        <>
            <NavigationBar />

            <div className="scam-protection">
                <div className="row mb-3">
                    <Breadcrumb items={items} />
                </div>

                <section className="mt-0 row">
                    <div  className="col-lg-7">
                        <h1 className="font-normal">{_("SCAM_PROTECTION.HEAD")}</h1>
                        <p className="font-normal">{_("SCAM_PROTECTION.DESC")}</p>
                    </div>
                    <div className="col-lg-5 d-flex p-0 justify-content-center">
                        <ImageI18N
                            src="/img/page/scam-protection/safety1.webp"
                            w={540}
                            h={300}
                            cls="p-0 img-fluid"
                            alt={_("SCAM_PROTECTION.ALT")}
                        />
                    </div>
                </section>

                <section>
                    <div className="row block g-4 shadow-none" style={{ overflow: "hidden" }}>
                        <div className="col-lg-6 p-3">
                            <div className="h-100 rounded-5 p-4" style={{ backgroundColor: "#FFE9E9" }}>
                                
                                <div className="d-flex align-items-start">
                                    <div>
                                        <img className="p-0" src="/img/page/scam-protection/red-shield.svg" alt="Shield" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 className="m-0 pt-2 ps-3"> {_("CAREERS.HEAD4")}</h3>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between">
                                    <div className="col-lg-8 py-4 p-0">
                                        <BulletList items={[_("ZINC.LIST3.LI1_HEAD")]} iconColor="#FEB3B1" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                        <BulletList items={[_("ZINC.LIST3.LI2_HEAD")]} iconColor="#FEB3B1" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                        <BulletList items={[_("ZINC.LIST3.LI3_HEAD")]} iconColor="#FEB3B1" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                        <BulletList items={[_("ZINC.LIST3.LI4_HEAD")]} iconColor="#FEB3B1" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                    </div>
                                    <div className="col-lg-4 p-0 text-end">
                                            <ImageI18N
                                        src="/img/page/scam-protection/wrong.webp"
                                        w={135}
                                        h={160}
                                        cls="p-0 img-fluid"
                                        alt={_("CAREERS.ALT2")}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-3">
                            <div className="h-100 rounded-5 p-4" style={{ backgroundColor: "#E8FAE0" }}>
                                
                                <div className="d-flex align-items-start">
                                    <div>
                                        <img className="p-0" src="/img/page/scam-protection/green-shield.svg" alt="Shield" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 className="m-0 pt-2 ps-3"> {_("CAREERS.HEAD4")}</h3>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between">
                                    <div className="col-lg-8 py-4 p-0">
                                        <BulletList items={[_("ZINC.LIST3.LI1_HEAD")]} iconColor="#9CCA77" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                        <BulletList items={[_("ZINC.LIST3.LI2_HEAD")]} iconColor="#9CCA77" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                        <BulletList items={[_("ZINC.LIST3.LI3_HEAD")]} iconColor="#9CCA77" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                        <BulletList items={[_("ZINC.LIST3.LI4_HEAD")]} iconColor="#9CCA77" className="col-bullet-list fw-bold text-muted m-0 p-0" />
                                    </div>
                                    <div className="col-lg-4 p-0 text-end">
                                            <ImageI18N
                                        src="/img/page/scam-protection/right.webp"
                                        w={135}
                                        h={160}
                                        cls="p-0 img-fluid"
                                        alt={_("CAREERS.ALT2")}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
