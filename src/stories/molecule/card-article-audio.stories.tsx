import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";
import acaiData from "@/data/article/vitamin/acai/acai-en.json";

import CardAudio from "@/atomic/molecule/card-article-audio";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;



export const CardArticleAudioStory: Story = () => {
    const leftColumn = acaiData.BODY.find((item: any) => item.LEFT_COLUMN)?.LEFT_COLUMN;

    if (!leftColumn) return <div>No audio data</div>;
    
    return (
    <div style={{maxWidth: "385px"}}>
        <style>{`
            .ms-base-page .article-section__left-audio h3 {
                color: #fff;
                font-size: 3rem;
                font-family: os5, sans-serif;
                margin: 0 0 0.5rem;
                padding: 0;
                line-height: 1.2;
                }
            `}
        </style>
        <CardAudio
            iconSrc={leftColumn.ICON}
            iconAlt={leftColumn.IMG_ALT}
            content={leftColumn.CONTENT}
            audioUrl={leftColumn.AUDIO_URL}
            backgroundImage={leftColumn.BG_IMAGE}
        />
    </div>
    )
};

CardArticleAudioStory.decorators = [PageWrapper];
CardArticleAudioStory.storyName = "CardArticleAudio"