import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import CardIconTitleText from "@/atomic/molecule/card-icon-title-text";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardIconTitleTextStory: Story = () => (
    <div className="waist" style={{ maxWidth: "400px", minHeight: "306px", display: "flex" }}>
        <CardIconTitleText
            iconProps={{
                icon: {
                    src: "/img/atom/icons/icon-patient.svg",
                    alt: _("VITAMIN. ALT5_1"),
                },
                title: "Повышает риск возникновения проблем со здоровьем",
            }}
            text={"Висцеральный жир провоцирует воспаление, нарушает работу гормонов и повышает риск ожирения, диабета, болезней сердца, инсульта, рака, нарушения сна, артрита, сексуальной дисфункции, депрессии"}
            bgColor="#DDE9FF"
        />
    </div>
);

CardIconTitleTextStory.decorators = [PageWrapper];
CardIconTitleTextStory.storyName = "CardIconTitleText";
