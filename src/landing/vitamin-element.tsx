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
    FOOD_100G: { [key: string]: number };
};

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
                                <div className="vit-type">
                                    { _("VITAMIN." + elementData.TYPE) }
                                </div>
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
                </>
            }
        </div>

        <Footer />
    </>
}