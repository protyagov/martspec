import React from "react";
import _ from "@/i18n/locale";

interface ContentsListProps {
    PAGE: "ANXIETY" | "PRODUCTIVITY" | "HARMONY" | "INDEPENDENCE" | "ENERGY" | "OPENNESS";
    CONTENTS_COUNT: number;
}

export default function ContentsList(props: ContentsListProps) {
    const { PAGE, CONTENTS_COUNT } = props;

    return (
        <div id="contents-list" className="list-group">
            {
                [...Array(CONTENTS_COUNT)].map((section, idx) => {
                    ++idx;
                    const id = "section-" + idx;
                    return (
                        <a
                            href={"#" + id}
                            key={id}
                            className="list-group-item list-group-item-action"
                        >
                            {_(PAGE + ".HEAD" + idx)}
                        </a>
                    )
                })
            }
        </div>
    )
}
