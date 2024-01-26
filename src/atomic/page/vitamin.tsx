import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import VitaminItem from "src/atomic/molecule/vitamin-item";
import PageHeader from "../molecule/page-header";
import ImageI18N from "../atom/img-i18n";
import CallToAction from "src/atomic/organism/call-to-action";
import IconTitleTextList from "../organism/icon-title-text-list"
import { IconTitleText } from "../molecule/icon-title-text-elem"

const vitamins = {
    VITAMIN_FAT: ["VITAMIN_A", "VITAMIN_D", "VITAMIN_E", "VITAMIN_K"],
    VITAMIN_WATER: ["VITAMIN_B1", "VITAMIN_B2", "VITAMIN_B3", "VITAMIN_B5", "VITAMIN_B6", "VITAMIN_B7", "VITAMIN_B9", "VITAMIN_B12", "VITAMIN_C"],
    MINERAL: ["CALCIUM", "CHLORIDE", "CHROME", "COPPER", "IODINE", "IRON", "MAGNESIUM", "MANGANESE", "MOLYBDENUM", "PHOSPHORUS", "POTASSIUM", "SELENIUM", "SODIUM", "ZINC"]
};

export default function Vitamin() {
    // const bgColor={background: "#1FF"}
    // <--
    const iconTitleTextListItems: Array<IconTitleText> = [
        {
            icon: "/img/atom/icons/icon-defense.svg",
            title: _("VITAMIN.LIST4.LI1_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI1_TEXT"),
        },
        {
            icon: "/img/atom/icons/icon-sync.svg",
            title: _("VITAMIN.LIST4.LI2_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI2_TEXT"),
        },
        {
            icon: "/img/atom/icons/icon-no-auth.svg",
            title: _("VITAMIN.LIST4.LI3_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI3_TEXT"),
        },
        {
            icon: "/img/atom/icons/icon-no-ads.svg",
            title: _("VITAMIN.LIST4.LI4_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI4_TEXT"),
        },
        {
            icon: "/img/atom/icons/icon-bell.svg",
            title: _("VITAMIN.LIST4.LI5_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI5_TEXT"),
        },
        // TODO: need to add class "no-filter" for apple icon
        {
            icon: "/img/atom/icons/icon-apple-health.svg",
            title: _("VITAMIN.LIST4.LI6_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI6_TEXT"),
        },
    ]
    // -->
    return <>
        <NavigationBar />

        <div className="ms-base-page ms-base-new vitamin">

            <PageHeader
                title="VITAMIN.HEAD"
                subtitleLevel1="VITAMIN.ABOUT_1"
                subtitleLevel2="VITAMIN.ABOUT_2"
                appId={1519596234}
                appDownloadTitle="VITAMIN.DWN"
                imgSrc="/img/page/vitamin/vitamin.webp"
                imgAlt="VITAMIN.IMG"
                imgH={512}
                imgW={512}
            />

            <section>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="block bg-blue">
                            <h3>{_("VITAMIN.LIST1.LI1_HEAD")}</h3>
                            <p>{_("VITAMIN.LIST1.LI1_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block bg-green">
                            <h3>{_("VITAMIN.LIST1.LI2_HEAD")}</h3>
                            <p>{_("VITAMIN.LIST1.LI2_TEXT")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block bg-blue">
                            <h3>{_("VITAMIN.LIST1.LI3_HEAD")}</h3>
                            <p>{_("VITAMIN.LIST1.LI3_TEXT")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>{_("VITAMIN.HEAD2")}</h2>
                        <p className="mb-4">{_("VITAMIN.DESC2_1")}</p>
                        <p className="mb-4">{_("VITAMIN.DESC2_2")}</p>
                        <p className="mb-0">{_("VITAMIN.DESC2_3")}</p>
                    </div>
                    <div className="col-lg-6">
                        <ImageI18N src="/img/page/vitamin/vitamin-screen-desc-en.webp" w={390} h={515} cls="ms-base-image mt-mob-xs" alt={_("VITAMIN.ALT1")} />
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <ImageI18N src="/img/page/vitamin/vitamin-screen-edit-en.webp" w={487} h={515} cls="ms-base-image d-none d-lg-block" alt={_("VITAMIN.ALT4")} />
                    </div>
                    <div className="col-lg-6">
                        <h2>{_("VITAMIN.HEAD3")}</h2>
                        <p>{_("VITAMIN.DESC3_1")}</p>
                        <ImageI18N src="/img/page/vitamin/vitamin-screen-edit-en.webp" w={487} h={515} cls="ms-base-image d-block d-lg-none mb-mob-xs" alt={_("VITAMIN.ALT4")} />
                        <h3>{_("VITAMIN.DESC3_2")}</h3>
                        <ul className="checkmark-list">
                            <li>{_("VITAMIN.LIST3.LI1_TEXT")}</li>
                            <li>{_("VITAMIN.LIST3.LI2_TEXT")}</li>
                            <li>{_("VITAMIN.LIST3.LI3_TEXT")}</li>
                            <li>{_("VITAMIN.LIST3.LI4_TEXT")}</li>
                            <li>{_("VITAMIN.LIST3.LI5_TEXT")}</li>
                            <li>{_("VITAMIN.LIST3.LI6_TEXT")}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gray">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h2>{_("VITAMIN.HEAD4")}</h2>
                    </div>
                    <div className="col-12">
                        <IconTitleTextList items={iconTitleTextListItems} />
                        <hr />
                        <ul className="list-with-icons">
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-defense.svg" alt={_("VITAMIN.ALT5_1")} /></div>
                                <div>
                                    <h3>{_("VITAMIN.LIST4.LI1_HEAD")}</h3>
                                    <p>{_("VITAMIN.LIST4.LI1_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-sync.svg" alt={_("VITAMIN.ALT5_2")} /></div>
                                <div>
                                    <h3>{_("VITAMIN.LIST4.LI2_HEAD")}</h3>
                                    <p>{_("VITAMIN.LIST4.LI2_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-no-auth.svg" alt={_("VITAMIN.ALT5_3")} /></div>
                                <div>
                                    <h3>{_("VITAMIN.LIST4.LI3_HEAD")}</h3>
                                    <p>{_("VITAMIN.LIST4.LI3_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-no-ads.svg" alt={_("VITAMIN.ALT5_4")} /></div>
                                <div>
                                    <h3>{_("VITAMIN.LIST4.LI4_HEAD")}</h3>
                                    <p>{_("VITAMIN.LIST4.LI4_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon"><img src="/img/atom/icons/icon-bell.svg" alt={_("VITAMIN.ALT5_4")} /></div>
                                <div>
                                    <h3>{_("VITAMIN.LIST4.LI5_HEAD")}</h3>
                                    <p>{_("VITAMIN.LIST4.LI5_TEXT")}</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon no-filter"><img src="/img/atom/icons/icon-apple-health.svg" alt={_("VITAMIN.ALT5_4")} /></div>
                                <div>
                                    <h3>{_("VITAMIN.LIST4.LI6_HEAD")}</h3>
                                    <p>{_("VITAMIN.LIST4.LI6_TEXT")}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gray bg-merge-top">
                <div className="row mb-0">
                    <div className="col-12">
                        <div className="block bg-green">
                            <h2 className="mb-6">{_("VITAMIN.HEAD5")}</h2>
                            <ul className="counters-list">
                                <li>
                                    <h1>{_("VITAMIN.LIST5.LI1_HEAD")}</h1>
                                    <p>{_("VITAMIN.LIST5.LI1_TEXT")}</p>
                                </li>
                                <li>
                                    <h1>{_("VITAMIN.LIST5.LI2_HEAD")}</h1>
                                    <p>{_("VITAMIN.LIST5.LI2_TEXT")}</p>
                                </li>
                                <li>
                                    <h1>{_("VITAMIN.LIST5.LI3_HEAD")}</h1>
                                    <p>{_("VITAMIN.LIST5.LI3_TEXT")}</p>
                                </li>
                                <li>
                                    <h1>{_("VITAMIN.LIST5.LI4_HEAD")}</h1>
                                    <p>{_("VITAMIN.LIST5.LI4_TEXT")}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vitamins-list">
                <div className="row">
                {
                    Object
                        .entries(vitamins)
                            .map(([vitGroupName, vitList]) => (
                            <div key={"vitamins-group-" + vitGroupName} className="col-12 vit-group">
                                <div className="py-3 px-5 vit-group-name">{_("VITAMIN." + vitGroupName + ".NAME")}</div>
                                {
                                    vitList.map(vit => <VitaminItem key={vit} id={vit} />)
                                }
                            </div>
                        ))
                }
                </div>
            </section>

            <section>
                <CallToAction
                        // bgColor={bg_color}
                        title={_("VITAMIN.HEAD6")}
                        subtitle={_("VITAMIN.DESC6")}
                        appId={1519596234}
                        appDownloadTitle={_("VITAMIN.DWN")}
                        imgSrc="/img/org/call-to-action/vitamin/vitamin-screen-app-en.webp"
                        imgAlt={_("VITAMIN.ALT4")}
                        />
                        {/* <div>
                            <h2>{_("VITAMIN.HEAD6")}</h2>
                            <p className="flex-grow-1">{_("VITAMIN.DESC6")}</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                                target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple mt-5 mx-lg-0 mx-auto"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <ImageI18N src="/img/page/vitamin/vitamin-screen-app-en.webp" w={400} h={400} cls="ms-base-image ms-lg-auto me-lg-0" alt={_("VITAMIN.ALT4")} /> */}
                    {/* </div> */}
                {/* </div> */}
            </section>

        </div>
        <Footer />
    </>
}