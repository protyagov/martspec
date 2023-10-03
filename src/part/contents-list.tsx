import React from "react";
import _, { Locale } from "src/i18n/locale";

interface ContentsListProps {
    PAGE: "ANXIETY" | "PRODUCTIVITY" | "HARMONY" | "INDEPENDENCE" | "ENERGY" | "OPENNESS";
    CONTENTS_COUNT: number;
}


export default function ContentsList(props: ContentsListProps) {
    const { PAGE, CONTENTS_COUNT } = props;

    return (
        <div id="#contents-list" className="">
            {
                [...Array(CONTENTS_COUNT)].map((li, idx) => (
                    <a href={"#contents-item-" + ++idx}>{_(PAGE + ".HEAD" + idx)}</a>
                ))
            }
        </div>
    )
}
