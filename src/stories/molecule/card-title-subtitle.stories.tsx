import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import CardTitleSubtitle, { CardTitleSubtitleProps } from "@/atomic/molecule/card-title-subtitle";
import _ from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleSubtitleStory: Story<CardTitleSubtitleProps> = (props) => (
		<CardTitleSubtitle {...props} />
);

CardTitleSubtitleStory.args = {
		title: _("VITAMIN.LIST5.LI1_HEAD"),
		subtitle: _("VITAMIN.LIST5.LI1_TEXT"),
		bgImg: {
				src: "/img/page/vitamin/vitamin-track-fat-soluble-bg.svg",
				widthPerc: "90%",
				alignX: "start",
				alignY: "start",
				translateX: "-20%",
				translateY: "-22%",
		}
};

CardTitleSubtitleStory.storyName = "CardTitleSubtitle";
