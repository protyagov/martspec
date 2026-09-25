import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import { ReviewContext } from "@/atomic/molecule/review-context";
import appIds from "@/data/app-ids.json";
import ReviewCard from "@/atomic/molecule/review-card";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ReviewCardStory: Story = () => {
    return (
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
                themeColor: "#1686FF",
            }}
        >
            <div className="row review py-5 justify-content-center">
                <ul className="review__list" style={{ maxWidth: "378px" }}>
                    <ReviewCard
                        key="review_1"
                        createdDate={String(new Date("2024-05-29"))}
                        reviewText="Это приложение стало настоящим открытием для меня! С его помощью я легко контролирую ежедневный прием необходимых витаминов, микроэлементов и пищевых добавок, отслеживаю свой прогресс и не забываю принимать их вовремя. Особенно удобно, что вся информация собрана в одном месте, а интерфейс простой и понятный."
                        reviewerNickname="Vasprot"
                        rating="5"
                        bgImage={new URL("@/img/org/background-review-white.svg", import.meta.url).href}
                        reviewLink="https://apps.apple.com/ru/app/id123456789?action=write-review"
                        readMoreText={_("REVIEW.READ_MORE_LINK")}
                        hasUnderlineHover={false}
                    />
                </ul>
            </div>
        </ReviewContext.Provider>
    );
};

ReviewCardStory.decorators = [PageWrapper];
ReviewCardStory.storyName = "ReviewCard";
