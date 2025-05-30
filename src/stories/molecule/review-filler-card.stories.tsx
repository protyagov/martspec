import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";

import ReviewFillerCard from "@/atomic/molecule/review-filler-card";
import { ReviewContext } from "@/atomic/molecule/review-context";
import { SendReviewsLink } from "@/atomic/organism/review-link";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ReviewFillerCardStory: Story = () => (
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
            <ul className="review__list" style={{ maxWidth: "378px" }}>
                <ReviewFillerCard 
                    link={<SendReviewsLink />} 
                    posIndex={1} 
                    key={_("REVIEW.FILLER_CARD.HEAD2")} 
                    bgImage={new URL("@/img/org/second-review-bg.svg", import.meta.url).href}
                />
            </ul>
        </div>
    </ReviewContext.Provider>
);

ReviewFillerCardStory.decorators = [PageWrapper];
ReviewFillerCardStory.storyName = "ReviewFillerCard";
