import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";

import ReviewDescription from "@/atomic/molecule/review-description";
import { ReviewContext } from "@/atomic/molecule/review-context";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ReviewDescriptionStory: Story = () => (
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
            <ReviewDescription />
        </div>
    </ReviewContext.Provider>
);

ReviewDescriptionStory.decorators = [PageWrapper];
ReviewDescriptionStory.storyName = "ReviewDescription";
