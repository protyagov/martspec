import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleTextImageCustomStory: Story = () => (
    <div style={{maxWidth: "385px"}}>
        <CardTitleTextImageCustom
            title={_("SIZE.LIST1.LI2_HEAD")}
            text={_("SIZE.LIST1.DESC2")}
            bgColor="#E5F4D9"
            imgSrc=""
            imgPosition="left-bottom"
            shadow={true}
            cardHeight="200px"
            imgH="100px"
        />
    </div>
);

CardTitleTextImageCustomStory.decorators = [PageWrapper];
CardTitleTextImageCustomStory.storyName = "CardTitleTextImageCustom";