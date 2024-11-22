import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { Footer } from "@/atomic/organism/footer";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const FooterStory: Story = () => (
    <article className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Footer />
    </article>
);

FooterStory.storyName = "Footer";
