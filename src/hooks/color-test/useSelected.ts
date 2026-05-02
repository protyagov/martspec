import { useEffect, Dispatch, SetStateAction } from "react";

import { TestResult, SectorModel } from "@/utils/color-test/types";
import { COLORS } from "@/utils/color-test/constants";
import {
    energyForValue,
    productivityForValue,
    anxietyForValue,
} from "@/utils/color-test/resultMappings";

export const useSelected = (
    selected: SectorModel["id"][],
    setResult: Dispatch<SetStateAction<TestResult | null>>
) => {
    useEffect(() => {
        if (selected.length !== COLORS.length) return;

        const result: TestResult = {
            E: energyForValue(selected),
            P: productivityForValue(selected),
            A: anxietyForValue(selected),
        };

        setResult(result);
    }, [selected, setResult]);
};