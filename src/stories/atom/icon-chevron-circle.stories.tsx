import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import IconChevronCircle from "@/atomic/atom/icon-chevron-circle";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const IconChevronCircleStory: Story = () => (
    <div 
        className="accordion-header d-flex justify-content-center mx-auto p-4 overflow-hidden border-0 rounded-4" 
        style={{ backgroundColor: "rgb(255, 243, 233)", maxWidth: "100px"}}
    >
        <IconChevronCircle />
    </div>
    
);

IconChevronCircleStory.storyName = "IconChevronCircle";
