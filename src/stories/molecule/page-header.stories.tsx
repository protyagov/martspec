import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import PageHeader from "@/atomic/molecule/page-header";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const PageHeaderStory: Story = () => (
    <div className="ms-base-page pb-5">
        <PageHeader
            title={_("MISSION.HEAD")}
            subtitleLevel1={_("MISSION.ABOUT_1")}
            appId={1}
            appDownloadTitle={_("FOOTER.APPLE_BTN.ALT")}
            imgSrc="/img/mission.svg"
            imgAlt={_("MISSION.IMG")}
            imgH={300}
            imgW={391}
        />
    </div>
);

PageHeaderStory.decorators = [PageWrapper];
PageHeaderStory.storyName = "PageHeader";
