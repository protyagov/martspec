import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import TitleTextCard from "@/atomic/molecule/title-text-card";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const TitleTextCardStory: Story = () => (
    <div style={{ maxWidth: "793px" }}>
        <TitleTextCard
            title={_("EMOTION.LIST1.LI1_HEAD")}
            text={_("EMOTION.LIST1.LI1_TEXT")}
            bgColor="#EDE1FF"
            className="col-lg-8 col-md-6 w-100"
        />
    </div>
);

TitleTextCardStory.decorators = [PageWrapper];
TitleTextCardStory.storyName = "TitleTextCard";
