import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import appIds from "@/data/app-ids.json";
import _, { Locale } from "@/i18n/locale";

import Review from "@/atomic/prototype/review";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Prototype",
} satisfies StoryDefault;

export const ReviewStory: Story = () => (
    <Review
        appId={appIds["vitamin"]}
        codes={{
            countryCode: Locale.countryCode,
            languageCode: Locale.language,
        }}
        text={{
            head: _("REVIEW.HEAD"),
            description: _("REVIEW.DESCRIPTION"),
            link: _("REVIEW.LINK_ALL_REVIEWS"),
            fillerCard: {
                head: [_("REVIEW.FILLER_CARD.HEAD1"), _("REVIEW.FILLER_CARD.HEAD2"), _("REVIEW.FILLER_CARD.HEAD3")],
                link: _("REVIEW.FILLER_CARD.LINK"),
            },
        }}
    />
);

ReviewStory.decorators = [PageWrapper];
ReviewStory.storyName = "Review";
