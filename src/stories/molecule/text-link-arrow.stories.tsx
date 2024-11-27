import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _, { Locale } from "@/i18n/locale";

import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const TextLinkArrowStory: Story = () => (
    <TextLinkArrow
        rightIcon={<RightArrowIcon />}
        text={_("VITAMIN.BTN_GO")}
        href={Locale.i18nLink(`vitamin/${"VITAMIN_B1".toLowerCase()}`)}
        color="#e95813"
        hoverColor="#ff8f32"
        hasUnderlineHover={true}
    />
);

TextLinkArrowStory.decorators = [PageWrapper];
TextLinkArrowStory.storyName = "TextLinkArrow";
