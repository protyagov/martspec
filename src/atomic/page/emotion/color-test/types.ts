import { RESULT_GROUPS, IconColor, Icon } from "@/atomic/page/emotion/color-test/constants";

export type SectorModel = {
    id: number;
    color: string;
};

export type ResultGroup = (typeof RESULT_GROUPS)[number];

export type TestResultModel = {
    lev: string;
    icons: Icon[];
    color: IconColor;
    perc: number;
};

export type TestResult<T = TestResultModel> = Partial<Record<ResultGroup, T>>;