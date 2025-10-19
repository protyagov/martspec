import { useMemo } from "react";
import _, { Locale } from "@/i18n/locale";

interface BreadcrumbItem {
    label: string;
    href: string;
    current?: boolean;
}

export const useBreadcrumbs = (): BreadcrumbItem[] => {
    return useMemo(() => {
        const path: string[] = window.location.pathname.split("/").filter(Boolean);
        const supportedLanguages: string[] = ["ar", "de", "en", "es", "fr", "hi", "ja", "pt", "ru", "uk", "zh"];
        const cleanPath: string[] = supportedLanguages.includes(path[0]) ? path.slice(1) : path;

        const labelMap: Record<string, string> = {
            emotion: _("BREADCRUMB.EMOTION"),
            anxiety: _("BREADCRUMB.ANXIETY"),
            independence: _("BREADCRUMB.INDEPENDENCE"),
            vitamin: _("BREADCRUMB.VITAMIN"),
            team: _("BREADCRUMB.TEAM"),
            about: _("BREADCRUMB.ABOUT"),
            careers: _("BREADCRUMB.CAREERS"),
            productivity: _("BREADCRUMB.PRODUCTIVITY"),
            bodymass: _("BREADCRUMB.BODYMASS"),
            iron: _("BREADCRUMB.IRON"),
            magnesium: _("BREADCRUMB.MAGNESIUM"),
            waistline: _("BREADCRUMB.WAISTLINE"),
            bodysize: _("BREADCRUMB.BODYSIZE"),
            bodyzinc: _("BREADCRUMB.BODYZINC"),
            electrolyte: _("BREADCRUMB.ELECTROLYTE"),
            openness: _("BREADCRUMB.OPENNESS"),
            energy: _("BREADCRUMB.ENERGY"),
            harmony: _("BREADCRUMB.HARMONY"),
            biorhythms: _("BREADCRUMB.BIORHYTHMS"),
        };

        const items: BreadcrumbItem[] = cleanPath.map((segment, index) => {
            const hrefSegments: string[] = supportedLanguages.includes(path[0])
                ? [path[0], ...cleanPath.slice(0, index + 1)]
                : cleanPath.slice(0, index + 1);

            const href: string = "/" + hrefSegments.join("/");
            const label: string = labelMap[segment] ?? decodeURIComponent(segment);
            const current: boolean = index === cleanPath.length - 1;
            return { label, href, current };
        });

        const homeLabel: string = _("BREADCRUMB.HOME");
        const homeHref: string = supportedLanguages.includes(path[0]) ? `/${path[0]}` : "/";

        return [{ label: homeLabel, href: homeHref }, ...items];
    }, [Locale.language]);
};
