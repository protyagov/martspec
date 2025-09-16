import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";

import ReviewHead from "@/atomic/molecule/review-head";
import { ReviewContext } from "@/atomic/molecule/review-context";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ReviewHeadStory: Story = () => (
    <ReviewContext.Provider
        value={{
            data: {
                reviews: [],
                appId: appIds["electrolyte"],
                countryCode: "ru",
            },
            text: {
                head: _("REVIEW.HEAD"),
                description: _("REVIEW.DESCRIPTION"),
                link: _("REVIEW.LINK_ALL_REVIEWS"),
                readMoreLink: _("REVIEW.READ_MORE_LINK"),
                fillerCard: {
                    head: [_("REVIEW.FILLER_CARD.HEAD1"), _("REVIEW.FILLER_CARD.HEAD2"), _("REVIEW.FILLER_CARD.HEAD3")],
                    link: _("REVIEW.FILLER_CARD.LINK"),
                },
            },
            themeColor: "#1686FF"
        }}
    >
        <div className="row review py-5 justify-content-center">
            <ReviewHead />
        </div>
    </ReviewContext.Provider>
);

ReviewHeadStory.decorators = [PageWrapper];
ReviewHeadStory.storyName = "ReviewHead";
