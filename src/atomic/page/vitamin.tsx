import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import VitaminItem from "src/atomic/molecule/vitaminItem";
import PageHeader from "../molecule/page-header";

const vitamins = {
    VITAMIN_FAT: ["VITAMIN_A", "VITAMIN_D", "VITAMIN_E", "VITAMIN_K"],
    VITAMIN_WATER: ["VITAMIN_B1", "VITAMIN_B2", "VITAMIN_B3", "VITAMIN_B5", "VITAMIN_B6", "VITAMIN_B7", "VITAMIN_B9", "VITAMIN_B12", "VITAMIN_C"],
    MINERAL: ["CALCIUM", "CHLORIDE", "CHROME", "COPPER", "IODINE", "IRON", "MAGNESIUM", "MANGANESE", "MOLYBDENUM", "PHOSPHORUS", "POTASSIUM", "SELENIUM", "SODIUM", "ZINC"]
};

export default function Vitamin() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 vitamin">

            <PageHeader
                title="VITAMIN.HEAD"
                subtitleLevel1="VITAMIN.ABOUT_1"
                subtitleLevel2="VITAMIN.ABOUT_2"
                appId={1519596234}
                appDownloadTitle="VITAMIN.DWN"
                imgSrc="/img/page/vitamin/vitamin.svg"
                imgAlt="VITAMIN.IMG"
                imgH={512}
                imgW={512}
            />

            <section>
                <div className="row gap-5">
                    <div className="col-md col-12 vitamin-block bg-blue">
                        <img src="/img/page/vitamin/apple-health-icon.svg" className="m-0 p-0 pe-4 pe-sm-0" alt="Apple Health" height={100} width={100} />
                        <h3>{_("VITAMIN.HEAD1")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC1")}</p>
                    </div>
                    <div className="col-md col-12 d-flex flex-column justify-content-center mt-md-0 mt-5 vitamin-block bg-transparent">
                        <h2>{_("VITAMIN.HEAD2")}</h2>
                        <p>{_("VITAMIN.DESC2")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row gap-5 vitamin-block bg-green">
                    <div className="col-md col-12">
                        <h3>{_("VITAMIN.HEAD3")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC3")}</p>
                    </div>
                    <div className="col-md col-12 order-md-last order-first">
                        <img src="/img/page/vitamin/vitamin-minerals-img.svg" className="p-0 float-end vitamin-img-50" alt="Apple Health" height="auto" width="100%" />
                    </div>
                </div>
            </section>

            <section>
                <div className="row gap-5">
                    <div className="col-md col-12 d-flex flex-column justify-content-center mb-md-0 mb-5 vitamin-block bg-transparent">
                        <h2>{_("VITAMIN.HEAD4")}</h2>
                        <p className="mb-md-0 mb-5">{_("VITAMIN.DESC4")}</p>
                    </div>
                    <div className="col-md col-12 vitamin-block bg-blue">
                        <img src="/img/page/vitamin/without-login-icon.svg" className="m-0 p-0 pe-4 pe-sm-0" alt="Apple Health" height={100} width={100} />
                        <h3>{_("VITAMIN.HEAD5")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC5")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row gap-5 vitamin-block bg-green">
                    <div className="col-md col-12 col-lg-4">
                        <img src="/img/page/vitamin/vitamin-bottle.svg" className="p-0 px-5 px-sm-0 ms-0 vitamin-img-50" alt="Apple Health" height="auto" width="auto" />
                    </div>
                    <div className="col-md col-12">
                        <h3>{_("VITAMIN.HEAD6")}</h3>
                        <p className="mt-auto">{_("VITAMIN.DESC6", { count_tries: 20 })}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row vitamin-block bg-blue">
                    <div className="col">
                        <h3>{_("VITAMIN.HEAD7")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC7")}</p>
                        <img src="/img/page/vitamin/vitamin-mockups.png" alt={_("VITAMIN.HEAD7")} className="p-0 vitamin-img-100" />
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col vitamin-text-block">
                        <p>{_("VITAMIN.DESC8_1")}</p>
                        <p>{_("VITAMIN.DESC8_2")}</p>
                        <p>{_("VITAMIN.DESC8_3")}</p>
                        <p>{_("VITAMIN.DESC8_4")}</p>
                    </div>
                </div>
            </section>

            <div className="vitamins-list">
                {
                    Object
                        .entries(vitamins)
                        .map(([vitName, vitList]) => (
                            <section key={"vitamins-list" + vitName}>
                                <div className="row">
                                    <div className="col-12 py-3 px-5 vit-head">{_("VITAMIN." + vitName + ".NAME")}</div>
                                </div>

                                {
                                    vitList.map(vit => <VitaminItem key={vit} id={vit} />)
                                }
                            </section>
                        ))
                }

            </div>

            <section>
                <div className="row vitamin-text-block">
                    <div className="col">
                        <p className="ms-mb-8">{_("VITAMIN.FOOT")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                            target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

        </div>
        <Footer />
    </>
}