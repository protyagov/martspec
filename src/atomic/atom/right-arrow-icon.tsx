import React, { SVGProps } from "react";

export default function RightArrowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-label="right arrow icon"
            width="1em"
            height="1em"
            viewBox="0 0 19 9"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="m15.172.965 3.182 3.182a.5.5 0 0 1 0 .707l-3.182 3.182a.5.5 0 1 1-.708-.707L16.793 5H1a.5.5 0 0 1 0-1h15.793l-2.329-2.328a.5.5 0 1 1 .708-.707Z" />
        </svg>
    );
}
