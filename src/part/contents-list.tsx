import React from "react";
import _ from "src/i18n/locale";

interface ContentsListProps {
    PAGE: "ANXIETY" | "PRODUCTIVITY" | "HARMONY" | "INDEPENDENCE" | "ENERGY" | "OPENNESS";
    contentsIDs: string[];
}


export default function ContentsList(props: ContentsListProps) {
    const { PAGE, contentsIDs } = props;

    return (
        <div id="contents-list" className="d-flex flex-column">
            {
                contentsIDs.map((id, idx) => (
                    <a href={"#" + id} key={id}>{_(PAGE + ".HEAD" + ++idx)}</a>
                ))
            }
        </div>
    )
}
