import { anxietyRanges } from "./ranges/anxietyRanges";
import { energyRanges } from "./ranges/energyRanges";
import { productivityRanges } from "./ranges/productivityRanges";

import { TestResultModel } from "./types";
import { calculatePercent } from "./calculatePercent";

/* ---------------- TYPES ---------------- */

export type RangeConfig = {
    min: number;
    max: number;
    lev: string;
    icons: TestResultModel["icons"];
    color: TestResultModel["color"];
};

/* ---------------- CORE MAPPER ---------------- */

export const mapValueToResult = (
    value: number,
    maxPercentValue: number,
    ranges: RangeConfig[]
): TestResultModel => {
    const matched =
        ranges.find((range) => value >= range.min && value < range.max) ??
        ranges[ranges.length - 1];

    return {
        lev: matched.lev,
        icons: matched.icons,
        color: matched.color,
        perc: calculatePercent(value, maxPercentValue),
    };
};

/* ---------------- ENERGY ---------------- */

export const energyForValue = (sc: number[]): TestResultModel => {
    const value = computeEnergy(sc);
    return mapValueToResult(value, 2.8, energyRanges);
};

function computeEnergy(sc: number[]): number {
    let iRed = 0,
        iYel = 0,
        iBlu = 0,
        iGrn = 0;

    for (let i = 0; i < sc.length; i++) {
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
        }
    }

    return (18 - iRed - iYel) / (18 - iBlu - iGrn);
}

/* ---------------- PRODUCTIVITY ---------------- */

export const productivityForValue = (sc: number[]): TestResultModel => {
    const value = computeProductivity(sc);
    return mapValueToResult(value, 35, productivityRanges);
};

function computeProductivity(sc: number[]): number {
    const norm = [7, 5, 3, 1, 2, 4, 6, 8];

    let diff = 0;

    for (let i = 0; i < sc.length; i++) {
        diff += Math.abs(norm[sc[i]] - (i + 1));
    }

    return 32 - diff;
}

/* ---------------- ANXIETY ---------------- */

export const anxietyForValue = (sc: number[]): TestResultModel => {
    const value = computeAnxiety(sc);
    return mapValueToResult(value, 15, anxietyRanges);
};

function computeAnxiety(sc: number[]): number {
    const type = (id: number) => {
        if ([0, 6, 7].includes(id)) return "Acrom";
        if ([1, 2, 3, 4].includes(id)) return "Prime";
        return "Mixed";
    };

    const types = sc.map(type);

    const scores: number[] = [];

    if (types[5] === "Prime") scores[5] = 1;
    if (types[6] === "Prime") scores[6] = 2;
    if (types[7] === "Prime") scores[7] = 3;
    if (types[2] === "Acrom") scores[2] = 1;
    if (types[1] === "Acrom") scores[1] = 2;
    if (types[0] === "Acrom") scores[0] = 3;

    return scores.reduce((a, b) => a + (b || 0), 0);
}