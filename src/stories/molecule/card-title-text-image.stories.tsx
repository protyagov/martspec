import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleTextImageStory: Story = () => (
    <div style={{maxWidth: "380px"}}>
        <CardTitleTextImage
            title={_("VITAMIN.LIST1.LI1_HEAD")}
            text={_("VITAMIN.LIST1.LI1_TEXT")}
            imgSrc="/img/page/vitamin/vitamin-easy-use-en.webp"
            imgH={239}
            imgW={400}
            imgAlt={_("VITAMIN.ALT6")}
        />
    </div>
);

CardTitleTextImageStory.decorators = [PageWrapper];
CardTitleTextImageStory.storyName = "CardTitleTextImage";
