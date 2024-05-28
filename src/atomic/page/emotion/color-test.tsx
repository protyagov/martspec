import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";

const COLORS = [
    "97938E", // Gray
    "1C497F", // Blue
    "489474", // Green
    "DE4332", // Red
    "EFDD4A", // Yellow
    "C3397F", // Purple
    "B75931", // Brown
    "221F20", // Black
] as const;

const RESULT_GROUPS = ["E", "A", "P"] as const;

const useShuffled = ([modelCollection, setCollection]: [
    SectorModel[],
    React.Dispatch<React.SetStateAction<SectorModel[]>>,
]) => {
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

    const isNextTo = (id: number) => {
        if (!isGBB(id)) {
            return false;
        }

        const idxBefore = id === 0 ? 7 : id - 1;
        const idxAfter = id === 7 ? 0 : id + 1;

        return isGBB(idxBefore) || isGBB(idxAfter);
    };

    const isGBB = (id: number) => {
        return modelCollection[id].id === 7 || modelCollection[id].id < 2;
    };

    React.useLayoutEffect(() => {
        if (hasWrongOrder()) {
            shuffle();
        }
    }, [modelCollection]);
};

type SectorModel = {
    id: SectorModelId;
    color: (typeof COLORS)[number];
};

type SectorModelId = number;

