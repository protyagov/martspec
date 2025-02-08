import React from "react";
import _, { Locale } from "@/i18n/locale";
import type { Story, StoryDefault } from "@ladle/react";

import ButtonChevronRight from "@/atomic/atom/button-chevron-right";
import { IconWrapper, PageWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const ButtonChevronRightStory: Story<{
    text: string;
    link: string;
    className?: string;
}> = (props) => (
    <div className="btn-chevron-right">
        <ButtonChevronRight {...props} />
    </div>
);

ButtonChevronRightStory.args = {
    text: _("ELECTROLYTE.BTN_MORE"),
    link: Locale.i18nLink(`coming-soon`),
    className: "",
};

ButtonChevronRightStory.decorators = [IconWrapper,PageWrapper];
ButtonChevronRightStory.storyName = "ButtonChevronRight";
