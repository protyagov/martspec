import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import StarIcon from "@/atomic/atom/star-icon";
import { IconWrapper, PageWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const StarIconStory: Story = () => <StarIcon />;

StarIconStory.decorators = [IconWrapper, PageWrapper];
StarIconStory.storyName = "StarIcon";
