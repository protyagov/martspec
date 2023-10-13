import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import ImageI18N from "src/part/img-i18n";

export default function Biorhythms() {
    const rhythmsList = [
        {
            name: "PHYS",
            bgColor: "yellow",
            liCount: 6,
            isFirst: true
        },
        {
            name: "EMOT",
            bgColor: "green",
            liCount: 5,
            isFirst: false
        },
        {
            name: "INTEL",
            bgColor: "violet",
            liCount: 6,
            isFirst: false
        },
    ];

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 emotion biorhythms">

            <section className="pb-3 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/biorhythms.webp" className="ms-base-image" alt={_("BIORHYTHMS.IMG")} height={512} width={512} />
                        <h1 className="text-center pt-3 mb-5">{_("BIORHYTHMS.HEAD")}</h1>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("BIORHYTHMS.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="row">
                    <div className="col-12">
                        <h2>{_("BIORHYTHMS.HEAD1")}</h2>
                    </div>
                    <div className="col-lg-6">
                        <p>{_("BIORHYTHMS.DESK1_1")}</p>
                    </div>
                    <div id="firstContentSectionCollapse" className={"col-lg-6 mt-lg-0 mt-3 collapse" + (window.innerWidth >= 992 ? " show" : "")}>
                        <p>{_("BIORHYTHMS.DESK1_2")}</p>
                    </div>
                    <div className="col-12 d-lg-none mt-3">
                        <a
                            id="firstContentSectionCollapseBtn"
                            role="button"
                            data-bs-toggle="collapse"
                            href="#firstContentSectionCollapse"
                            aria-expanded={window.innerWidth >= 992}
                            aria-controls="firstContentSectionCollapse"
                        >
                            <p>{_("BIORHYTHMS.BTN1")}</p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-5 mb-5 bg-gray">
                <div id="rhythms-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="row py-4">
                        <div className="col-lg-4 col-12">
                            <div className="carousel-indicators indicators">
                                <a role="button" href="#rhythms-carousel" data-bs-slide-to="0" className="active" aria-current="true"><h2>{_("BIORHYTHMS.RHYTHMS.PHYS.HEAD")}</h2></a>
                                <a role="button" href="#rhythms-carousel" data-bs-slide-to="1"><h2>{_("BIORHYTHMS.RHYTHMS.EMOT.HEAD")}</h2></a>
                                <a role="button" href="#rhythms-carousel" data-bs-slide-to="2"><h2>{_("BIORHYTHMS.RHYTHMS.INTEL.HEAD")}</h2></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="carousel-inner">
                                {
                                    rhythmsList.map(rhythm => (
                                        <div key={"biorhythm-" + rhythm.name} className={"px-lg-3 carousel-item" + (rhythm.isFirst ? " active" : "")}>
                                            <div className="mt-4 mb-5">
                                                <p>{_("BIORHYTHMS.RHYTHMS." + rhythm.name + ".DESK")}</p>
                                            </div>
                                            <div className={"block bg-" + rhythm.bgColor}>
                                                <h3 className="mb-4">{_("BIORHYTHMS.RHYTHMS.LIST_HEAD")}</h3>
                                                <ul className="features-list">
                                                    {
                                                        [...Array(rhythm.liCount).keys()].map(idx => {
                                                            idx++;
                                                            return (
                                                                <li key={"biorhythm-" + rhythm.name + "-li" + idx}>
                                                                    {_("BIORHYTHMS.RHYTHMS." + rhythm.name + ".LI" + idx)}
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="row">
                    <div className="col-12">
                        <h2>{_("BIORHYTHMS.HEAD2")}</h2>
                    </div>
                    <div className="col-lg-6">
                        <p>{_("BIORHYTHMS.DESK2")}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <img src="/img/biorhythms_diagram_1.webp" className="img-fluid my-3" alt={_("BIORHYTHMS.ALT2")} />
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col px-0 d-flex flex-wrap justify-content-center gap-4">
                        <div className="block-wrapper">
                            <div className="block bg-green">
                                <h3>{_("BIORHYTHMS.LIST2.LI1_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI1_TEXT")}</p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="block bg-yellow">
                                <h3>{_("BIORHYTHMS.LIST2.LI2_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI2_TEXT")}</p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="block bg-orange">
                                <h3>{_("BIORHYTHMS.LIST2.LI3_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI3_TEXT")}</p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="block bg-blue">
                                <h3>{_("BIORHYTHMS.LIST2.LI4_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI4_TEXT")}</p>
                            </div>
                        </div>
                        <div className="block-wrapper">
                            <div className="block bg-violet">
                                <h3>{_("BIORHYTHMS.LIST2.LI5_HEAD")}</h3>
                                <p>{_("BIORHYTHMS.LIST2.LI5_TEXT")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="row g-5">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>{_("BIORHYTHMS.HEAD3")}</h2>
                            <p>{_("BIORHYTHMS.DESK3_1")}</p>
                            <div className="my-5 py-2">
                                <h4 className="mb-4">{_("BIORHYTHMS.DESK3_2")}</h4>
                                <div className="d-flex flex-wrap justify-content-between why-list">
                                <p>{_("BIORHYTHMS.LIST3.LI1_TEXT")}</p>
                                <p>{_("BIORHYTHMS.LIST3.LI2_TEXT")}</p>
                                <p>{_("BIORHYTHMS.LIST3.LI3_TEXT")}</p>
                                <p className="mb-0">{_("BIORHYTHMS.LIST3.LI4_TEXT")}</p>
                                </div>
                            </div>
                            <ImageI18N src="/img/biorhythms_screen_1.en.512.webp" w={207} h={402} cls="ms-base-image d-block d-lg-none" alt={_("BIORHYTHMS.ALT3")} />
                            <p>{_("BIORHYTHMS.DESK3_3")}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <ImageI18N src="/img/biorhythms_screen_1.en.512.webp" w={292} h={563} cls="ms-base-image d-none d-lg-block" alt={_("BIORHYTHMS.ALT3")} />
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="advantages-list">

                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("BIORHYTHMS.HEAD4")}</h2>
                            <p>{_("BIORHYTHMS.DESK4")}</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 mb-3 pe-3">
                            <div className="li">
                                <div className="icon"><img src="/img/biorhythms_icon_1.svg" alt={_("BIORHYTHMS.ALT4_1")} /></div>
                                <div>
                                    <h4>{_("BIORHYTHMS.LIST4.LI1_HEAD")}</h4>
                                    <p>{_("BIORHYTHMS.LIST4.LI1_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="li">
                                <div className="icon"><img src="/img/biorhythms_icon_2.svg" alt={_("BIORHYTHMS.ALT4_2")} /></div>
                                <div>
                                    <h4>{_("BIORHYTHMS.LIST4.LI2_HEAD")}</h4>
                                    <p>{_("BIORHYTHMS.LIST4.LI2_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="li">
                                <div className="icon"><img src="/img/biorhythms_icon_3.svg" alt={_("BIORHYTHMS.ALT4_3")} /></div>
                                <div>
                                    <h4>{_("BIORHYTHMS.LIST4.LI3_HEAD")}</h4>
                                    <p>{_("BIORHYTHMS.LIST4.LI3_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="li">
                                <div className="icon"><img src="/img/biorhythms_icon_4.svg" alt={_("BIORHYTHMS.ALT4_4")} /></div>
                                <div>
                                    <h4>{_("BIORHYTHMS.LIST4.LI4_HEAD")}</h4>
                                    <p>{_("BIORHYTHMS.LIST4.LI4_TEXT")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="row text-lg-start text-center">
                    <div className="d-flex flex-lg-row flex-column block bg-green">
                        <div className="col-lg-6 col-12">
                            <h2>{_("BIORHYTHMS.HEAD5")}</h2>
                            <p className="flex-grow-1">{_("BIORHYTHMS.DESK5")}</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                target="_blank" title={_("BIORHYTHMS.DWN")} className="ms-btn-apple mt-5 mx-lg-0 mx-auto"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <div className="col-lg-6 col-8 mx-auto">
                            <ImageI18N src="/img/emotion_screen_4.en.512.webp" w={400} h={400} cls="img-fluid ms-lg-auto me-lg-0 py-lg-0 py-5" alt={_("BIORHYTHMS.ALT5")} />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}
