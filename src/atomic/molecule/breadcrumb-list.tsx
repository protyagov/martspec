import React from "react";
import { BreadcrumbLink } from "../atom/breadcrumb-link";

interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
}

export const BreadcrumbList = ({ items }: { items: BreadcrumbItem[] }) => (
    <ol className="breadcrumb">
        {items.map((item, idx) => (
            <li
                key={idx}
                className={`breadcrumb-item${item.current ? " active" : ""}`}
                aria-current={item.current ? "page" : undefined}
            >
                <BreadcrumbLink label={item.label} href={item.href} isCurrent={item.current} />
            </li>
        ))}
    </ol>
);
