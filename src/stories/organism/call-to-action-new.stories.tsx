import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import ButtonApple from "@/atomic/atom/button-apple";
import appIds from "@/data/app-ids.json";

import CallToAction from "@/atomic/organism/call-to-action-new";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const CallToActionStory: Story = () => (
    <section>
        <CallToAction
            title={_("VITAMIN.HEAD6")}
            subtitle={_("VITAMIN.DESC6")}
            button={<ButtonApple appId={appIds["vitamin"]} appDownloadTitle={"Vitamin"} />}
            textList={""}
            appId={2}
            appDownloadTitle={_("VITAMIN.DWN")}
            imgSrc="/img/org/call-to-action/vitamin/vitamin-screen-app-en.webp"
            imgAlt={_("VITAMIN.ALT3")}
        />
    </section>
);

CallToActionStory.decorators = [PageWrapper];
CallToActionStory.storyName = "CallToActionNew";
