import React from "react";
import _, { Locale } from "@/i18n/locale";
import type { Story, StoryDefault } from "@ladle/react";

import ButtonLinkStylePlain from "@/atomic/atom/buttonLinkStylePlain";
import ButtonLinkStyleAnimated from "@/atomic/atom/buttonLinkStyleAnimated";

import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Atom/Buttons",
} satisfies StoryDefault;

// ---- Plain Button Story ----
export const ButtonLinkStylePlainStory: Story<{ text: string; link: string }> = ({ text, link }) => (
    <div className="card-title-text-button">
        <ButtonLinkStylePlain text={text} link={link} />
    </div>
);

ButtonLinkStylePlainStory.args = {
    text: _("ELECTROLYTE.BTN_MORE"),
    link: Locale.i18nLink("coming-soon"),
};

ButtonLinkStylePlainStory.decorators = [PageWrapper];
ButtonLinkStylePlainStory.storyName = "ButtonLinkStylePlain";

// ---- Animated Button Story ----
export const ButtonLinkStyleAnimatedStory: Story<{ text: string; link: string }> = ({ text, link }) => (
    <div className="card-title-text-button">
        <ButtonLinkStyleAnimated text={text} link={link} />
    </div>
);

ButtonLinkStyleAnimatedStory.args = {
    text: _("ELECTROLYTE.BTN_MORE"),
    link: Locale.i18nLink("coming-soon"),
};

ButtonLinkStyleAnimatedStory.decorators = [PageWrapper];
ButtonLinkStyleAnimatedStory.storyName = "ButtonLinkStyleAnimated";
