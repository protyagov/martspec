import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _, { Locale } from "@/i18n/locale";

import VacancyStatus from "@/atomic/atom/vacancy-status";
import { IconWrapper, PageWrapper } from ".ladle/decorators";
import enCareer from "@/data/career-en.json";
import deCareer from "@/data/career-de.json";
import arCareer from "@/data/career-ar.json";
import esCareer from "@/data/career-es.json";
import frCareer from "@/data/career-fr.json";
import hiCareer from "@/data/career-hi.json";
import jaCareer from "@/data/career-ja.json";
import ptCareer from "@/data/career-pt.json";
import ruCareer from "@/data/career-ru.json";
import ukCareer from "@/data/career-uk.json";
import zhCareer from "@/data/career-zh.json";

const dictionaries: Record<string, any> = {
    en: enCareer,
    de: deCareer,
    ar: arCareer,
    es: esCareer,
    fr: frCareer,
    hi: hiCareer,
    ja: jaCareer,
    pt: ptCareer,
    ru: ruCareer,
    uk: ukCareer,
    zh: zhCareer,
};

const lang = Locale.language;

if (dictionaries[lang]) {
    Locale["_polyglot"].extend(dictionaries[lang]);
} else {
    Locale["_polyglot"].extend(enCareer); 
}
Locale["_polyglot"].locale(lang);

export default {
    title: "Atom/VacancyStatus",
    decorators: [IconWrapper, PageWrapper],
} satisfies StoryDefault;

const text = {
    OPEN: _("VACANCY_STATUS.OPEN"),
    CLOSED: _("VACANCY_STATUS.CLOSED"),
};

export const Open: Story = () => <VacancyStatus isOpened={true} text={text} />;

export const Closed: Story = () => <VacancyStatus isOpened={false} text={text} />;
