import * as React from "react";


interface ButtonGroupProps {
    onChoice?: (value: string) => void;
    header: string;
    items: ButtonGroupItem[];
    selectedId?: string;
}

interface ButtonGroupItem {
    id: any;
    name: string;
    icon?: string;
}


export function ButtonGroup(props: ButtonGroupProps) {
    function renderButtons() {
        return props.items.map(x =>
            <button type="button" key={x.id} className={`btn btn-lg ${x.id == props.selectedId ? "rr-btn-group-selected" : ""}`}
                onClick={() => props.onChoice(x.id)}>{x.name}</button>
        )
    }

    return <div className="rr-btn-group">
        <label className="control-label">{props.header}</label>
        <br />
        <div className="btn-group" role="group" aria-label="Recommend to friend">
            {renderButtons()}
        </div>
    </div>
}

