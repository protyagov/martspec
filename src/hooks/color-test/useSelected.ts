import { useEffect, Dispatch, SetStateAction } from "react";

import { TestResult, SectorModel } from "@/atomic/page/emotion/color-test/types";
import { COLORS } from "@/atomic/page/emotion/color-test/constants";
import {
    energyForValue,
    productivityForValue,
    anxietyForValue,
} from "@/atomic/page/emotion/color-test/utils/resultMappings";

export const useSelected = (
    selected: SectorModel["id"][],
    setResult: Dispatch<SetStateAction<TestResult | null>>
) => {
    useEffect(() => {
        if (selected.length !== COLORS.length - 1) return;

        const result: TestResult = {
            E: energyForValue(selected),
            P: productivityForValue(selected),
            A: anxietyForValue(selected),
            G: energyForValue(selected),
            I: energyForValue(selected),
            O: energyForValue(selected),
        };

        setResult(result);

    }, [selected, setResult]);
};