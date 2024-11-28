import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import CardTitleText from "@/atomic/molecule/card-title-text";
import { PageWrapper } from ".ladle/decorators";

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

CardTitleTextStory.decorators = [PageWrapper];
CardTitleTextStory.storyName = "CardTitleText";
