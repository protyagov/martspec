import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";


export default function P3LogVitamin() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <img src="/img/vitamin.svg" className="img-fluid" alt={_("MAIN.P3.IMG")} height={512} width={512} />
            <h1 className="text-center pt-3">{_("MAIN.P3.HEAD")}</h1>

            <section>
                <p className="mt-4">{_("PRODUCT.P3.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1519596234`}
                    target="_blank" title={_("MAIN.P3.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD1")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC1")}</p>

            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD2")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC2")}
                    <a href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-017-4888-1" target="_blank">
                        <small><i>{_("BTN.SRC2")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD3")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC3")}
                    <a href="https://ods.od.nih.gov/factsheets/VitaminA-Consumer/" target="_blank">
                        <small><i>{_("BTN.SRC1")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD4")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC4")}
                    <a href="https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-c/" target="_blank">
                        <i><small>{_("BTN.FACT")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD5")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC5")}
                    <a href="https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/" target="_blank">
                        <i><small>{_("BTN.MORE")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD6")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC6")}
                    <a href="https://www.mayoclinic.org/drugs-supplements-vitamin-e/art-20364144" target="_blank">
                        <i><small>{_("BTN.SRC1")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD7")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC7")}
                    <a href="https://www.mountsinai.org/health-library/supplement/vitamin-b12-cobalamin" target="_blank">
                        <i><small>{_("BTN.SRC2")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD8")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC8")}
                    <a href="https://www.healthline.com/health/biotin-hair-growth" target="_blank">
                        <i><small>{_("BTN.MORE")}.</small></i>
                    </a>
                </p>
            </section>


            <section>
                <h4>{_("PRODUCT.P3.HEAD9")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC9")}
                    <a href="https://ods.od.nih.gov/factsheets/Folate-Consumer/" target="_blank">
                        <i><small>{_("BTN.SRC1")}.</small></i>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P3.HEAD0")}</h4>
                <p className="mt-3">{_("PRODUCT.P3.DESC0")}
                    <a href="https://www.mayoclinic.org/drugs-supplements-niacin/art-20364984" target="_blank">
                        <i><small>{_("BTN.FACT")}.</small></i>
                    </a>
                </p>
            </section>



            <IronImage imgLo="/img/p_vitamin_screens.64.webp" imgHi="/img/p_vitamin_screens.512.webp" text={_("MAIN.P3.IMG")} h={560} w={1458} />


        </div>
        <Footer />
    </>
}