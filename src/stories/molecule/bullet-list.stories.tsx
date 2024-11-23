import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import BulletList from "@/atomic/molecule/bullet-list";
import _ from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const BulletListStory: Story<{
    items: string[];
    iconColor: string;
    className?: string;
}> = (props) => (
    <div className="row justify-content-center">
        <div className="col-lg-6">
            <BulletList {...props} />
        </div>
    </div>
);

BulletListStory.args = {
    items: [
        _("EMOTION.LIST4.LI1_TEXT"),
        _("EMOTION.LIST4.LI2_TEXT"),
        _("EMOTION.LIST4.LI3_TEXT"),
        _("EMOTION.LIST4.LI4_TEXT"),
        _("EMOTION.LIST4.LI5_TEXT"),
        _("EMOTION.LIST4.LI6_TEXT"),
    ],
    iconColor: "#7B62FE",
    className: "bullet-list",
};

BulletListStory.storyName = "BulletList";
