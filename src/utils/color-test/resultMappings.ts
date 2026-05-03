import { anxietyRanges } from "./ranges/anxietyRanges";
import { energyRanges } from "./ranges/energyRanges";
import { productivityRanges } from "./ranges/productivityRanges";

import { TestResultModel } from "./types";
import { calculatePercent } from "./calculatePercent";

/* =========================================================
   TYPES
   ========================================================= */

/**
 * Общая конфигурация диапазона (range-based система)
 * Используется для всех шкал: Energy / Productivity / Anxiety
 */
export type RangeConfig = {
    min: number;
    max: number;
    lev: string;
    icons: TestResultModel["icons"];
    color: TestResultModel["color"];
};

/* =========================================================
   CORE MAPPER (универсальный преобразователь value → UI)
   ========================================================= */

/**
 * Преобразует числовое значение (value) в UI-модель результата
 * через диапазоны (ranges)
 *
 * Это главный слой системы:
 * value → range → UI (lev/icons/color/perc)
 */
export const mapValueToResult = (
    value: number,
    maxPercentValue: number,
    ranges: RangeConfig[]
): TestResultModel => {
    // ищем подходящий диапазон
    const matched =
        ranges.find((range) => value >= range.min && value < range.max) ??
        // fallback: последний диапазон (на случай выхода за границы)
        ranges[ranges.length - 1];

    return {
        lev: matched.lev,
        icons: matched.icons,
        color: matched.color,

        // процент считается отдельно, от нормализованного значения
        perc: calculatePercent(value, maxPercentValue),
    };
};

/* =========================================================
   ENERGY
   ========================================================= */

/**
 * Публичная функция: Energy шкала
 * 1. считает raw value
 * 2. мапит в UI через ranges
 */
export const energyForValue = (sc: number[]): TestResultModel => {
    const value = computeEnergy(sc);
    return mapValueToResult(value, 2.8, energyRanges);
};

/**
 * Внутренний расчёт Energy
 * Использует позиции цветов в последовательности выбора
 */
function computeEnergy(sc: number[]): number {
    let iRed = 0;
    let iYel = 0;
    let iBlu = 0;
    let iGrn = 0;

    // определяем позиции ключевых цветов
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

    // формула энергии (нормализованная разница позиций)
    return (18 - iRed - iYel) / (18 - iBlu - iGrn);
}

/* =========================================================
   PRODUCTIVITY
   ========================================================= */

/**
 * Productivity шкала:
 * сравнивает порядок пользователя с эталонным порядком
 */
export const productivityForValue = (sc: number[]): TestResultModel => {
    const value = computeProductivity(sc);
    return mapValueToResult(value, 35, productivityRanges);
};

/**
 * Чем меньше отклонение от нормы — тем выше продуктивность
 */
function computeProductivity(sc: number[]): number {
    const norm = [7, 5, 3, 1, 2, 4, 6, 8];

    let diff = 0;

    for (let i = 0; i < sc.length; i++) {
        // разница между эталоном и фактическим выбором
        diff += Math.abs(norm[sc[i]] - (i + 1));
    }

    return 32 - diff;
}

/* =========================================================
   ANXIETY
   ========================================================= */

/**
 * Anxiety шкала:
 * основана на типах цветов (Acrom / Prime / Mixed)
 */
export const anxietyForValue = (sc: number[]): TestResultModel => {
    const value = computeAnxiety(sc);
    return mapValueToResult(value, 15, anxietyRanges);
};

/**
 * Определяет уровень тревожности на основе комбинаций цветов
 */
function computeAnxiety(sc: number[]): number {
    const type = (id: number) => {
        if ([0, 6, 7].includes(id)) return "Acrom";
        if ([1, 2, 3, 4].includes(id)) return "Prime";
        return "Mixed";
    };

    const types = sc.map(type);

    // FIX: вместо sparse array используем нормальный массив с 0
    const scores = new Array(sc.length).fill(0);

    // вклад "Prime"
    if (types[5] === "Prime") scores[5] = 1;
    if (types[6] === "Prime") scores[6] = 2;
    if (types[7] === "Prime") scores[7] = 3;

    // вклад "Acrom"
    if (types[2] === "Acrom") scores[2] = 1;
    if (types[1] === "Acrom") scores[1] = 2;
    if (types[0] === "Acrom") scores[0] = 3;

    // сумма всех вкладов
    return scores.reduce((sum, value) => sum + value, 0);
}