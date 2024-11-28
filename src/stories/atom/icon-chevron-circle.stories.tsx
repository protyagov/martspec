import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import IconChevronCircle from "@/atomic/atom/icon-chevron-circle";
import { IconWrapper, PageWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const IconChevronCircleStory: Story = () => (
    <div>
        <IconChevronCircle />
    </div>
);

IconChevronCircleStory.decorators = [IconWrapper, PageWrapper];
IconChevronCircleStory.storyName = "IconChevronCircle";
