import * as React from "react";
import { Icon } from "@/utils/color-test/constants";

type Props = {
    icons: Icon[];
    color: string;
    className?: string;
};

export function ColorTestIcons({
    icons,
    color,
    className = "",
}: Props) {
    return (
        <div
            className={`d-flex align-items-center ${className}`}
            style={
                {
                    "--color": `#${color}`,
                } as React.CSSProperties
            }
        >
            {icons.map((icon, i) => (
                <div
                    key={i}
                    className={`test-result-icon ${icon}`}
                />
            ))}
        </div>
    );
}