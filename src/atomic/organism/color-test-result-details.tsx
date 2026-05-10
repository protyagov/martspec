import * as React from "react";
import _ from "@/i18n/locale";
import {
    TestResult,
    ResultGroup,
} from "@/utils/color-test/types";

type Props = {
    result: TestResult;
    activeGroup: ResultGroup;
};

export function ColorTestResultDetails({
    result,
    activeGroup,
}: Props) {
    const item = result[activeGroup];

    if (!item) return null;

    const groupDescription = _(
        `COLOR_TEST.GROUP_DESC_${activeGroup}`
    );

    const levelDescription = _(
        `COLOR_TEST.${item.lev}`
    );

    const levelShort = _(
        `COLOR_TEST._${item.lev}`
    );

    return (
        <div className="mt-5 color-test-result-details">
            <div className="mb-4">
                <div className="mb-5">
                    <p className="color-test-level-description whitespace-pre-line">
                        {levelDescription}
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-12">
                        <div className="result-preview-card result-preview-level">
                            <span className="result-preview-label">
                                {_(`COLOR_TEST.LEV`)}
                            </span>

                            <h2 className="result-preview-label__h2">{levelShort}</h2>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="result-preview-card result-preview-percent">
                            <span className="result-preview-label">
                                {_(`COLOR_TEST.PERC`)}
                            </span>

                            <h2 className="result-preview-label__h2">{item.perc}%</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="color-test__h2">
                    {_(`COLOR_TEST.GROUP_DESC`)}
                </h2>

                <p className="mb-0 result-preview-label">
                    {groupDescription}
                </p>
            </div>


        </div>
    );
}