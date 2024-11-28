import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import NavigationBar from "@/atomic/organism/navbar";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const NavigationBarStory: Story = () => {
    return (
        <section>
            <NavigationBar />
        </section>
    );
};

NavigationBarStory.decorators = [PageWrapper];
NavigationBarStory.storyName = "Navigation Bar";
