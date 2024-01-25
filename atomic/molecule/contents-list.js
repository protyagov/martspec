import React from "react";
import _ from "src/i18n/locale";
export default function ContentsList(props) {
    const { PAGE, CONTENTS_COUNT } = props;
    return (React.createElement("div", { id: "contents-list", className: "list-group" }, [...Array(CONTENTS_COUNT)].map((section, idx) => {
        ++idx;
        const id = "section-" + idx;
        return (React.createElement("a", { href: "#" + id, key: id, className: "list-group-item list-group-item-action" }, _(PAGE + ".HEAD" + idx)));
    })));
}
//# sourceMappingURL=contents-list.js.map