import * as React from "react";

type Props = {
    id: number;
    color: string;
    selected?: boolean;
    onClick: (id: number) => void;
};

export function ColorSwatch({
    id,
    color,
    selected = false,
    onClick,
}: Props) {
    return (
        <button
            type="button"
            className={`sector ${selected ? "selected" : ""}`}
            style={{ background: `#${color}` }}
            onClick={() => onClick(id)}
            aria-pressed={selected}
        />
    );
}