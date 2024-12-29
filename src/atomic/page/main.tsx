import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import ScrollButton from "@/atomic/atom/scroll-button";
import appIds from "@/data/app-ids.json";
import Review from "@/atomic/prototype/review";
import CardAppSmall from "@/atomic/molecule/card-app-small";
import CardAppLarge from "@/atomic/molecule/card-app-large";

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

            <section className="ms-s-offset">
                <div className="mb-5">
                    <CardAppLarge
                        backgroundColor="#F9F9FF"
                        icon={<img width={70} height={70} src="/img/page/vitamin/logo-vitamin.svg" alt={_("VITAMIN.ICO")} />}
                        title={_("VITAMIN.HEAD")}
                        subtitle={_("VITAMIN.SUBHEAD")}
                        content={_("VITAMIN.TEXT")}
                        button={{
                        text: _("CAREERS.BUTTON3"),
                        link: "",
                        color: "#1686FF",
                        }}
                        imageSrc="/img/page/vitamin/vitamin-app-main-page.webp"
                        imageAlt={_("VITAMIN.IMG")}
                        useI18NImage={true}
                        isImageOnLeft={false}
                    />
                </div>
                
                <div className="col-4">
                    <CardAppSmall
                        backgroundColor="#F9F9FF"
                        icon={<img width={70} height={70} src="/img/page/vitamin/vitamin-ring-icon-main-page.svg" alt={_("VITAMIN.ICO")} />}
                        title={_("VITAMIN.HEAD")}
                        subtitle={_("VITAMIN.SUBHEAD")}
                        content={_("VITAMIN.TEXT")}
                        button={{
                        text: _("CAREERS.BUTTON3"),
                        link: "",
                        color: "#1686FF",
                        }}
                    />
                </div>
            </section>

            {/*
                div wrapper for proper side margins and fonts, 
                it's only needed for this page 
                and can be easily removed when this page is redesigned.
            */}
            <div className="ms-base-page ms-base-new">
                <Review
                    appId={allAppIds[getRandomArbitrary(0, allAppIds.length - 1)]}
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
