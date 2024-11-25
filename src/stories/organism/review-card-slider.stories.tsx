import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";
import { ReviewContext } from "@/atomic/molecule/review-context";
import ReviewCardSlider from "@/atomic/organism/review-card-slider";
import { useMediaQuery, useReviewData } from "@/hooks";

export default {
    title: "Organism",
} satisfies StoryDefault;

const codes = { countryCode: "us", languageCode: "en" } as const;
const appId = appIds["vitamin"];
const LG_BOOTSTRAP = 992;
const XXL_BOOTSTRAP = 1400;

export const ReviewCardSliderStory: Story = () => {
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);
    const isTablet = useMediaQuery(`(max-width: ${XXL_BOOTSTRAP}px)`);

    const arrLength = isMobile ? 1 : isTablet ? 2 : 3;

    const { reviews } = useReviewData({
        codes,
        arrLength,
        appId,
    });

    if (!reviews) return <></>;

    return (
        <ReviewContext.Provider
            value={{
                data: {
                    reviews: reviews.slice(0, arrLength),
                    appId,
                    countryCode: codes.countryCode,
                },
                text: {
                    head: _("REVIEW.HEAD"),
                    description: _("REVIEW.DESCRIPTION"),
                    link: _("REVIEW.LINK_ALL_REVIEWS"),
                    fillerCard: {
                        head: [
                            _("REVIEW.FILLER_CARD.HEAD1"),
                            _("REVIEW.FILLER_CARD.HEAD2"),
                            _("REVIEW.FILLER_CARD.HEAD3"),
                        ],
                        link: _("REVIEW.FILLER_CARD.LINK"),
                    },
                },
            }}
        >
            <section>
                <div className="row review py-5">
                    <ReviewCardSlider />
                </div>
            </section>
        </ReviewContext.Provider>
    );
};

ReviewCardSliderStory.storyName = "ReviewCardSlider";
