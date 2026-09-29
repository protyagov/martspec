import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import CardIconTitleText from "@/atomic/molecule/card-icon-title-text";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardIconTitleTextStory: Story = () => (
    <div className="waist-info-section">
        <div className="info-list row g-4">
            <div className="col-lg-4 d-flex">
                <CardIconTitleText
                    iconProps={{
                        icon: {
                            src: "/img/atom/icons/icon-patient.svg",
                            alt: _("WAIST.ALT4_1"),
                        },
                        title: _("WAIST.LIST3.LI1_HEAD"),
                    }}
                    text={_("WAIST.LIST3.LI1_TEXT")}
                    bgColor="#DDE9FF"
                />
            </div>
        </div>
    </div>
);

CardIconTitleTextStory.decorators = [PageWrapper];
CardIconTitleTextStory.storyName = "CardIconTitleText";
