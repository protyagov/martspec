import React from "react";
import _ from "src/i18n/locale";

interface ContentsListProps {
    PAGE: "ANXIETY" | "PRODUCTIVITY" | "HARMONY" | "INDEPENDENCE" | "ENERGY" | "OPENNESS";
    CONTENTS_COUNT: number;
}


export default function ContentsList(props: ContentsListProps) {
    const { PAGE, CONTENTS_COUNT } = props;

    return (
        <div id="contents-list" className="d-flex flex-column">
            {
                [...Array(CONTENTS_COUNT)].map((para, idx) => (
                    <a
                        href={"#para-" + ++idx}
                        key={PAGE + "-para-" + idx}
                    >
                        {_(PAGE + ".HEAD" + idx)}
                    </a>
                ))
            }
        </div>
    )
}
