import * as React from "react";
import _ from "@/i18n/locale";
import { RESULT_GROUPS } from "@/utils/color-test/constants";
import { ResultGroup, TestResult } from "@/utils/color-test/types";
import { lockedResultPlaceholder } from "@/utils/color-test/ranges/lockedResultPlaceholder";
import { ColorTestIcons } from "@/atomic/molecule/color-test-icons";

type Props = {
    result: TestResult;
    onSelect: (group: ResultGroup) => void;
};

const LOCKED_GROUPS: ResultGroup[] = ["G", "I", "O"];

export function ColorTestResultGrid({
    result,
    onSelect,
}: Props) {
    return (
        <div className="row g-4">
            {RESULT_GROUPS.map((group) => {
                const item = result[group];

                if (!item) return null;

                const isLocked =
                    LOCKED_GROUPS.includes(group);

                const displayData = isLocked
                    ? lockedResultPlaceholder
                    : item;

                return (
                    <div
                        key={group}
                        className="col-lg-4 col-sm-6 col-12"
                        role="button"
                        onClick={() => {
                            if (!isLocked) {
                                onSelect(group);
                            }
                        }}
                    >
                        <div
                            className={`block bg-gray color-test-result-card ${isLocked ? "locked" : ""
                                }`}
                        >
                            <h3 className="color-test-result-title">
                                {_(
                                    `COLOR_TEST.GROUP_TITLE_${group}`
                                )}
                            </h3>

                            {isLocked ? (
                                <div className="locked-icons mt-3">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            ) : (
                                <ColorTestIcons
                                    icons={displayData.icons}
                                    color={displayData.color}
                                    className="mt-3 test-result-icons"
                                />
                            )}

                            <p className="mt-3 color-test-result-level">
                                {isLocked
                                    ? lockedResultPlaceholder.text
                                    : _(
                                        `COLOR_TEST._${item.lev}`
                                    )}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}