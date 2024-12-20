import React from "react";
import _, { Locale } from "@/i18n/locale";
import type { Story, StoryDefault } from "@ladle/react";

import LinkStyledButton from "@/atomic/atom/link-styled-button";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const LinkStyledButtonStory: Story<{
    text: string;
    link: string;
    color?: string;
    className?: string;
}> = (props) => (
    <div className="card-title-text-button">
        <LinkStyledButton {...props} />
    </div>
);

LinkStyledButtonStory.args = {
    text: _("ELECTROLYTE.BTN_MORE"),
    link: Locale.i18nLink(`coming-soon`),
    color: "#8079CC",
    className: "btn",
};

LinkStyledButtonStory.decorators = [PageWrapper];
LinkStyledButtonStory.storyName = "LinkStyledButton";
