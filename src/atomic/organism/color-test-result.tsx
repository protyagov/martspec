import * as React from "react";
import { RESULT_GROUPS } from "@/utils/color-test/constants";
import { ResultGroup, TestResult } from "@/utils/color-test/types";

type Props = {
    result: TestResult;
    onSelect: (group: ResultGroup) => void;
};

export function ColorTestResult({ result, onSelect }: Props) {
    return (
        <div className="row g-4">
            {RESULT_GROUPS.map((group) => {
                const item = result[group];
                if (!item) return null;

                return (
                    <div
                        key={group}
                        className="col-lg-4 col-sm-6 col-12"
                        onClick={() => onSelect(group)}
                    >
                        <div className="block bg-gray">
                            <h3>{group}</h3>

                            <div
                                className="d-flex"
                                style={{ "--color": "#" + item.color } as React.CSSProperties}
                            >
                                {item.icons.map((icon, i) => (
                                    <div
                                        key={i}
                                        className={"me-2 test-result-icon " + icon}
                                    />
                                ))}
                            </div>

                            <p className="mt-2">{item.lev}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}