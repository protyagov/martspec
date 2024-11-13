import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import VitaminItem from "@/atomic/molecule/vitamin-item";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const VitaminItemStory: Story = () => (
    <section>
        <VitaminItem id={"VITAMIN_A"} />
    </section>
);

VitaminItemStory.storyName = "VitaminItem";
