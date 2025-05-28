import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";

import { AllReviewsLink } from "@/atomic/organism/review-link";
import { ReviewContext } from "@/atomic/molecule/review-context";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ReviewLinkStory: Story = () => (
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
            themeColor: "#1686FF"
        }}
    >
        <div className="row review py-5 justify-content-center">
            <AllReviewsLink />
        </div>
    </ReviewContext.Provider>
);

ReviewLinkStory.decorators = [PageWrapper];
ReviewLinkStory.storyName = "ReviewLink"; 