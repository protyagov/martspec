import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import CardTitleText from "@/atomic/molecule/card-title-text";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ScrollButton from "@/atomic/atom/scroll-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import Review from "@/atomic/prototype/review";

export default function Workout() {
    const items = useBreadcrumbs();
    const highlights: IconTitleText[] = [
        {
            icon: { src: "/img/atom/icons/icon-sport.svg", alt: _("WORKOUT.ALT_CATALOG") },
            title: _("WORKOUT.CATALOG_TITLE"),
            subtitle: _("WORKOUT.CATALOG_TEXT"),
        },
        {
            icon: { src: "/img/atom/icons/icon-training-efficiency.svg", alt: _("WORKOUT.ALT_PROGRESS") },
            title: _("WORKOUT.PROGRESS_TITLE"),
            subtitle: _("WORKOUT.PROGRESS_TEXT"),
        },
        {
            icon: { src: "/img/atom/icons/icon-sync.svg", alt: _("WORKOUT.ALT_PRIVACY") },
            title: _("WORKOUT.PRIVACY_TITLE"),
            subtitle: _("WORKOUT.PRIVACY_TEXT"),
        },
    ];

    return (
        <>
            <NavigationBar />
            <div className="ms-base-page workout-page">
                <div className="row"><Breadcrumb items={items} /></div>
                <Header title={_("WORKOUT.HEAD")}>
                    <p className="workout-page__intro">{_("WORKOUT.SUBHEAD")}</p>
                </Header>

                <section>
                    <div className="row g-4">
                        <div className="col-12 col-lg-6">
                            <CardTitleText
                                title={_("WORKOUT.TRACKING_TITLE")}
                                text={_("WORKOUT.TRACKING_TEXT")}
                                bgColor="#EEF7FF"
                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <CardTitleText
                                title={_("WORKOUT.BUILDER_TITLE")}
                                text={_("WORKOUT.BUILDER_TEXT")}
                                bgColor="#F5F1FF"
                            />
                        </div>
                    </div>
                </section>

                <section className="workout-page__highlights">
                    <div className="row">
                        <div className="col-12"><h2>{_("WORKOUT.FEATURES_TITLE")}</h2></div>
                        <div className="col-12"><IconTitleTextList items={highlights} /></div>
                    </div>
                </section>

                <section>
                    <div className="row g-4">
                        <div className="col-12 col-lg-6">
                            <CardTitleText
                                title={_("WORKOUT.CALENDAR_TITLE")}
                                text={_("WORKOUT.CALENDAR_TEXT")}
                                bgColor="#FFF7E8"
                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <CardTitleText
                                title={_("WORKOUT.SHARING_TITLE")}
                                text={_("WORKOUT.SHARING_TEXT")}
                                bgColor="#EAF9F0"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <CallToAction
                        title="WORKOUT.CTA_TITLE"
                        subtitle={_("WORKOUT.CTA_TEXT")}
                        bgColor="#F4F5F8"
                    />
                </section>

                <Review
                    appId={6749025685}
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
                    themeColor="#5F63D8"
                    hasUnderlineHover={false}
                />
            </div>
            <Footer />
            <ScrollButton color="#5F63D8" />
        </>
    );
}
