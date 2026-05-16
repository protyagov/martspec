import * as React from "react";

type Props = {
    id: number;
    color: string;
    selected?: boolean;
    onClick: (id: number) => void;
    hidden?: boolean;
};

export function ColorItem({
    id,
    color,
    selected = false,
    onClick,
}: Props) {
    return (
        <button
            type="button"
            className={`sector ${selected ? "selected" : ""}`}
            style={{
                backgroundColor: `#${color}`,
            }}
            onClick={() => onClick(id)}
            aria-pressed={selected}
        />
    );
}