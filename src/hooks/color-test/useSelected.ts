import { useEffect, Dispatch, SetStateAction } from "react";

import { TestResult, SectorModel } from "@/utils/color-test/types";
import { COLORS } from "@/utils/color-test/constants";
import {
    energyForValue,
    productivityForValue,
    anxietyForValue,
} from "@/utils/color-test/resultMappings";

/**
 * Хук:
 * следит за выбором цветов
 * и рассчитывает финальный результат теста
 */
export const useSelected = (
    selected: SectorModel["id"][],
    setResult: Dispatch<SetStateAction<TestResult | null>>
) => {
    useEffect(() => {

        /**
         * ждём пока пользователь выберет все цвета
         * (у тебя логика: последний цвет автоматически удаляется)
         */
        if (selected.length !== COLORS.length - 1) return;

        const result: TestResult = {
            // Energy шкала
            E: energyForValue(selected),

            // Productivity шкала
            P: productivityForValue(selected),

            // Anxiety шкала
            A: anxietyForValue(selected),

            /**
             * ⚠️ ВАЖНО:
             * G / I / O сейчас не имеют отдельной логики
             * поэтому временно дублируют Energy
             *
             * позже их нужно заменить на отдельные compute-функции
             */
            G: energyForValue(selected),
            I: energyForValue(selected),
            O: energyForValue(selected),
        };

        setResult(result);

    }, [selected, setResult]);
};