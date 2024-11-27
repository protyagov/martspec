import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import ReviewCard from "@/atomic/molecule/review-card";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const ReviewCardStory: Story = () => (
    <div className="row review py-5 justify-content-center">
        <ul className="review__list" style={{ maxWidth: "378px" }}>
            <ReviewCard
                key="review_1"
                createdDate={String(new Date("2024-05-29"))}
                reviewText="Это приложение стало настоящим открытием для меня! С его помощью я легко контролирую ежедневный прием необходимых витаминов, микроэлементов и пищевых..."
                reviewerNickname="Vasprot"
                rating="5"
            />
        </ul>
    </div>
);

ReviewCardStory.decorators = [PageWrapper];
ReviewCardStory.storyName = "ReviewCard";
