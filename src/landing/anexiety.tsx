import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";


export default function Anexiety() {
    const LIST2_COUNT = 3;
    const LIST3_COUNT = 9;
    const LIST4_COUNT = 6;
    

    const CONTENTS_COUNT = 5;

    document.getElementById("root").setAttribute("data-bs-spy", "scroll");
    document.getElementById("root").setAttribute("data-bs-target", "#contents-list");

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 emotion personal-trait">

            <section className="pb-3 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/anexiety/anexiety.webp" className="ms-base-image" alt={_("ANEXIETY.IMG")} height={390} width={421} />
                        <h1 className="text-center pt-3 mb-5">{_("ANEXIETY.HEAD")}</h1>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("ANEXIETY.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>    
                <div className="row">
                    <div className="col-lg-8">
                        <div id="para-1" className="content-wrapper">
                            <h2>{_("ANEXIETY.HEAD1")}</h2>
                            <p>{_("ANEXIETY.DESK1_1")}</p>
                            <p>{_("ANEXIETY.DESK1_2")}</p>
                            <p>{_("ANEXIETY.DESK1_3")}</p>
                        </div>

                        <div id="para-2" className="content-wrapper">
                            <h2>{_("ANEXIETY.HEAD2")}</h2>
                            <p>{_("ANEXIETY.DESK2")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST2_COUNT)].map((li, idx) => (
                                        <li key={"LIST2_LI" + ++idx} className="mb-0">
                                            <b>{_("ANEXIETY.LIST2.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("ANEXIETY.LIST2.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <img src="/img/anexiety_img_1.webp" className="img-fluid" alt={_("ANEXIETY.ALT2")} width={758} height={450} />
                        </div>

                        <div id="para-3" className="content-wrapper">
                            <h2>{_("ANEXIETY.HEAD3")}</h2>
                            <p>{_("ANEXIETY.DESK3_1")}</p>
                            <p>{_("ANEXIETY.DESK3_2")}</p>
                            <p>{_("ANEXIETY.DESK3_3")}</p>
                            <p>{_("ANEXIETY.DESK3_4")}</p>
                            <p>{_("ANEXIETY.DESK3_5")}</p>
                            <p>{_("ANEXIETY.DESK3_6")}</p>
                            <p>{_("ANEXIETY.DESK3_7")}</p>
                            <p>{_("ANEXIETY.DESK3_8")}</p>
                            <p>{_("ANEXIETY.DESK3_9")}</p>
                        </div>

                        <div id="para-4" className="content-wrapper">
                            <h2>{_("ANEXIETY.HEAD4")}</h2>
                            <p>{_("ANEXIETY.DESK4_1")}</p>
                            <p>{_("ANEXIETY.DESK4_2")}</p>
                            <p>{_("ANEXIETY.DESK4_3")}</p>
                            <img src="/img/anexiety_img_2.webp" className="img-fluid" alt={_("ANEXIETY.ALT4")} width={758} height={450}/>
                        </div>
                
                        <div id="para-5" className="content-wrapper">
                            <h2>{_("ANEXIETY.HEAD5")}</h2>
                            <p>{_("ANEXIETY.DESK5_1")}</p>
                            <ul className="ms-5">
                                {
                                    [...Array(LIST4_COUNT)].map((li, idx) => (
                                        <li key={"LIST5_LI" + ++idx} className="mb-0">
                                            <b>{_("ANEXIETY.LIST5.LI" + idx + "_HEAD")}</b>
                                            <span>{" "} {_("ANEXIETY.LIST5.LI" + idx + "_TEXT")}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p>{_("ANEXIETY.DESK5_2")}</p>
                        </div>
                        
                    </div>
                 
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}