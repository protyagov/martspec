import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import ContentsList from "src/part/contents-list";

export default function Productivity() {
    const LIST2_COUNT = 8;
    const LIST5_COUNT = 7;
    const LIST6_1_COUNT = 10;
    const LIST6_2_COUNT = 5;

    const CONTENTS_COUNT = 6;

    const [contentsIDs, setContentsIDs] = React.useState([]);

    const useContentsIDs = (contentsCount: number) => {
        const idFromHeading = (heading: string) => heading.split(" ").join("-").toLowerCase();

        React.useLayoutEffect(() => {
            for (let idx = 1; idx < contentsCount; ++idx) {
                setContentsIDs(currentIDs => [...currentIDs, idFromHeading(_("PRODUCTIVITY.HEAD" + idx))]);
            };
        }, []);
    };

    useContentsIDs(CONTENTS_COUNT);

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 emotion personal-trait" data-bs-spy="scroll" data-bs-target="#contents-list" data-bs-offset="0" tabIndex={0}>

            <section className="pb-3 text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/productivity.webp" className="ms-base-image" alt={_("PRODUCTIVITY.IMG")} height={512} width={512} />
                        <h1 className="text-center pt-3 mb-5">{_("PRODUCTIVITY.HEAD")}</h1>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("PRODUCTIVITY.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>    
                <div className="row">
                    <div className="col-lg-8">
                        <h2 id={contentsIDs[0]}>{_("PRODUCTIVITY.HEAD1")}</h2>
                        <p>{_("PRODUCTIVITY.DESK1_1")}</p>
                        <p>{_("PRODUCTIVITY.DESK1_2")}</p>

                        <h2 id={contentsIDs[1]}>{_("PRODUCTIVITY.HEAD2")}</h2>
                        <p>{_("PRODUCTIVITY.DESK2")}</p>
                        <ul className="ms-5">
                            {
                                [...Array(LIST2_COUNT)].map((li, idx) => (
                                    <li key={"LIST2_LI" + ++idx} className="mb-0">
                                        <b>{_("PRODUCTIVITY.LIST2.LI" + idx + "_HEAD")}</b>
                                        <span>{" "} {_("PRODUCTIVITY.LIST2.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>

                        <img src="/img/productivity_img_1.webp" className="img-fluid" alt="" />

                        <h2 id={contentsIDs[2]}>{_("PRODUCTIVITY.HEAD3")}</h2>
                        <p>{_("PRODUCTIVITY.DESK3_1")}</p>
                        <p>{_("PRODUCTIVITY.DESK3_2")}</p>
                        <p>{_("PRODUCTIVITY.DESK3_3")}</p>
                        <p>{_("PRODUCTIVITY.DESK3_4")}</p>

                        <h2 id={contentsIDs[3]}>{_("PRODUCTIVITY.HEAD4")}</h2>
                        <p>{_("PRODUCTIVITY.DESK4_1")}</p>
                        <p>{_("PRODUCTIVITY.DESK4_2")}</p>
                        <p>{_("PRODUCTIVITY.DESK4_3")}</p>
                
                        <img src="/img/productivity_img_2.webp" className="img-fluid" alt="" />

                        <h2 id={contentsIDs[4]}>{_("PRODUCTIVITY.HEAD5")}</h2>
                        <p>{_("PRODUCTIVITY.DESK5_1")}</p>
                        <ul className="ms-5">
                            {
                                [...Array(LIST5_COUNT)].map((li, idx) => (
                                    <li key={"LIST5_LI" + ++idx} className="mb-0">
                                        <b>{_("PRODUCTIVITY.LIST5.LI" + idx + "_HEAD")}</b>
                                        <span>{" "} {_("PRODUCTIVITY.LIST5.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <p>{_("PRODUCTIVITY.DESK5_2")}</p>

                        <h2 id={contentsIDs[5]}>{_("PRODUCTIVITY.HEAD6")}</h2>
                        <p>{_("PRODUCTIVITY.DESK6_1")}</p>
                        <ul className="ms-5">
                            {
                                [...Array(LIST6_1_COUNT)].map((li, idx) => (
                                    <li key={"LIST6_1_LI" + ++idx} className="mb-0">
                                        <span>{" "} {_("PRODUCTIVITY.LIST6_1.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <p>{_("PRODUCTIVITY.DESK6_2")}</p>
                        <ul className="ms-5">
                            {
                                [...Array(LIST6_2_COUNT)].map((li, idx) => (
                                    <li key={"LIST6_2_LI" + ++idx} className="mb-0">
                                        <span>{" "} {_("PRODUCTIVITY.LIST6_2.LI" + idx + "_TEXT")}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <p>{_("PRODUCTIVITY.DESK6_3")}</p>
                    </div>

                    <div className="col-lg-4">
                        <div className="contents-list">
                            <h3>{_("PRODUCTIVITY.CONTENTS")}</h3>
                            <ContentsList PAGE="PRODUCTIVITY" contentsIDs={contentsIDs} />
                        </div>
                    </div>

                </div>
            </section>
            
        </div>

        <Footer />
    </>
}
