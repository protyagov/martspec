import React from "react";
import _, { Locale } from "@/i18n/locale";
import type { Story, StoryDefault } from "@ladle/react";
import LinkStyledButton from "@/atomic/atom/link-styled-button";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const LinkStyledButtonStory: Story<{
		text: string;
		link: string;
		color?: string;
		className?: string;
}> = (props) => (
		<LinkStyledButton {...props} />
);

LinkStyledButtonStory.args = {
		text: _("ELECTROLYTE.BTN_MORE"),
		link: Locale.i18nLink(`coming-soon`),
		color: "#8079CC",
		className: "btn"
};

LinkStyledButtonStory.storyName = "LinkStyledButton";
