import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import ReviewCard from "@/atomic/molecule/review-card";

export default {
    title: "Organism",
} satisfies StoryDefault;

export const ReviewCardSliderStory: Story = () => (
    <div className="row review py-5">
        <ul className="review__list">
            <ReviewCard
                key="review_1"
                createdDate={String(new Date("2024-05-30"))}
                reviewText="Это приложение стало настоящим открытием для меня! С его помощью я легко контролирую ежедневный прием необходимых витаминов, микроэлементов и пищевых..."
                reviewerNickname="Vasprot"
                rating="5"
            />
            <ReviewCard
                key="review_2"
                createdDate={String(new Date("2023-11-04"))}
                reviewText="Приложение супер. Я все время забывала выпить лекарство, теперь мне приходит уведомление и все сохраняется. Добавьте функцию автосохранения, а то некоторые изменения появляются только после..."
                reviewerNickname="Oxy39"
                rating="5"
            />

            <ReviewCard
                key="review_3"
                createdDate={String(new Date("2023-10-08"))}
                reviewText="Выбирал из подобных приложений. Это лучшее. Гибкие настройки. Возможность добавить самостоятельно лекарства. Описание витаминов. Интеграция в приложение здоровье. И что..."
                reviewerNickname="варлдпа"
                rating="5"
            />
        </ul>
    </div>
);

ReviewCardSliderStory.storyName = "ReviewCardSlider";
