import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import ToggleButton from "src/part/toggle-button";

interface VitaminElementProps {
    id: string;
};

interface VitaminElement {
    [key: string]: any;
    LOGO: string;
    HEX: string;
    TYPE: "VITAMIN_FAT" | "VITAMIN_WATER" | "MINERAL" | null;
    DOSE_RDV: { [key: string]: Array<number> };
    DOSE_UL: { [key: string]: Array<number> | null }
    FOOD_100G: { [key: string]: number };
};


const VIT_AGE = ["0_1", "1_3", "4_8", "9_13", "14_18", "19_50", "51_70", "71", "PREG_14_18", "PREG_19_50", "LACT_14_18", "LACT_19_50"];

export default function VitaminElement(props: VitaminElementProps) {
    const elementId = props.id.toUpperCase();

    const [elementData, setElementData] = React.useState<VitaminElement | null>(null);    

    React.useEffect(() => {
        const fetchElementData = async (): Promise<void> => {
            const response = await fetch("/data/vitamins.json");            
            if (!response.ok) return;
            
            await response
                .json()
                .then((data: {[key: string]: any}) => setElementData(data[elementId]));
        };
        fetchElementData();
    }, []);

    const getElementFullName = (type: VitaminElement["TYPE"]) => {
        switch (type) {
            case "VITAMIN_FAT":
            case "VITAMIN_WATER":
                return _("VITAMIN.CONTENT.GROUP." + elementData.TYPE) + " " + _("VITAMIN." + elementId + ".HEAD");
            case "MINERAL":
                return _("VITAMIN." + elementId + ".NAME");
            default:
                return;
        }
    };   
    
    const getListFromCount = (NAME: string) => {
        return (
            [
                ...Array(elementData[NAME + "_COUNT"])
                .keys()
            ]
                .map(n => (
                    <li key={`${elementId}-${NAME}-${n}`}>
                        {_(`VITAMIN.${elementId}.${NAME}_${n + 1}`)}
                    </li>
                ))
        )
    };

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 vitamin-element">
            {
                elementData && <>
                    <div className="header py-5 mt-0" style={{ "--vitamin-bg-color": "#" + elementData.HEX } as React.CSSProperties}>
                        <section>
                            <div className="ms-s-offset text-center">
                                <div className="row">
                                    <div className="col">
                                        <h1 className="pt-5">{ getElementFullName(elementData.TYPE) }</h1>
                                        <img src={elementData.LOGO} className="ms-base-top-image" alt={_("VITAMIN." + elementId + ".NAME")} height={512} width={512} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col">
                                <h2>{ _("VITAMIN.CONTENT.FUNC") }</h2>
                                <p>{ _("VITAMIN." + elementId + ".FUNC") }</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ToggleButton cls="vit-type"
                                    btnContent={ _("VITAMIN." + elementData.TYPE + ".SHORT") }
                                    toggledContent={ _("VITAMIN." + elementData.TYPE + ".DESC") } />
                            </div>
                        </div>
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
                                return elementData[SECTION] && (
                                    <section>
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
                                                        return <tr>
                                                            <td>{ _("VITAMIN.CONTENT.AGE." + age) }</td>
                                                            <td>{ elementData[SECTION].MALE[idx] ? (elementData[SECTION].MALE[idx] + " " + _("VITAMIN.CONTENT.MCG")) : "" }</td>
                                                            <td>{ elementData[SECTION].FEMA[idx] + " " + _("VITAMIN.CONTENT.MCG") }</td>
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
                                <h2>{_("VITAMIN.CONTENT.FOOD_100G")}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table vit-table vit-charts">
                                    <tbody>
                                        {
                                            Object
                                                .entries(elementData.FOOD_100G)
                                                .map(([food, g], idx, arr) => {
                                                    let max = arr[0][1];

                                                    return <tr key={"FOOD_100G-" + food}>
                                                        <td className="pe-5">{_("VITAMIN.CONTENT." + food)}</td>
                                                        <td className="chart-container">
                                                            <div className="chart" style={{ width: +(100 * g / max) + "%" }}></div>
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
                </>
            }
        </div>

        <Footer />
    </>
}