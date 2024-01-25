import * as React from "react";
export default function IconWithLoad(props) {
    if (props.isLoading)
        return React.createElement("i", { className: "fo icon-spin6 animate-spin" });
    return React.createElement("i", { className: props.isActive ? props.classActive : props.classPassive });
}
//# sourceMappingURL=icon-with-load.js.map