const useSelected = ([selectedCollection, setResult]: [
    SectorModel["id"][],
    React.Dispatch<React.SetStateAction<TestResult>>,
]) => {
    const percForValue = (v: number, scF: number): number => Math.min(Math.floor((v * 100) / scF), 100);

    const monEnergy = (): number => {
        let iRed = 0;
        let iYel = 0;
        let iBlu = 0;
        let iGrn = 0;

        for (let i = 0; i <= 7; i++) {
            switch (selectedCollection[i]) {
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

        return (18 - iRed - iYel) / (18 - iBlu - iGrn);
    };

    const energyForValue = (v: number): TestResultModel => {
        const common = {
            perc: percForValue(v, 2.8),
        };

        switch (true) {
            case v >= -1 && v < 0.5:
                return {
                    ...common,
                    lev: "E1",
                    icons: [v >= 0.2 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.RED,
                };
            case v >= 0.5 && v < 0.9:
                return {
                    ...common,
                    lev: "E2",
                    icons: [Icon.FULL, v >= 0.7 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.YELLOW,
                };
            case v >= 0.9 && v < 1.3:
                return {
                    ...common,
                    lev: "E3",
                    icons: [Icon.FULL, Icon.FULL, v >= 1.1 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.GREEN,
                };
            case v >= 1.3 && v < 1.9:
                return {
                    ...common,
                    lev: "E3",
                    icons: [Icon.FULL, Icon.FULL, Icon.FULL, v >= 1.6 ? Icon.HALF : Icon.NULL, Icon.NULL],
                    color: IconColor.ORANGE,
                };
            default:
                return {
                    ...common,
                    lev: "E4",
                    icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, v <= 2.6 ? Icon.HALF : Icon.FULL],
                    color: IconColor.RED,
                };
        }
    };

    const monProductivity = (): number => {
        const autogenNormArr = [7, 5, 3, 1, 2, 4, 6, 8];

        let tdfan = 0;

        for (let i = 0; i <= 6; i++) {
            const colorNumber = selectedCollection[i];
            if (colorNumber >= 0 && colorNumber <= 7) {
                const normIdx = autogenNormArr[colorNumber];
                tdfan += Math.abs(normIdx - (i + 1));
            }
        }

        return 32 - tdfan;
    };

    const productivityForValue = (v: number): TestResultModel => {
        const common = {
            perc: percForValue(v, 35),
        };

        switch (true) {
            case v >= 0 && v <= 7:
                return {
                    ...common,
                    lev: "P1",
                    icons: [v >= 3 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.RED,
                };
            case v >= 8 && v <= 13:
                return {
                    ...common,
                    lev: "P2",
                    icons: [Icon.FULL, v >= 10 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.ORANGE,
                };
            case v >= 14 && v <= 21:
                return {
                    ...common,
                    lev: "P3",
                    icons: [Icon.FULL, Icon.FULL, v >= 17 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.YELLOW,
                };
            case v >= 22 && v <= 27:
                return {
                    ...common,
                    lev: "P4",
                    icons: [Icon.FULL, Icon.FULL, Icon.FULL, v >= 24 ? Icon.HALF : Icon.NULL, Icon.NULL],
                    color: IconColor.L_GREEN,
                };
            default:
                return {
                    ...common,
                    lev: "P5",
                    icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, v <= 29 ? Icon.HALF : Icon.FULL],
                    color: IconColor.GREEN,
                };
        }
    };

    function monAnxiety() {
        const scTypes = selectedCollection.map((id) => colorTypeById(id));

        function colorTypeById(id: number) {
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

    const anxietyForValue = (v: number) => {
        const common = {
            perc: percForValue(v, 15),
        };

        switch (true) {
            case v >= 0 && v < 3:
                return {
                    ...common,
                    lev: "A1",
                    icons: [v >= 1 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.GREEN,
                };
            case v >= 3 && v < 5:
                return {
                    ...common,
                    lev: "A2",
                    icons: [Icon.FULL, v >= 4 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.L_GREEN,
                };
            case v >= 5 && v < 8:
                return {
                    ...common,
                    lev: "A3",
                    icons: [Icon.FULL, Icon.FULL, v >= 6 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL],
                    color: IconColor.YELLOW,
                };
            case v >= 8 && v < 10:
                return {
                    ...common,
                    lev: "A4",
                    icons: [Icon.FULL, Icon.FULL, Icon.FULL, v >= 9 ? Icon.HALF : Icon.NULL, Icon.NULL],
                    color: IconColor.ORANGE,
                };
            default:
                return {
                    ...common,
                    lev: "A5",
                    icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, v < 11 ? Icon.HALF : Icon.FULL],
                    color: IconColor.RED,
                };
        }
    };

    React.useLayoutEffect(() => {
        const scFull = selectedCollection.length === COLORS.length;

        if (!scFull) return;

        const result = {
            E: energyForValue(monEnergy()),
            P: productivityForValue(monProductivity()),
            A: anxietyForValue(monAnxiety()),
        };

        setResult(result);
    }, [selectedCollection]);
};

type TestResult<T = TestResultModel> = {
    [key in (typeof RESULT_GROUPS)[number]]?: T;
};

type TestResultModel = {
    lev: string;
    icons: Icon[];
    color: IconColor;
    perc: number;
};

const enum Icon {
    NULL = "NULL",
    HALF = "HALF",
    FULL = "FULL",
}

const enum IconColor {
    RED = "FF392E",
    ORANGE = "FE8429",
    YELLOW = "E0BD64",
    GREEN = "489474",
    L_GREEN = "A3E23D",
}

const useTestResultScroll = ([resultExists, resultRef]: [boolean, React.RefObject<HTMLElement>]) => {
    React.useLayoutEffect(() => {
        if (!resultExists || !resultRef.current) return;
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, [resultExists]);
};

export default function ColorTest() {
    const initSectors = COLORS.map((color, id) => ({ color, id }));

    const [sectorModelCollection, setSectorModelCollection] = React.useState<SectorModel[]>(initSectors);

    const [userSelectionCollection, setUserSelectionCollection] = React.useState<SectorModelId[]>([]);

    const [testResult, setTestResult] = React.useState<TestResult>(null);

    const [displayedResult, setDisplayedResult] = React.useState<(typeof RESULT_GROUPS)[number]>("E");

    const testResultRef = React.useRef<HTMLElement>(null);

    useShuffled([sectorModelCollection, setSectorModelCollection]);

    useSelected([userSelectionCollection, setTestResult]);

    useTestResultScroll([!!testResult, testResultRef]);

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new emotion color-test">
                <section className="text-center my-0">
                    <div className="row">
                        <div className="col-9 mx-auto">
                            <h2>{_("COLOR_TEST.HEAD1")}</h2>
                            <p className="mb-0">{_("COLOR_TEST.DESC1")}</p>
                            {testResult && (
                                <a href={Locale.i18nLink("emotion/color-test")} className="ms-btn-large">
                                    {_("COLOR_TEST.BTN_AGAIN")}
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                {!testResult ? (
                    <section>
                        <div className="row text-center mb-0">
                            <div className="col-10 mx-auto">
                                <h1>{_("COLOR_TEST.TEST_HEAD")}</h1>
                                <p className="mb-6">{_("COLOR_TEST.TEST_DESC")}</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="color-sectors">
                                {sectorModelCollection.map((sector) => (
                                    <div key={sector.color}>
                                        <button
                                            onClick={() =>
                                                setUserSelectionCollection((current) => [...current, sector.id])
                                            }
                                            className={
                                                "sector" +
                                                (userSelectionCollection.includes(sector.id) ? " selected" : "")
                                            }
                                            style={{ background: `#${sector.color}` }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ) : (
                    <>
                        <section ref={testResultRef} className="test-result">
                            <div className="row mb-0">
                                <div className="col-12">
                                    <h2 className="mb-7">{_("COLOR_TEST.RES")}</h2>
                                </div>
                            </div>
                            <div className="row g-4">
                                {RESULT_GROUPS.map((groupTitle, idx, all) => {
                                    const groupResultExists = groupTitle in testResult;
                                    const result = testResult[groupTitle] || testResult[all[idx - 4]] || testResult.A;

                                    // return (
                                    //     <div
                                    //         key={groupTitle}
                                    //         className="col-lg-4 col-sm-6 col-12"
                                    //         onClick={() => groupResultExists && setDisplayedResult(groupTitle)}
                                    //     >
                                    //         <div className={`block bg-gray${groupResultExists ? "" : " blured"}`}>
                                    //             <h3>{_(`COLOR_TEST.GROUP_TITLE_${groupTitle}`)}</h3>
                                    //             <div
                                    //                 className="d-flex"
                                    //                 style={{ "--color": `#${result.color}` } as React.CSSProperties}
                                    //             >
                                    //                 {result.icons.map((icon, idx) => (
                                    //                     <div
                                    //                         key={`${groupTitle}-icon-${idx}`}
                                    //                         className={`me-2 test-result-icon ${icon}`}
                                    //                     />
                                    //                 ))}
                                    //             </div>
                                    //             <p className="mt-2">{_(`COLOR_TEST._${result.lev}`)}</p>
                                    //         </div>
                                    //     </div>
                                    // );
                                    return (
                                        <div
                                            key={groupTitle}
                                            className="accordion col-lg-4 col-sm-6 col-12"
                                        >
                                            <div
                                                className="accordion-item"
                                            >
                                                <div
                                                    role="button"
                                                    className="accordion-button d-flex flex-column align-items-baseline"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#accordion-${groupTitle}`}
                                                    aria-expanded="true"
                                                    aria-controls={`accordion-${groupTitle}`}
                                                >
                                                    <h3 className="mb-1">{_(`COLOR_TEST.GROUP_TITLE_${groupTitle}`)}</h3>
                                                    <div
                                                        className="d-flex"
                                                        style={{ "--color": `#${result.color}` } as React.CSSProperties}
                                                    >
                                                        {result.icons.map((icon, idx) => (
                                                            <div
                                                                key={`${groupTitle}-icon-${idx}`}
                                                                className={`me-2 test-result-icon ${icon}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p>{_(`COLOR_TEST._${result.lev}`)}</p>
                                                </div>
                                                <div
                                                    id={`accordion-${groupTitle}`}
                                                    className="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="row mb-0">
                                                        <div className="col-12">
                                                            <p className="mb-7">
                                                                {_(`COLOR_TEST.${testResult[displayedResult]?.lev}`)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="row g-4">
                                                        <div className="col-md-6 col-12 text-center">
                                                            <div className="block bg-violet">
                                                                <p>{_("COLOR_TEST.LEV")}</p>
                                                                <h2 className="mb-0">
                                                                    {_(
                                                                        `COLOR_TEST._${testResult[displayedResult]?.lev}`
                                                                    )}
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12 text-center">
                                                            <div className="block bg-yellow">
                                                                <p>{_("COLOR_TEST.PERC")}</p>
                                                                <h2 className="mb-0">{`${testResult[displayedResult]?.perc}%`}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h3 className="mb-3">{_("COLOR_TEST.GROUP_DESC")}</h3>
                                                            <p className="mb-0">
                                                                {_(`COLOR_TEST.GROUP_DESC_${displayedResult}`)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <section>
                            <div className="row text-center">
                                <div className="col-8 mx-auto">
                                    <h2>{_("COLOR_TEST.CTA_HEAD")}</h2>
                                    <p>{_("COLOR_TEST.CTA_DESC")}</p>
                                    <a
                                        href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                        target="_blank"
                                        title={_("EMOTION.HEAD")}
                                        className="ms-btn-apple"
                                        style={{
                                            backgroundImage: `url(/img/apple_btn/${Locale.language}.svg)`,
                                        }}
                                    />
                                </div>
                            </div>
                        </section>
                    </>
                )}

                <section>
                    <div className="row">
                        <div className="block bg-gray test-principles">
                            <div className="col-12">
                                <h2>{_("COLOR_TEST.HEAD2")}</h2>
                                <p>{_("COLOR_TEST.DESC2")}</p>
                            </div>
                            <div className="col-12">
                                <h2>{_("COLOR_TEST.HEAD3")}</h2>
                                <p>{_("COLOR_TEST.DESC3")}</p>
                            </div>
                            <div className="col-12">
                                <h2>{_("COLOR_TEST.HEAD4")}</h2>
                                <p>{_("COLOR_TEST.DESC4")}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
