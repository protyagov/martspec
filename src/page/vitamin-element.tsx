import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";

interface VitaminElementProps {
    id: string;
};

interface VitaminElement {
    [key: string]: any;
    LOGO: string;
    HEX: string;
    TYPE: "VITAMIN_FAT" | "VITAMIN_WATER" | "MINERAL" | null;
    DOSE_RDV: { [key: string]: Array<number> };
    DOSE_UL: { [key: string]: Array<number> | null };
    FOOD_100G: { [key: string]: number };
    UNIT: "MCG" | "MG" | null;
};


const VIT_AGE = ["0_1", "1_3", "4_8", "9_13", "14_18", "19_50", "51_70", "71", "PREG_14_18", "PREG_19_50", "LACT_14_18", "LACT_19_50"];

export default function VitaminElement(props: VitaminElementProps) {
    const id = props.id.toUpperCase();

    const [data, setData] = React.useState<VitaminElement | null>(null);    

    React.useEffect(() => {
        const fetchElementData = async (): Promise<void> => {
            const response = await fetch("/data/vitamins.json");            
            if (!response.ok) return;
            
            await response
                .json()
                .then((fetched: {[key: string]: any}) => setData(fetched[id]));
        };
        fetchElementData();
    }, []);

    const getNameWithType = (type: VitaminElement["TYPE"]) => {
        switch (type) {
            case "VITAMIN_FAT":
            case "VITAMIN_WATER":
                return _("VITAMIN.CONTENT.GROUP." + data.TYPE) + " " + _("VITAMIN." + id + ".HEAD");
            case "MINERAL":
                return _("VITAMIN." + id + ".NAME");
            default:
                return;
        }
    };   
    
    const getListFromCount = (NAME: string) => {
        return (
            [
                ...Array(data[NAME + "_COUNT"])
                .keys()
            ]
                .map(n => (
                    <li key={`${id}-${NAME}-${n}`}>
                        {_(`VITAMIN.${id}.${NAME}_${n + 1}`)}
                    </li>
                ))
        )
    };

    const getValueForAmount = (idx: number, amount: number) => {        
        if (idx) return amount;

        switch (amount) {
            case 40000: return 1300;
            case 39.3: return 9;
            case 60000: return 3500;
            case 1640: return 270;
            case 200: return 54;
            case 574: return 290;
            default: return amount;
        };
    };

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 vitamin-element">
            {
                data && <>
                    <div className="header py-5 mt-0" style={{ "--vitamin-bg-color": "#" + data.HEX } as React.CSSProperties}>
                        <section>
                            <div className="ms-s-offset text-center">
                                <div className="row">
                                    <div className="col">
                                        <h1 className="pt-5">{ getNameWithType(data.TYPE) }</h1>
                                        <img src={data.LOGO} className="ms-base-image" alt={_("VITAMIN." + id + ".NAME")} height={512} width={512} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section>
                        <div className="row mt-5">
                            <div className="col">
                                <h2>{ _("VITAMIN.CONTENT.FUNC") }</h2>
                                <p>{ _("VITAMIN." + id + ".FUNC") }</p>
                            </div>
                        </div>
                        {
                            data.TYPE && (
                                <div className="row">
                                    <div className="col">
                                    <div className="vit-type">
                                        <button data-bs-toggle="collapse" data-bs-target="#vit-type-collapse" aria-expanded="false" aria-controls="vit-type-collapse">{ _("VITAMIN." + data.TYPE + ".SHORT") }</button>
                                            <div className="collapse collapse-content" id="vit-type-collapse">
                                                <div className="content-padding">
                                                    { _("VITAMIN." + data.TYPE + ".DESC") }
                                                </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        }
                    </section>

                    <section>
                        <div className="row">
                            <div className="col-md col-12 vit-def">
                                <h3>{_("VITAMIN.CONTENT.DEF")}</h3>
                                <ul>
                                    { getListFromCount("DEF") }
                                </ul>
                            </div>
                            <div className="col-md col-12 vit-over">
                                <h3>{_("VITAMIN.CONTENT.OVER")}</h3>
                                <ul>
                                    { getListFromCount("OVER") }
                                </ul>
                            </div>
                        </div>
                    </section>

                    {
                        [
                            "DOSE_RDV",
                            "DOSE_UL"
                        ].map(SECTION => {
                                return data[SECTION] && (
                                    <section key={SECTION}>
                                        <div className="row">
                                            <div className="col d-flex align-items-center">
                                                <img src={"/img/vitamin_" + SECTION + "_icon.png"} className="p-0 mt-3 ms-0 me-3" alt={_("VITAMIN.CONTENT." + SECTION)} height="40px" width="40px" />
                                                <h2>{ _("VITAMIN.CONTENT." + SECTION) }</h2>
                                            </div>
                                        </div>
                                        <table className="table table-bordered vit-table">
                                            <thead>
                                                <tr>
                                                    <td style={{ "width": "50%" }}>{ _("VITAMIN.CONTENT.AGE.HEAD") }</td>
                                                    <td>{ _("VITAMIN.CONTENT.MALE") }</td>
                                                    <td>{ _("VITAMIN.CONTENT.FEMA") }</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    VIT_AGE.map((age, idx) => {
                                                        return <tr key={SECTION + "-" + age}>
                                                            <td>{ _("VITAMIN.CONTENT.AGE." + age) }</td>
                                                            <td>{data[SECTION].MALE[idx] ? (data[SECTION].MALE[idx] + " " + _("VITAMIN.CONTENT." + data.UNIT)) : ""}</td>
                                                            <td>{data[SECTION].FEMA[idx] ? (data[SECTION].FEMA[idx] + " " + _("VITAMIN.CONTENT." + data.UNIT)) : "" }</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </section>
                                )
                            }
                        )
                    }

                    <section>
                        <div className="row">
                            <div className="col">
                                <h2>{_("VITAMIN.CONTENT.FOOD_100G", { unit: _("VITAMIN.CONTENT." + data.UNIT) })}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table vit-table vit-charts">
                                    <tbody>
                                        {
                                            Object
                                                .entries(data.FOOD_100G)
                                                .map(([food, g], idx, arr) => {
                                                    let max = getValueForAmount(0, arr[0][1]); 

                                                    return <tr key={"FOOD_100G-" + food}>
                                                        <td className="pe-5">{_("VITAMIN.CONTENT." + food)}</td>
                                                        <td className="chart-container">
                                                            <div className="chart" style={
                                                                { width: +(100 * getValueForAmount(idx, g) / max) + "%" }
                                                            }></div>
                                                        </td>
                                                        <td className="ps-5">{ g }</td>
                                                    </tr>
                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row">
                            <div className="col vit-facts">
                                <h2>{_("VITAMIN.CONTENT.FACTS")}</h2>
                                <ul className="p-0">
                                    { getListFromCount("FACT") }
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row">
                            <div className="col text-center">
                                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                                    target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple mt-5"
                                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                                </a>
                            </div>
                        </div>
                    </section>
                </>
            }
        </div>

        <Footer />
    </>
}