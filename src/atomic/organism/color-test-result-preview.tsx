import * as React from "react";
import { TestResult, ResultGroup } from "@/utils/color-test/types";
import _ from "@/i18n/locale";
import { ColorTestIcons } from "@/atomic/molecule/color-test-icons";

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

    const groupTitle = _(`COLOR_TEST.GROUP_TITLE_${activeGroup}`);
    const groupDescription = _(`COLOR_TEST.GROUP_DESC_${activeGroup}`);
    const levelDescription = _(`COLOR_TEST.${item.lev}`);
    const levelShort = _(`COLOR_TEST._${item.lev}`);

    return (
        <div className="mt-5 color-test-result-preview">
            <div className="mb-4">
                <h2 className="color-test-group-title">
                    {groupTitle}
                </h2>

                <ColorTestIcons
                    icons={item.icons}
                    color={item.color}
                    className="mt-3"
                />

                <p className="mt-3 color-test-result-level">
                    {levelShort}
                </p>
            </div>

            <div className="mb-4">
                <h3 className="color-test-section-title">
                    {_(`COLOR_TEST.GROUP_DESC`)}
                </h3>

                <p className="color-test-description whitespace-pre-line">
                    {groupDescription}
                </p>
            </div>

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

                        <h2>{levelShort}</h2>
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="result-preview-card result-preview-percent">
                        <span className="result-preview-label">
                            {_(`COLOR_TEST.PERC`)}
                        </span>

                        <h2>{item.perc}%</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}