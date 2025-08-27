import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import Header from "@/atomic/organism/header";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const HeaderStory: Story = () => {
    return (
        <div className="vitamin">
            <Header
                title={_("VITAMIN.HEAD")}
                appId={2}
                appDownloadTitle={_("VITAMIN.DWN")}
                imgSrc="/img/page/vitamin/vitamin-header-en.webp"
                imgAlt={_("VITAMIN.IMG")}
                imgH={531}
                imgW={722}
            >
                <ul className="header-content-list">
                    <li>{_("VITAMIN.ABOUT_1")}</li>
                    <li>{_("VITAMIN.ABOUT_2")}</li>
                    <li>{_("VITAMIN.ABOUT_3")}</li>
                </ul>
            </Header>
        </div>
    );
};

HeaderStory.decorators = [PageWrapper];
HeaderStory.storyName = "Header";
