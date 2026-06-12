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
        const locales = Locale.SUPPORTED_LANG;
        const cleanPath: string[] = locales.includes(path[0]) ? path.slice(1) : path;

        const labelMap: Record<string, string> = {
            emotion: _("EMOTION.HEAD"),
            anxiety: _("EMOTION.LIST6.LI1_HEAD"),
            independence: _("EMOTION.LIST6.LI4_HEAD"),
            vitamin: _("VITAMIN.HEAD"),
            team: _("TEAM.HEAD"),
            about: _("ABOUT.HEAD"),
            careers: _("CAREERS.HEAD"),
            productivity: _("EMOTION.LIST6.LI2_HEAD"),
            bodymass: _("MASS.HEAD"),
            iron: _("IRON.HEAD"),
            magnesium: _("MAGNESIUM.HEAD"),
            waistline: _("WAIST.HEAD"),
            bodysize: _("SIZE.HEAD"),
            bodyzinc: _("ZINC.HEAD"),
            electrolyte: _("ELECTROLYTE.HEAD"),
            openness: _("EMOTION.LIST6.LI6_HEAD"),
            energy: _("EMOTION.LIST6.LI5_HEAD"),
            harmony: _("EMOTION.LIST6.LI3_HEAD"),
            biorhythms: _("BIORHYTHMS.HEAD"),
            calcium: _("CALCIUM.HEAD"),
            lion: _("VITAMIN.LION.NAME"),
            acai: _("VITAMIN.ACAI.NAME"),
            collagen: _("VITAMIN.COLLAGEN.NAME"),
            turmeric: _("VITAMIN.TURMERIC.NAME"),
            ginko: _("VITAMIN.GINKO.NAME"),
            adonis: _("SIZE.LIST.LI5_TEXT"),
            ashwagandha: _("VITAMIN.ASHWAGANDHA.NAME"),
            maca: _("VITAMIN.MACA.NAME"),
            chaga: _("VITAMIN.CHAGA.NAME"),
            fireweed: _("VITAMIN.FIREWEED.NAME"),
            tremella: _("VITAMIN.TREMELLA.NAME"),
            kombucha: _("VITAMIN.KOMBUCHA.NAME"),
        };

        const items: BreadcrumbItem[] = cleanPath.map((segment, index) => {
            const hrefSegments: string[] = locales.includes(path[0])
                ? [path[0], ...cleanPath.slice(0, index + 1)]
                : cleanPath.slice(0, index + 1);

            const href: string = "/" + hrefSegments.join("/");
            const label: string = labelMap[segment] ?? decodeURIComponent(segment);
            const current: boolean = index === cleanPath.length - 1;
            return { label, href, current };
        });

        const homeLabel: string = _("BREADCRUMB.HOME");
        const homeHref: string = locales.includes(path[0]) ? `/${path[0]}` : "/";

        return [{ label: homeLabel, href: homeHref }, ...items];
    }, [Locale.language]);
};
