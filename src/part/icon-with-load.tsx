import * as React from "react";

interface IconWithLoadProps {
    classActive: string;
    classPassive: string;
    isActive: boolean;
    isLoading: boolean;
}

//--------------------------------------------------------------------------------------------------
export default function IconWithLoad(props: IconWithLoadProps) {

    if (props.isLoading)
        return <i className="fo icon-spin6 animate-spin" />

    return <i className={props.isActive ? props.classActive : props.classPassive} />
}