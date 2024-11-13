import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import { IconWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const RightArrowIconStory: Story<{
    items: object;
}> = (props) => <RightArrowIcon {...props.items} />;

RightArrowIconStory.args = {
    items: {
        style: { color: "#999" },
    },
};

RightArrowIconStory.decorators = [IconWrapper];
RightArrowIconStory.storyName = "RightArrowIcon";
