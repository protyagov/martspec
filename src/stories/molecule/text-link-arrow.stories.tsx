import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import _, { Locale } from "@/i18n/locale";

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

TextLinkArrowStory.storyName = "TextLinkArrow";
