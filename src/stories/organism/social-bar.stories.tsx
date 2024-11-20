import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import SocialBar from "@/atomic/organism/social-bar";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const SocialBarStory: Story = () => (
    <div
        className="col-md-4 col-12 d-flex flex-md-column flex-row-reverse px-0 icon-container"
        style={{ backgroundColor: "#2a3f54" }}
    >
        <SocialBar color="white" />
    </div>
);

SocialBarStory.storyName = "SocialBar";
