import React from "react";
import _ from "@/i18n/locale";
import type { StoryDefault } from "@ladle/react";
import PillText from "@/atomic/atom/pill-text";

const CenterDecorator = (Story: () => JSX.Element) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
    >
        <Story />
    </div>
);

export default {
    title: "Atom/PillText",
    decorators: [CenterDecorator],
} satisfies StoryDefault;

export const open = () => (
    <PillText text={_("VACANCY.VACANCY_STATUS.OPEN")} backgroundColor="#E5F4D9" textColor="#219B3F" />
);

export const closed = () => (
    <PillText text={_("VACANCY.VACANCY_STATUS.CLOSED")} backgroundColor="#FFF3E9" textColor="#FD7E14" />
);
