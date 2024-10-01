import React, { SVGProps } from "react";

export default function IconChevronCircle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-label="chevron icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            stroke="currentColor"
            fill="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fill="none" stroke="none" d="M0 0h40v40H0z" />
            <circle cx="20" cy="20" r="20" stroke="none" />
            <path d="m14.166 18.388 5.5 5.5 5.5-5.5" />
        </svg>
    );
}
