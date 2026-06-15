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

export default function ScamProtection() {
    const items = useBreadcrumbs();

    return (
        <>
            <NavigationBar />

            {/*<div className="container-xl ms-s-offset fs-3 pt-lg-5">
                <div className="row mb-3">
                    <Breadcrumb items={items} />
                </div>

                <Header
                    title={_("ABOUT.HEAD")}
                    imgSrc="/img/story.webp"
                    imgAlt={_("ABOUT.IMG")}
                    imgH={398}
                    imgW={542}
                    appDownloadTitle="Download"
                >
                    <p className="font-normal mb-0">{_("ABOUT.P1")}</p>
                </Header>

                <section className="pt-5">
                    <CallToAction
                        title="ABOUT.P2"
                        subtitle="ABOUT.P3"
                        appId={1}
                        appDownloadTitle="Download"
                        imgSrc="/img/about-statistik-en.webp"
                        imgAlt={_("ABOUT.IMG")}
                    />
                </section>
            </div>*/}

            <Footer />
            <ScrollButton />
        </>
    );
}
