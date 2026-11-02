import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _, { Locale } from "@/i18n/locale";

import CardAppLarge from "@/atomic/molecule/card-app-large";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardAppLargeStory: Story = () => (
    <div>
        <CardAppLarge
        iconSrc="/img/page/vitamin/logo-vitamin.svg"
        iconAlt={_("VITAMIN.ICO")}
        title={_("VITAMIN.HEAD")}
        subtitle={_("VITAMIN.SUBHEAD")}
        content={_("VITAMIN.TEXT")}
        button={{
            text: _("VITAMIN.BUTTON_OPEN"),
            link: Locale.i18nLink("vitamin"),
            color: "#1686FF",
        }}
        imageSrc="/img/page/vitamin/Img-Our-Products-Vitamin-en.webp"
        imageAlt={_("VITAMIN.IMG")}
        isImageOnLeft={false}
        backgroundColor="rgb(249, 249, 255)"
        />
    </div>
);

CardAppLargeStory.decorators = [PageWrapper];
CardAppLargeStory.storyName = "CardAppLarge";