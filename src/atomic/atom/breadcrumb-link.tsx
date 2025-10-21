import React from "react";

interface BreadcrumbLinkProps {
    label: string;
    href?: string;
    isCurrent?: boolean;
}

export const BreadcrumbLink = ({ label, href, isCurrent }: BreadcrumbLinkProps) => {
    if (isCurrent) {
        return <>{label}</>;
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.assign(href!);
    };

    return (
        <a href={href} onClick={handleClick}>
            {label}
        </a>
    );
};
