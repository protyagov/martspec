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
                <h4>{_("VITAMIN.HEAD1")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC1")}</p>

            </section>

            <section>
                <h4>{_("VITAMIN.HEAD2")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC2")}
                    <a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-017-4888-1" target="_blank">
                        <small><i>{_("BTN.SRC2")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD3")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC3")}
                    <a href="https://ods.od.nih.gov/factsheets/VitaminA-Consumer/" target="_blank">
                        <small><i>{_("BTN.SRC1")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD4")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC4")}
                    <a href="https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-c/" target="_blank">
                        <i><small>{_("BTN.FACT")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("VITAMIN.HEAD5")}</h4>
                <p className="mt-3">{_("VITAMIN.DESC5")}
                    <a href="https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/" target="_blank">
                        <i><small>{_("BTN.MORE")}.</small></i>
                    </a>
                </p>
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