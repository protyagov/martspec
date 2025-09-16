import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import { SendReviewsLink, AllReviewsLink } from "@/atomic/organism/review-link";
import { PageWrapper } from ".ladle/decorators";
import { ReviewContext } from "@/atomic/molecule/review-context";
import appIds from "@/data/app-ids.json";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const ReviewLinkStory: Story = () => (
    <ReviewContext.Provider
        value={{
            data: {
                reviews: [],
                appId: appIds["vitamin"],
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
        }}
    >
        <ul className="d-flex flex-column gap-4">
            <li><SendReviewsLink /></li> 
            <li><AllReviewsLink /></li>
        </ul>
    </ReviewContext.Provider>
);

ReviewLinkStory.decorators = [PageWrapper];
ReviewLinkStory.storyName = "ReviewLink";
