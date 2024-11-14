import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import CallToAction from "@/atomic/organism/call-to-action";
import _ from "@/i18n/locale";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const CallToActionStory: Story = () => (
    <section>
        <CallToAction
            title={_("VITAMIN.HEAD6")}
            subtitle={_("VITAMIN.DESC6")}
            appId={2}
            appDownloadTitle={_("VITAMIN.DWN")}
            imgSrc="/img/org/call-to-action/vitamin/vitamin-screen-app-en.webp"
            imgAlt={_("VITAMIN.ALT3")}
        />
    </section>
);

CallToActionStory.storyName = "CallToAction";
