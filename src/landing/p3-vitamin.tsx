import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";
import VitaminItem from "src/part/vitaminItem";

const vitamins = {
    VITAMIN_FAT: ["VIT_A", "VIT_D", "VIT_E", "VIT_K"],
    VITAMIN_WATER: ["VIT_B1", "VIT_B2", "VIT_B3", "VIT_B5", "VIT_B6", "VIT_B7", "VIT_B9", "VIT_B12", "VIT_C"],
    MINERAL: ["MIN_CA", "MIN_CL", "MIN_CR", "MIN_CU", "MIN_I", "MIN_FE", "MIN_MG", "MIN_MN", "MIN_MO", "MIN_P", "MIN_K", "MIN_SE", "MIN_NA", "MIN_ZN"]
};

export default function P3LogVitamin() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 vitamin">
            <img src="/img/vitamin.svg" className="img-fluid mb-0" alt={_("VITAMIN.IMG")} height={512} width={512} />

            <section className="text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center pt-3 mb-5">{_("VITAMIN.HEAD")}</h1>
                        <h3>{_("VITAMIN.ABOUT_1")}</h3>
                        <h3>{_("VITAMIN.ABOUT_2")}</h3>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                            target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="row gap-5">
                    <div className="col-md col-12 vitamin-block bg-blue">
                        <img src="/img/apple_health_icon.svg" className="m-0 p-0 pe-4 pe-sm-0" alt="Apple Health" height={100} width={100} />
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
                        <img src="/img/vitamin_minerals_img.svg" className="p-0 float-end vitamin-img-50" alt="Apple Health" height="auto" width="100%" />
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
                        <img src="/img/without_login_icon.svg" className="m-0 p-0" alt="Apple Health" height={100} width={100} />
                        <h3>{_("VITAMIN.HEAD5")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC5")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row gap-5 vitamin-block bg-green">
                    <div className="col-md col-12">
                        <img src="/img/vitamin_vitamins_img.svg" className="p-0 ms-0 vitamin-img-50" alt="Apple Health" height="auto" width="100%" />
                    </div>
                    <div className="col-md col-12">
                        <h3>{_("VITAMIN.HEAD6")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC6")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row vitamin-block bg-blue">
                    <div className="col">
                        <h3>{_("VITAMIN.HEAD7")}</h3>
                        <p className="mt-3">{_("VITAMIN.DESC7")}</p>
                        <img src="/img/vitamin_mockups.png" alt={_("VITAMIN.HEAD7")} className="p-0 vitamin-img-100" />
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
                                    <div className="col-12 py-3 px-5 vit-head">{_("VITAMIN." + vitName)}</div>
                                </div>

                                {
                                    vitList.map(vit => <VitaminItem key={vit} name={vit} />)
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