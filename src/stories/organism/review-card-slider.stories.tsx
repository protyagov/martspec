import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import appIds from "@/data/app-ids.json";

import { ReviewContext } from "@/atomic/molecule/review-context";
import ReviewCardSlider from "@/atomic/organism/review-card-slider";
import { useMediaQuery, useReviewData } from "@/hooks";
import { PageWrapper } from ".ladle/decorators";
import { IReview } from "@/model/IReviewData";
import { IFiller } from "@/model/IReviewWithFiller";

export default {
    title: "Organism",
} satisfies StoryDefault;

const codes = { countryCode: "us", languageCode: "en" } as const;
const appId = appIds["vitamin"];
const LG_BOOTSTRAP = 992;
const XXL_BOOTSTRAP = 1400;

function isFiller(r: IReview | IFiller): r is IFiller {
    return "filler" in r;
}

export const ReviewCardSliderStory: Story = () => (
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
            <ReviewCardSlider 
                reviews={[
                    {
                        id: { label: "1" },
                        author: { 
                            name: { label: "User 1" },
                            uri: { label: "https://example.com/user1" }
                        },
                        updated: { label: "2024-01-01" },
                        content: { 
                            label: "Great product!",
                            attributes: { type: "text" }
                        },
                        "im:rating": { label: "5" },
                        "im:version": { label: "1.0" },
                        title: { label: "Review 1" },
                        link: {
                            attributes: {
                                rel: "alternate",
                                type: "text/html",
                                href: "https://example.com/review1"
                            }
                        },
                        "im:voteSum": { label: "10" },
                        "im:voteCount": { label: "2" },
                        "im:contentType": {
                            attributes: {
                                term: "Application",
                                label: "Application"
                            }
                        }
                    },
                    {
                        id: { label: "2" },
                        author: { 
                            name: { label: "User 2" },
                            uri: { label: "https://example.com/user2" }
                        },
                        updated: { label: "2024-01-02" },
                        content: { 
                            label: "Amazing service!",
                            attributes: { type: "text" }
                        },
                        "im:rating": { label: "4" },
                        "im:version": { label: "1.0" },
                        title: { label: "Review 2" },
                        link: {
                            attributes: {
                                rel: "alternate",
                                type: "text/html",
                                href: "https://example.com/review2"
                            }
                        },
                        "im:voteSum": { label: "8" },
                        "im:voteCount": { label: "2" },
                        "im:contentType": {
                            attributes: {
                                term: "Application",
                                label: "Application"
                            }
                        }
                    },
                    {
                        id: { label: "3" },
                        author: { 
                            name: { label: "User 3" },
                            uri: { label: "https://example.com/user3" }
                        },
                        updated: { label: "2024-01-03" },
                        content: { 
                            label: "Highly recommended!",
                            attributes: { type: "text" }
                        },
                        "im:rating": { label: "5" },
                        "im:version": { label: "1.0" },
                        title: { label: "Review 3" },
                        link: {
                            attributes: {
                                rel: "alternate",
                                type: "text/html",
                                href: "https://example.com/review3"
                            }
                        },
                        "im:voteSum": { label: "15" },
                        "im:voteCount": { label: "3" },
                        "im:contentType": {
                            attributes: {
                                term: "Application",
                                label: "Application"
                            }
                        }
                    }
                ]} 
            />
        </div>
    </ReviewContext.Provider>
);

ReviewCardSliderStory.storyName = "ReviewCardSlider";
