import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import _ from "@/i18n/locale";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const IconTitleTextListStory: Story = () => (
    <section className="bg-gray vitamin">
        <div className="row">
            <div className="col-12">
                <IconTitleTextList
                    items={[
                        {
                            icon: {
                                src: "/img/atom/icons/icon-defense.svg",
                                alt: _("VITAMIN.ALT5_1"),
                            },
                            title: _("VITAMIN.LIST4.LI1_HEAD"),
                            subtitle: _("VITAMIN.LIST4.LI1_TEXT"),
                        },
                        {
                            icon: {
                                src: "/img/atom/icons/icon-sync.svg",
                                alt: _("VITAMIN.ALT5_2"),
                            },
                            title: _("VITAMIN.LIST4.LI2_HEAD"),
                            subtitle: _("VITAMIN.LIST4.LI2_TEXT"),
                        },
                        {
                            icon: {
                                src: "/img/atom/icons/icon-no-auth.svg",
                                alt: _("VITAMIN.ALT5_3"),
                            },
                            title: _("VITAMIN.LIST4.LI3_HEAD"),
                            subtitle: _("VITAMIN.LIST4.LI3_TEXT"),
                        },
                        {
                            icon: {
                                src: "/img/atom/icons/icon-no-ads.svg",
                                alt: _("VITAMIN.ALT5_4"),
                            },
                            title: _("VITAMIN.LIST4.LI4_HEAD"),
                            subtitle: _("VITAMIN.LIST4.LI4_TEXT"),
                        },
                        {
                            icon: {
                                src: "/img/atom/icons/icon-bell.svg",
                                alt: _("VITAMIN.ALT5_5"),
                            },
                            title: _("VITAMIN.LIST4.LI5_HEAD"),
                            subtitle: _("VITAMIN.LIST4.LI5_TEXT"),
                        },
                        {
                            icon: {
                                src: "/img/atom/icons/icon-apple-health.svg",
                                alt: _("VITAMIN.ALT5_6"),
                            },
                            title: _("VITAMIN.LIST4.LI6_HEAD"),
                            subtitle: _("VITAMIN.LIST4.LI6_TEXT"),
                        },
                    ]}
                />
            </div>
        </div>
    </section>
);

IconTitleTextListStory.storyName = "IconTitleTextList";
