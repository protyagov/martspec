import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import CardTitleText from "@/atomic/molecule/card-title-text";
import _, { Locale } from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleTextStory: Story = () => (
    <div style={{maxWidth: "385px"}}>
        <CardTitleText
            title={_("VITAMIN.LIST1.LI3_HEAD")}
            text={_("VITAMIN.LIST1.LI3_TEXT")}
            bgColor="#E5EEFF"
        />
    </div>
);

CardTitleTextStory.storyName = "CardTitleText";
