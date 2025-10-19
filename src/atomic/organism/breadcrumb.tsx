import React from "react";
import { BreadcrumbList } from "../molecule/breadcrumb-list";

interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
}

export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
    if (!items || items.length === 0) return null;
    return (
        <nav
            className="breadcrumbs"
            aria-label="Breadcrumb"
        >
            <BreadcrumbList items={items} />
        </nav>
    );
};
