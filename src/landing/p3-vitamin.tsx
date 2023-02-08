import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";


export default function P3LogVitamin() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 vitamin">
            <img src="/img/vitamin.svg" className="img-fluid" alt={_("VITAMIN.IMG")} height={512} width={512} />
            <h1 className="text-center pt-3">{_("VITAMIN.HEAD")}</h1>

            <section className="my-4 text-center vitamin-about">
                <h3>{_("VITAMIN.ABOUT_1")}</h3>
                <h3>{_("VITAMIN.ABOUT_2")}</h3>
                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                    target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple mt-4"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>

            <section>
                <div className="row">
                    <div className="col-md-6 col-12 vitamin-block bg-blue">
                        <img src="/img/apple_health_icon.svg" className="m-0 p-0" alt="Apple Health" height={100} width={100} />
                        <h3>{_("VITAMIN.HEAD1")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC1")}</p>
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center vitamin-block">
                        <h2>{_("VITAMIN.HEAD2")}</h2>
                        <p>{_("VITAMIN.DESC2")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row d-flex vitamin-block bg-green">
                    <div className="col-md-6 col-12">
                        <h3>{_("VITAMIN.HEAD3")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC3")}</p>
                    </div>
                    <div className="col-md-6 col-12 order-md-last order-first">
                        <img src="/img/vitamin_minerals_img.svg" className="p-0 float-end vitamin-img-50" alt="Apple Health" height="auto" width="100%" />
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center vitamin-block">
                        <h2>{_("VITAMIN.HEAD4")}</h2>
                        <p>{_("VITAMIN.DESC4")}</p>
                    </div>
                    <div className="col-md-6 col-12 vitamin-block bg-blue">
                        <img src="/img/without_login_icon.svg" className="m-0 p-0" alt="Apple Health" height={100} width={100} />
                        <h3>{_("VITAMIN.HEAD5")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC5")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row d-flex vitamin-block bg-green">
                    <div className="col-md-6 col-12">
                        <img src="/img/vitamin_vitamins_img.svg" className="p-0 ms-0 vitamin-img-50" alt="Apple Health" height="auto" width="100%" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h3>{_("VITAMIN.HEAD6")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC6")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row d-flex vitamin-block bg-blue">
                    <div className="col">
                        <h3>{_("VITAMIN.HEAD7")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC7")}</p>
                        <img src="/img/vitamin_mockups.png" alt={_("VITAMIN.HEAD7")} className="p-0 vitamin-img-100" />
                    </div>
                </div>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD6")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC6")}
                    <a href="https://www.mayoclinic.org/drugs-supplements-vitamin-e/art-20364144" target="_blank">
                        <i><small>{_("BTN.SRC1")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD7")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC7")}
                    <a href="https://www.mountsinai.org/health-library/supplement/vitamin-b12-cobalamin" target="_blank">
                        <i><small>{_("BTN.SRC2")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD8")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC8")}
                    <a href="https://www.healthline.com/health/biotin-hair-growth" target="_blank">
                        <i><small>{_("BTN.MORE")}.</small></i>
                    </a>
                </p>
            </section>


            <section>
                <h4>{_("VITAMIN.HEAD9")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC9")}
                    <a href="https://ods.od.nih.gov/factsheets/Folate-Consumer/" target="_blank">
                        <i><small>{_("BTN.SRC1")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD0")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC0")}
                    <a href="https://www.mayoclinic.org/drugs-supplements-niacin/art-20364984" target="_blank">
                        <i><small>{_("BTN.FACT")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <div className="row mt-4">
                    <div className="col">
                        <p>{_("VITAMIN.FOOT")}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                            target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>



            <IronImage imgLo="/img/p_vitamin_screens.64.webp" imgHi="/img/p_vitamin_screens.512.webp" text={_("VITAMIN.IMG")} h={560} w={1458} />


        </div>
        <Footer />
    </>
}