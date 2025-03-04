import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import IconTitleTextElem from "@/atomic/molecule/icon-title-text-elem";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const IconTitleTextElemStory: Story = () => (
    <div className="vitamin list-with-icons d-flex justify-content-center align-items-center p-0 m-0">
        <IconTitleTextElem
            icon={{
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("VITAMIN.ALT5_1"),
            }}
            title={_("VITAMIN.LIST4.LI1_HEAD")}
            subtitle={_("VITAMIN.LIST4.LI1_TEXT")}
        />
    </div>
);

IconTitleTextElemStory.decorators = [PageWrapper];
IconTitleTextElemStory.storyName = "IconTitleTextElem";
