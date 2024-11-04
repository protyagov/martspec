import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import StarIcon from "@/atomic/atom/star-icon";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const StarIconStory: Story = () => <StarIcon />;

StarIconStory.storyName = "StarIcon";
