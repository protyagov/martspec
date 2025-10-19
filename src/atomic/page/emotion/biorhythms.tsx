import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import CallToAction from "@/atomic/organism/call-to-action-new";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export default function Biorhythms() {
    const appId = getAppId();
    const items = useBreadcrumbs();
    const rhythmsList = [
        {
            name: "PHYS",
            bgColor: "yellow",
            liCount: 6,
            isFirst: true,
        },
        {
            name: "EMOT",
            bgColor: "green",
            liCount: 5,
            isFirst: false,
        },
        {
            name: "INTEL",
            bgColor: "violet",
            liCount: 6,
            isFirst: false,
        },
    ];

    const shouldContentCollapse = window.innerWidth <= 992;

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion biorhythms">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <Header
                    title={_("BIORHYTHMS.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("BIORHYTHMS.DWN")}
                    imgSrc="/img/page/emotion/bioritms-header-en.webp"
                    imgAlt={_("BIORHYTHMS.IMG")}
                    imgH={435}
                    imgW={435}
                >
                    <div className="biorhythms-lists">
                        <ul className="header-content-list">
                            <li>{_("BIORHYTHMS.ABOUT_1")}</li>
                            <li>{_("BIORHYTHMS.ABOUT_2")}</li>
                            <li>{_("BIORHYTHMS.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section>
                    <div className="row">
                        <div className="col-12">
                            <h2>{_("BIORHYTHMS.HEAD1")}</h2>
                            <div className="columns-with-collapse">
                                <div>
                                    <p>{_("BIORHYTHMS.DESK1_1")}</p>
                                    <a
                                        role="button"
                                        data-bs-toggle="collapse"
                                        href="#firstCollapse"
                                        aria-expanded={!shouldContentCollapse}
                                        aria-controls="firstCollapse"
                                        className="ms-read-more-btn-emotion ms-content-collapse-btn d-lg-none"
                                    >
                                        <span>{_("BIORHYTHMS.BTN1")}</span>
                                    </a>
                                </div>
                                <div
                                    id="firstCollapse"
                                    className={"column collapse" + (shouldContentCollapse ? "" : " show")}
                                >
                                    <p>{_("BIORHYTHMS.DESK1_2")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray">
                    <div id="rhythms-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-mob-xxs">
                                <div className="carousel-indicators indicators">
                                    <a
                                        role="button"
                                        href="#rhythms-carousel"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                    >
                                        <h2>{_("BIORHYTHMS.RHYTHMS.PHYS.HEAD")}</h2>
                                    </a>
                                    <a role="button" href="#rhythms-carousel" data-bs-slide-to="1">
                                        <h2>{_("BIORHYTHMS.RHYTHMS.EMOT.HEAD")}</h2>
                                    </a>
                                    <a role="button" href="#rhythms-carousel" data-bs-slide-to="2">
                                        <h2 className="mb-0">{_("BIORHYTHMS.RHYTHMS.INTEL.HEAD")}</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="carousel-inner">
                                    {rhythmsList.map((rhythm) => (
                                        <div
                                            key={"biorhythm-" + rhythm.name}
                                            className={"px-lg-3 carousel-item" + (rhythm.isFirst ? " active" : "")}
                                        >
                                            <p>{_("BIORHYTHMS.RHYTHMS." + rhythm.name + ".DESK")}</p>
                                            <div className={"block bg-" + rhythm.bgColor}>
                                                <h3 className="">{_("BIORHYTHMS.RHYTHMS.LIST_HEAD")}</h3>
                                                <ul>
                                                    {[...Array(rhythm.liCount).keys()].map((idx) => {
                                                        idx++;
                                                        return (
                                                            <li key={"biorhythm-" + rhythm.name + "-li" + idx}>
                                                                {_("BIORHYTHMS.RHYTHMS." + rhythm.name + ".LI" + idx)}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row mb-0">
                        <div className="col">
                            <h2>{_("BIORHYTHMS.HEAD2")}</h2>
                            <p className="">{_("BIORHYTHMS.DESK2")}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <img
                                src="/img/biorhythms_diagram_1.webp"
                                className="ms-base-image mx-auto"
                                height={283}
                                width={848}
                                alt={_("BIORHYTHMS.ALT2")}
                            />
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-12">
                            <div className="block bg-green">
                                <h3>{_("BIORHYTHMS.LIST2.LI1_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI1_TEXT")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="block bg-yellow">
                                <h3>{_("BIORHYTHMS.LIST2.LI2_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI2_TEXT")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="block bg-orange">
                                <h3>{_("BIORHYTHMS.LIST2.LI3_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI3_TEXT")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="block bg-blue">
                                <h3>{_("BIORHYTHMS.LIST2.LI4_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI4_TEXT")}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="block bg-violet">
                                <h3>{_("BIORHYTHMS.LIST2.LI5_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI5_TEXT")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6 d-table">
                            <div className="d-table-cell align-middle">
                                <h2>{_("BIORHYTHMS.HEAD3")}</h2>
                                <p>{_("BIORHYTHMS.DESK3_1")}</p>
                                <div className="mb-6">
                                    <h3>{_("BIORHYTHMS.DESK3_2")}</h3>
                                    <ul className="checkmark-list">
                                        <li className="li">{_("BIORHYTHMS.LIST3.LI1_TEXT")}</li>
                                        <li className="li">{_("BIORHYTHMS.LIST3.LI2_TEXT")}</li>
                                        <li className="li">{_("BIORHYTHMS.LIST3.LI3_TEXT")}</li>
                                        <li className="li">{_("BIORHYTHMS.LIST3.LI4_TEXT")}</li>
                                    </ul>
                                </div>
                                <ImageI18N
                                    src="/img/biorhythms_screen_1-en.512.webp"
                                    w={207}
                                    h={402}
                                    cls="ms-base-image d-block d-lg-none mb-mob-xxs"
                                    alt={_("BIORHYTHMS.ALT3")}
                                />
                                <p className="mb-0">{_("BIORHYTHMS.DESK3_3")}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <ImageI18N
                                src="/img/biorhythms_screen_1-en.512.webp"
                                w={292}
                                h={563}
                                cls="ms-base-image d-none d-lg-block"
                                alt={_("BIORHYTHMS.ALT3")}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("BIORHYTHMS.HEAD4")}</h2>
                            <p className="mb-0">{_("BIORHYTHMS.DESK4")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="list-with-icons">
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-decrease.svg" alt={_("BIORHYTHMS.ALT4_1")} />
                                    </div>
                                    <div>
                                        <h3>{_("BIORHYTHMS.LIST4.LI1_HEAD")}</h3>
                                        <p>{_("BIORHYTHMS.LIST4.LI1_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-sleep.svg" alt={_("BIORHYTHMS.ALT4_2")} />
                                    </div>
                                    <div>
                                        <h3>{_("BIORHYTHMS.LIST4.LI2_HEAD")}</h3>
                                        <p>{_("BIORHYTHMS.LIST4.LI2_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-depression.svg" alt={_("BIORHYTHMS.ALT4_3")} />
                                    </div>
                                    <div>
                                        <h3>{_("BIORHYTHMS.LIST4.LI3_HEAD")}</h3>
                                        <p>{_("BIORHYTHMS.LIST4.LI3_TEXT")}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/img/atom/icons/icon-no-appetite.svg" alt={_("BIORHYTHMS.ALT4_4")} />
                                    </div>
                                    <div>
                                        <h3>{_("BIORHYTHMS.LIST4.LI4_HEAD")}</h3>
                                        <p>{_("BIORHYTHMS.LIST4.LI4_TEXT")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <CallToAction
                        title="BIORHYTHMS.HEAD5"
                        subtitle="BIORHYTHMS.DESK5"
                        appId={appId}
                        appDownloadTitle={_("BIORHYTHMS.DWN")}
                        imgSrc="/img/page/biorhythms/img-cta-en.webp"
                        imgAlt={_("BIORHYTHMS.ALT5")}
                    />
                </section>
            </div>

            <Footer />
            <ScrollButton color="#7B62FE" />
        </>
    );
}
