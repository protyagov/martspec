import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import CardVitamin from "@/atomic/molecule/card-vitamin";
import _, { Locale } from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardVitaminStory: Story = () => (
    <div style={{ maxWidth: "340px" }}>
        <CardVitamin 
            title={_(`VITAMIN.VITAMIN_A.HEAD`)}
            subtitle={_(`VITAMIN.VITAMIN_A.NAME`)}
            description={_(`VITAMIN.VITAMIN_A.DESK`)}
            actionLink={{
                text: _("VITAMIN.BTN_GO"),
                href: Locale.i18nLink(`vitamin/${"VITAMIN_A".toLowerCase()}`),
            }}
            bgColor={"#fff3e9"}
            primaryColor={"#e95813"}
            linkHoverColor={"#ff8f32"}
            bgImg={{src: "/img/page/vitamin/vitamin-card-fat-soluble-bg.svg", width: 128, height: 92}}
        />
    </div>
);

CardVitaminStory.storyName = "CardVitamin";
