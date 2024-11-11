import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import CardTitleSubtitle, { CardTitleSubtitleProps } from "@/atomic/molecule/card-title-subtitle";
import _ from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleSubtitleStory: Story<CardTitleSubtitleProps> = (props) => (
    <div className="row row-cols-xl-2 row-cols-1 mb-0 p-0 g-4">
        <div className="col px-0">
            <ul className="row row-cols-2 p-0 g-4">
                <li key={props.title} className="col">
                    <CardTitleSubtitle {...props} />
                </li>
            </ul>
        </div>
    </div>
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
    },
};

CardTitleSubtitleStory.storyName = "CardTitleSubtitle";
