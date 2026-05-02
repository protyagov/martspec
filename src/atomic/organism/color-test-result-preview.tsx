import * as React from "react";
import { ResultGroup, TestResult } from "@/utils/color-test/types";

type Props = {
    result: TestResult;
    activeGroup: ResultGroup;
};

export function ColorTestResultPreview({
    result,
    activeGroup,
}: Props) {
    const item = result[activeGroup];

    if (!item) return null;

    return (
        <div className="row mt-5">
            <div className="col-12 text-center">
                <h2>{item.lev}</h2>
                <p>{item.perc}%</p>
            </div>
        </div>
    );
}