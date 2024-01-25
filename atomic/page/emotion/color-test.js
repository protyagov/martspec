import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import NavigationBar from "src/atomic/organism/navbar";
import { Footer } from "../../organism/footer";
const COLORS = [
    "97938E",
    "1C497F",
    "489474",
    "DE4332",
    "EFDD4A",
    "C3397F",
    "B75931",
    "221F20"
];
const RESULT_GROUPS = ["E", "A", "P", "G", "I", "O"];
const useShuffled = ([modelCollection, setCollection]) => {
    const shuffle = () => {
        setCollection((current) => [...current].sort(() => Math.random() - 0.5));
    };
    const hasWrongOrder = () => {
        for (let i = 0; i <= 7; i++) {
            if (isNextTo(i)) {
                return true;
            }
        }
        return false;
    };
    const isNextTo = (id) => {
        if (!isGBB(id)) {
            return false;
        }
        const idxBefore = id === 0 ? 7 : id - 1;
        const idxAfter = id === 7 ? 0 : id + 1;
        return isGBB(idxBefore) || isGBB(idxAfter);
    };
    const isGBB = (id) => {
        return (modelCollection[id].id === 7 ||
            modelCollection[id].id < 2);
    };
    React.useLayoutEffect(() => {
        if (hasWrongOrder()) {
            shuffle();
        }
        ;
    }, [modelCollection]);
};
const useSelected = ([selectedCollection, setResult]) => {
    const sc = selectedCollection;
    const percForValue = (v, scF) => Math.min(Math.floor(v * 100 / scF), 100);
    const monEnergy = () => {
        let iRed = 0, iYel = 0, iBlu = 0, iGrn = 0;
        for (let i = 0; i <= 7; i++) {
            switch (sc[i]) {
                case 3:
                    iRed = i + 1;
                    break;
                case 4:
                    iYel = i + 1;
                    break;
                case 2:
                    iGrn = i + 1;
                    break;
                case 1:
                    iBlu = i + 1;
                    break;
                default:
                    continue;
            }
        }
        ;
        return (18 - iRed - iYel) / (18 - iBlu - iGrn);
    };
    const energyForValue = (v) => {
        const common = {
            perc: percForValue(v, 2.8),
        };
        switch (true) {
            case v >= -1 && v < 0.5:
                return {
                    ...common,
                    lev: "E1",
                    icons: [v >= 0.2 ? "HALF" : "NULL", "NULL", "NULL", "NULL", "NULL"],
                    color: "FF392E"
                };
            case v >= 0.5 && v < 0.9:
                return {
                    ...common,
                    lev: "E2",
                    icons: ["FULL", v >= 0.7 ? "HALF" : "NULL", "NULL", "NULL", "NULL"],
                    color: "E0BD64"
                };
            case v >= 0.9 && v < 1.3:
                return {
                    ...common,
                    lev: "E3",
                    icons: ["FULL", "FULL", v >= 1.1 ? "HALF" : "NULL", "NULL", "NULL"],
                    color: "489474"
                };
            case v >= 1.3 && v < 1.9:
                return {
                    ...common,
                    lev: "E3",
                    icons: ["FULL", "FULL", "FULL", v >= 1.6 ? "HALF" : "NULL", "NULL"],
                    color: "FE8429"
                };
            default:
                return {
                    ...common,
                    lev: "E4",
                    icons: ["FULL", "FULL", "FULL", "FULL", v <= 2.6 ? "HALF" : "FULL"],
                    color: "FF392E"
                };
        }
        ;
    };
    const monProductivity = () => {
        const autogenNormArr = [7, 5, 3, 1, 2, 4, 6, 8];
        let tdfan = 0;
        for (let i = 0; i <= 6; i++) {
            const colorNumber = sc[i];
            if (colorNumber >= 0 && colorNumber <= 7) {
                const normIdx = autogenNormArr[colorNumber];
                tdfan += Math.abs(normIdx - (i + 1));
            }
        }
        ;
        return 32 - tdfan;
    };
    const productivityForValue = (v) => {
        const common = {
            perc: percForValue(v, 35),
        };
        switch (true) {
            case v >= 0 && v <= 7:
                return {
                    ...common,
                    lev: "P1",
                    icons: [v >= 3 ? "HALF" : "NULL", "NULL", "NULL", "NULL", "NULL"],
                    color: "FF392E"
                };
            case v >= 8 && v <= 13:
                return {
                    ...common,
                    lev: "P2",
                    icons: ["FULL", v >= 10 ? "HALF" : "NULL", "NULL", "NULL", "NULL"],
                    color: "FE8429"
                };
            case v >= 14 && v <= 21:
                return {
                    ...common,
                    lev: "P3",
                    icons: ["FULL", "FULL", v >= 17 ? "HALF" : "NULL", "NULL", "NULL"],
                    color: "E0BD64"
                };
            case v >= 22 && v <= 27:
                return {
                    ...common,
                    lev: "P4",
                    icons: ["FULL", "FULL", "FULL", v >= 24 ? "HALF" : "NULL", "NULL"],
                    color: "A3E23D"
                };
            default:
                return {
                    ...common,
                    lev: "P5",
                    icons: ["FULL", "FULL", "FULL", "FULL", v <= 29 ? "HALF" : "FULL"],
                    color: "489474"
                };
        }
    };
    function monAnxiety() {
        const scTypes = sc.map(id => colorTypeById(id));
        function colorTypeById(id) {
            switch (id) {
                case 0:
                case 6:
                case 7:
                    return "Acrom";
                case 1:
                case 2:
                case 3:
                case 4:
                    return "Prime";
                default:
                    return "Mixed";
            }
        }
        ;
        const resALev = [];
        if (scTypes[5] === "Prime") {
            resALev[5] = 1;
        }
        if (scTypes[6] === "Prime") {
            resALev[6] = 2;
        }
        if (scTypes[7] === "Prime") {
            resALev[7] = 3;
        }
        if (scTypes[2] === "Acrom") {
            resALev[2] = 1;
        }
        if (scTypes[1] === "Acrom") {
            resALev[1] = 2;
        }
        if (scTypes[0] === "Acrom") {
            resALev[0] = 3;
        }
        return resALev.reduce((sum, value) => sum + value, 0);
    }
    const anxietyForValue = (v) => {
        const common = {
            perc: percForValue(v, 15),
        };
        switch (true) {
            case v >= 0 && v < 3:
                return {
                    ...common,
                    lev: "A1",
                    icons: [v >= 1 ? "HALF" : "NULL", "NULL", "NULL", "NULL", "NULL"],
                    color: "489474"
                };
            case v >= 3 && v < 5:
                return {
                    ...common,
                    lev: "A2",
                    icons: ["FULL", v >= 4 ? "HALF" : "NULL", "NULL", "NULL", "NULL"],
                    color: "A3E23D"
                };
            case v >= 5 && v < 8:
                return {
                    ...common,
                    lev: "A3",
                    icons: ["FULL", "FULL", v >= 6 ? "HALF" : "NULL", "NULL", "NULL"],
                    color: "E0BD64"
                };
            case v >= 8 && v < 10:
                return {
                    ...common,
                    lev: "A4",
                    icons: ["FULL", "FULL", "FULL", v >= 9 ? "HALF" : "NULL", "NULL"],
                    color: "FE8429"
                };
            default:
                return {
                    ...common,
                    lev: "A5",
                    icons: ["FULL", "FULL", "FULL", "FULL", v < 11 ? "HALF" : "FULL"],
                    color: "FF392E"
                };
        }
    };
    React.useLayoutEffect(() => {
        const scFull = sc.length === COLORS.length;
        if (!scFull)
            return;
        const result = {
            E: energyForValue(monEnergy()),
            P: productivityForValue(monProductivity()),
            A: anxietyForValue(monAnxiety()),
        };
        setResult(result);
    }, [selectedCollection]);
};
var Icon;
(function (Icon) {
    Icon["NULL"] = "NULL";
    Icon["HALF"] = "HALF";
    Icon["FULL"] = "FULL";
})(Icon || (Icon = {}));
;
var IconColor;
(function (IconColor) {
    IconColor["RED"] = "FF392E";
    IconColor["ORANGE"] = "FE8429";
    IconColor["YELLOW"] = "E0BD64";
    IconColor["GREEN"] = "489474";
    IconColor["L_GREEN"] = "A3E23D";
})(IconColor || (IconColor = {}));
;
const useTestResultScroll = ([resultExists, resultRef]) => {
    React.useLayoutEffect(() => {
        if (!resultExists || !resultRef.current)
            return;
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, [resultExists]);
};
export default function ColorTest() {
    var _a, _b, _c;
    const initSectors = COLORS.map((color, id) => ({ color, id }));
    const [sectorModelCollection, setSectorModelCollection] = React.useState(initSectors);
    const [userSelectionCollection, setUserSelectionCollection] = React.useState([]);
    const [testResult, setTestResult] = React.useState(null);
    const [displayedResult, setDisplayedResult] = React.useState("E");
    const testResultRef = React.useRef(null);
    useShuffled([sectorModelCollection, setSectorModelCollection]);
    useSelected([userSelectionCollection, setTestResult]);
    useTestResultScroll([!!testResult, testResultRef]);
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page ms-base-new emotion color-test" },
            React.createElement("section", { className: "text-center my-0" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-9 mx-auto" },
                        React.createElement("h2", null, _("COLOR_TEST.HEAD1")),
                        React.createElement("p", { className: "mb-0" }, _("COLOR_TEST.DESC1")),
                        testResult && React.createElement("a", { href: Locale.i18nLink("emotion/color-test"), className: "ms-btn-large" }, _("COLOR_TEST.BTN_AGAIN"))))),
            !testResult ?
                React.createElement("section", null,
                    React.createElement("div", { className: "row text-center mb-0" },
                        React.createElement("div", { className: "col-10 mx-auto" },
                            React.createElement("h1", null, _("COLOR_TEST.TEST_HEAD")),
                            React.createElement("p", { className: "mb-6" }, _("COLOR_TEST.TEST_DESC")))),
                    React.createElement("div", { className: "row g-4" },
                        React.createElement("div", { className: "color-sectors" }, sectorModelCollection.map((sector) => (React.createElement("div", { key: sector.color },
                            React.createElement("button", { onClick: () => setUserSelectionCollection(current => [...current, sector.id]), className: "sector" + (userSelectionCollection.includes(sector.id) ? " selected" : ""), style: { background: "#" + sector.color } })))))))
                :
                    React.createElement(React.Fragment, null,
                        React.createElement("section", { ref: testResultRef, className: "test-result" },
                            React.createElement("div", { className: "row mb-0" },
                                React.createElement("div", { className: "col-12" },
                                    React.createElement("h2", { className: "mb-7" }, _("COLOR_TEST.RES")))),
                            React.createElement("div", { className: "row g-4" }, RESULT_GROUPS.map((groupTitle, idx, all) => {
                                const groupResultExists = groupTitle in testResult;
                                const result = testResult[groupTitle] || testResult[all[idx - 4]] || testResult["A"];
                                return (React.createElement("div", { key: groupTitle, className: "col-lg-4 col-sm-6 col-12", onClick: () => groupResultExists && setDisplayedResult(groupTitle) },
                                    React.createElement("div", { className: "block bg-gray" + (groupResultExists ? "" : " blured") },
                                        React.createElement("h3", null, _("COLOR_TEST.GROUP_TITLE_" + groupTitle)),
                                        React.createElement("div", { className: "d-flex", style: { "--color": "#" + result.color } }, result.icons.map((icon, idx) => (React.createElement("div", { key: groupTitle + "-icon-" + idx, className: "me-2 test-result-icon " + icon })))),
                                        React.createElement("p", { className: "mt-2" }, _("COLOR_TEST._" + result.lev)))));
                            })),
                            React.createElement("div", { className: "row mb-0" },
                                React.createElement("div", { className: "col-12" },
                                    React.createElement("p", { className: "mb-7" }, _("COLOR_TEST." + ((_a = testResult[displayedResult]) === null || _a === void 0 ? void 0 : _a.lev))))),
                            React.createElement("div", { className: "row g-4" },
                                React.createElement("div", { className: "col-md-6 col-12 text-center" },
                                    React.createElement("div", { className: "block bg-violet" },
                                        React.createElement("p", null, _("COLOR_TEST.LEV")),
                                        React.createElement("h2", { className: "mb-0" }, _("COLOR_TEST._" + ((_b = testResult[displayedResult]) === null || _b === void 0 ? void 0 : _b.lev))))),
                                React.createElement("div", { className: "col-md-6 col-12 text-center" },
                                    React.createElement("div", { className: "block bg-yellow" },
                                        React.createElement("p", null, _("COLOR_TEST.PERC")),
                                        React.createElement("h2", { className: "mb-0" }, ((_c = testResult[displayedResult]) === null || _c === void 0 ? void 0 : _c.perc) + "%")))),
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-12" },
                                    React.createElement("h3", { className: "mb-3" }, _("COLOR_TEST.GROUP_DESC")),
                                    React.createElement("p", { className: "mb-0" }, _("COLOR_TEST.GROUP_DESC_" + displayedResult))))),
                        React.createElement("section", null,
                            React.createElement("div", { className: "row text-center" },
                                React.createElement("div", { className: "col-8 mx-auto" },
                                    React.createElement("h2", null, _("COLOR_TEST.CTA_HEAD")),
                                    React.createElement("p", null, _("COLOR_TEST.CTA_DESC")),
                                    React.createElement("a", { href: `https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`, target: "_blank", title: _("EMOTION.HEAD"), className: "ms-btn-apple", style: {
                                            backgroundImage: "url(/img/apple_btn/" +
                                                Locale.language +
                                                ".svg)",
                                        } }))))),
            React.createElement("section", null,
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "block bg-gray test-principles" },
                        React.createElement("div", { className: "col-12" },
                            React.createElement("h2", null, _("COLOR_TEST.HEAD2")),
                            React.createElement("p", null, _("COLOR_TEST.DESC2"))),
                        React.createElement("div", { className: "col-12" },
                            React.createElement("h2", null, _("COLOR_TEST.HEAD3")),
                            React.createElement("p", null, _("COLOR_TEST.DESC3"))),
                        React.createElement("div", { className: "col-12" },
                            React.createElement("h2", null, _("COLOR_TEST.HEAD4")),
                            React.createElement("p", null, _("COLOR_TEST.DESC4"))))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=color-test.js.map