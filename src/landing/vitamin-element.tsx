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
    FOOD_100G: { [key: string]: number };
};


const VIT_AGE = ["6_M", "7_12_M", "1_3", "4_8", "9_13", "14_18", "19_50", "51", "PREG_14_18", "PREG_19_50", "LACT_14_18", "LACT_19_50"];

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
                                {
                                    [
                                        ...Array(elementData.DEF_COUNT)
                                        .keys()
                                    ]
                                        .map(n => (
                                            <li key={elementId + "-DEF-" + n}>
                                                { _("VITAMIN." + elementId + ".DEF_" + +(n + 1)) }
                                            </li>
                                        ))
                                }
                                </ul>
                            </div>
                            <div className="col-md col-12 vit-over">
                                <h3>{_("VITAMIN.CONTENT.OVER")}</h3>
                                <ul>
                                {
                                    [
                                        ...Array(elementData.OVER_COUNT)
                                        .keys()
                                    ]
                                        .map(n => (
                                            <li key={elementId + "-OVER-" + n}>
                                                { _("VITAMIN." + elementId + ".OVER_" + +(n + 1)) }
                                            </li>
                                        ))
                                }
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row">
                            <div className="col">
                                <h2>{ _("VITAMIN.CONTENT.DOSE_RDV") }</h2>
                            </div>
                        </div>
                        <table className="table table-bordered vit-table">
                            <thead>
                                <tr>
                                    <td style={{"width": "50%"}}>Age</td>
                                    <td>{ _("VITAMIN.CONTENT.MALE") }</td>
                                    <td>{ _("VITAMIN.CONTENT.FEMA") }</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    VIT_AGE.map((age, idx) => {
                                        return <tr>
                                            <td>{ _("VITAMIN.CONTENT.AGE." + age) }</td>
                                            <td>{ elementData.DOSE_RDV.MALE[idx] ? (elementData.DOSE_RDV.MALE[idx] + " " + _("VITAMIN.CONTENT.MCG")) : "" }</td>
                                            <td>{ elementData.DOSE_RDV.FEMA[idx] + " " + _("VITAMIN.CONTENT.MCG") }</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <div className="row">
                            <div className="col vit-facts">
                                <h2>{_("VITAMIN.CONTENT.FACTS")}</h2>
                                <ul className="p-0">
                                {
                                    [
                                        ...Array(elementData.FACT_COUNT)
                                        .keys()
                                    ]
                                        .map(n => (
                                            <li key={elementId + "-FACT-" + n}>
                                                { _("VITAMIN." + elementId + ".FACT_" + +(n + 1)) }
                                            </li>
                                        ))
                                }
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