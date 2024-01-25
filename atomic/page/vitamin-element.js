import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
;
;
const VIT_AGE = ["0_1", "1_3", "4_8", "9_13", "14_18", "19_50", "51_70", "71", "PREG_14_18", "PREG_19_50", "LACT_14_18", "LACT_19_50"];
export default function VitaminElement(props) {
    const id = props.id.toUpperCase();
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        const fetchElementData = async () => {
            const response = await fetch("/data/vitamins.json");
            if (!response.ok)
                return;
            await response
                .json()
                .then((fetched) => setData(fetched[id]));
        };
        fetchElementData();
    }, []);
    const getNameWithType = (type) => {
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
    const getListFromCount = (NAME) => {
        return ([
            ...Array(data[NAME + "_COUNT"])
                .keys()
        ]
            .map(n => (React.createElement("li", { key: `${id}-${NAME}-${n}` }, _(`VITAMIN.${id}.${NAME}_${n + 1}`)))));
    };
    const getValueForAmount = (idx, amount) => {
        if (idx)
            return amount;
        switch (amount) {
            case 40000: return 1300;
            case 39.3: return 9;
            case 60000: return 3500;
            case 1640: return 270;
            case 200: return 54;
            case 574: return 290;
            default: return amount;
        }
        ;
    };
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5 vitamin-element" }, data && React.createElement(React.Fragment, null,
            React.createElement("div", { className: "header py-5 mt-0", style: { "--vitamin-bg-color": "#" + data.HEX } },
                React.createElement("section", null,
                    React.createElement("div", { className: "ms-s-offset text-center" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col" },
                                React.createElement("h1", { className: "pt-5" }, getNameWithType(data.TYPE)),
                                React.createElement("img", { src: data.LOGO, className: "ms-base-image", alt: _("VITAMIN." + id + ".NAME"), height: 512, width: 512 })))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row mt-5" },
                    React.createElement("div", { className: "col" },
                        React.createElement("h2", null, _("VITAMIN.CONTENT.FUNC")),
                        React.createElement("p", null, _("VITAMIN." + id + ".FUNC")))),
                data.TYPE && (React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" },
                        React.createElement("div", { className: "vit-type" },
                            React.createElement("button", { "data-bs-toggle": "collapse", "data-bs-target": "#vit-type-collapse", "aria-expanded": "false", "aria-controls": "vit-type-collapse" }, _("VITAMIN." + data.TYPE + ".SHORT")),
                            React.createElement("div", { className: "collapse collapse-content", id: "vit-type-collapse" },
                                React.createElement("div", { className: "content-padding" }, _("VITAMIN." + data.TYPE + ".DESC")))))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md col-12 vit-def" },
                        React.createElement("h3", null, _("VITAMIN.CONTENT.DEF")),
                        React.createElement("ul", null, getListFromCount("DEF"))),
                    React.createElement("div", { className: "col-md col-12 vit-over" },
                        React.createElement("h3", null, _("VITAMIN.CONTENT.OVER")),
                        React.createElement("ul", null, getListFromCount("OVER"))))),
            [
                "DOSE_RDV",
                "DOSE_UL"
            ].map(SECTION => {
                return data[SECTION] && (React.createElement("section", { key: SECTION },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col d-flex align-items-center" },
                            React.createElement("img", { src: "/img/page/vitamin/vitamin-" + SECTION + "-icon.png", className: "p-0 mt-3 ms-0 me-3", alt: _("VITAMIN.CONTENT." + SECTION), height: "40px", width: "40px" }),
                            React.createElement("h2", null, _("VITAMIN.CONTENT." + SECTION)))),
                    React.createElement("table", { className: "table table-bordered vit-table" },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("td", { style: { "width": "50%" } }, _("VITAMIN.CONTENT.AGE.HEAD")),
                                React.createElement("td", null, _("VITAMIN.CONTENT.MALE")),
                                React.createElement("td", null, _("VITAMIN.CONTENT.FEMA")))),
                        React.createElement("tbody", null, VIT_AGE.map((age, idx) => {
                            return React.createElement("tr", { key: SECTION + "-" + age },
                                React.createElement("td", null, _("VITAMIN.CONTENT.AGE." + age)),
                                React.createElement("td", null, data[SECTION].MALE[idx] ? (data[SECTION].MALE[idx] + " " + _("VITAMIN.CONTENT." + data.UNIT)) : ""),
                                React.createElement("td", null, data[SECTION].FEMA[idx] ? (data[SECTION].FEMA[idx] + " " + _("VITAMIN.CONTENT." + data.UNIT)) : ""));
                        })))));
            }),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" },
                        React.createElement("h2", null, _("VITAMIN.CONTENT.FOOD_100G", { unit: _("VITAMIN.CONTENT." + data.UNIT) })))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" },
                        React.createElement("table", { className: "table vit-table vit-charts" },
                            React.createElement("tbody", null, Object
                                .entries(data.FOOD_100G)
                                .map(([food, g], idx, arr) => {
                                let max = getValueForAmount(0, arr[0][1]);
                                return React.createElement("tr", { key: "FOOD_100G-" + food },
                                    React.createElement("td", { className: "pe-5" }, _("VITAMIN.CONTENT." + food)),
                                    React.createElement("td", { className: "chart-container" },
                                        React.createElement("div", { className: "chart", style: { width: +(100 * getValueForAmount(idx, g) / max) + "%" } })),
                                    React.createElement("td", { className: "ps-5" }, g));
                            })))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col vit-facts" },
                        React.createElement("h2", null, _("VITAMIN.CONTENT.FACTS")),
                        React.createElement("ul", { className: "p-0" }, getListFromCount("FACT"))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("a", { href: `https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`, target: "_blank", title: _("VITAMIN.DWN"), className: "ms-btn-apple mt-5", style: { backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' } })))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=vitamin-element.js.map