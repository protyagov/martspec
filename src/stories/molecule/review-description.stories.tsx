import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";

import ReviewDescription from "@/atomic/molecule/review-description";
import { ReviewContext } from "@/atomic/molecule/review-context";

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
                fillerCard: {
                    head: [_("REVIEW.FILLER_CARD.HEAD1"), _("REVIEW.FILLER_CARD.HEAD2"), _("REVIEW.FILLER_CARD.HEAD3")],
                    link: _("REVIEW.FILLER_CARD.LINK"),
                },
            },
        }}
    >
        <div className="row review py-5">
            <ReviewDescription />
        </div>
    </ReviewContext.Provider>
);

ReviewDescriptionStory.storyName = "ReviewDescription";
