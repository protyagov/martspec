import * as React from "react";
import _, {Locale} from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";

export default function P2bodymass() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <img src="/img/mass.svg" className="mx-auto" alt={_("MAIN.P2.IMG")} height={512} width={512} />
            <h1 className="text-center pt-3 ">{_("MAIN.P2.HEAD")}</h1>


            <section>
                <p className="mt-4">{_("PRODUCT.P2.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1507588203`}
                    target="_blank" title={_("MAIN.P3.DWN")} className="apple-button-link" >
                    {/*@ts-ignore*/}
                    <span className="ms-btn-apple" style={{backgroundImage: 'url(/img/apple_btn/'+Locale.language+'.svg)'}}/>
                </a>
            </section>

            <section>
                <h4>{_("PRODUCT.P2.HEAD1")}</h4>
                <p className="mt-3">{_("PRODUCT.P2.DESC1")}</p>
            </section>

            <section>
                <h4>{_("PRODUCT.P2.HEAD2")}</h4>
                <p className="mt-3">{_("PRODUCT.P2.DESC2")}</p>
            </section>

            <section>
                <h4>{_("PRODUCT.P2.HEAD3")}</h4>
                <p className="mt-3">{_("PRODUCT.P2.DESC3")}</p>
            </section>

            <section>
                <h4>{_("PRODUCT.P2.HEAD4")}</h4>
                <p className="mt-3">
                    <ul>
                        <li>{_("PRODUCT.P2.DESC4_1")}</li>
                        <li>{_("PRODUCT.P2.DESC4_2")}</li>
                        <li>{_("PRODUCT.P2.DESC4_3")}</li>
                        <li>{_("PRODUCT.P2.DESC4_4")}</li>
                        <li>{_("PRODUCT.P2.DESC4_5")}</li>
                        <li>{_("PRODUCT.P2.DESC4_6")}</li>
                        <li>{_("PRODUCT.P2.DESC4_7")}</li>
                    </ul>
                </p>
            </section>


        </div>


        <div className="pb-5 text-center">
            <IronImage imgLo="/img/p_mass_screens.64.webp" imgHi="/img/p_mass_screens.512.webp" text={_("MAIN.P2.IMG")} h={512} w={512} />
        </div>
        <Footer />
    </>
}