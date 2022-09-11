import * as React from "react";
import _, {Locale} from "src/i18n/locale";
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P5BodyZinc() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">``
            <img src="/img/bodyzinc.svg" className="mx-auto" alt={_("MAIN.P5.IMG")} height={512} width={512} />
            <h1 className="text-center pt-3 ">{_("MAIN.P5.HEAD")}</h1>


            <section>
                <p className="mt-4">{_("PRODUCT.P5.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1547395353`}
                    target="_blank" title={_("MAIN.P5.DWN")} className="float-center" >
                    {/*@ts-ignore*/}
                    <span className="ms-btn-apple" style={{backgroundImage: 'url(/img/apple_btn/'+Locale.language+'.svg)'}}/>
                </a>
            </section>


            <section>
                <h4>{_("PRODUCT.P5.HEAD1")}</h4>
                <p className="mt-3">
                    {_("PRODUCT.P5.DESC1")}
                    <a href="https://www.healthline.com/nutrition/zinc" target="_blank">
                        <br /><small><i>{_("PRODUCT.P5.LINK1")}</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P5.HEAD2")}</h4>
                <p className="mt-3">
                    {_("PRODUCT.P5.DESC2")}
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4413488/" target="_blank">
                        <br /><small><i>Indian J Plast Surg. 2015 Jan-Apr; 48(1): 4–16.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("PRODUCT.P5.HEAD3")}</h4>
                <p className="mt-3">
                    {_("PRODUCT.P5.DESC3")}
                    <a href="https://www.ncbi.nlm.nih.gov/books/NBK493173/" target="_blank">
                        <br /><small><i>Chronic Inflammation</i></small>
                    </a>
                </p>
            </section>
        </div>


        <div className="pb-5 text-center">
            <IronImage imgLo="/img/p_zinc_screens.64.webp" imgHi="/img/p_zinc_screens.512.webp" text={_("MAIN.P4.IMG")} h={512} w={512} />
        </div>

        <Footer />
    </>
}
