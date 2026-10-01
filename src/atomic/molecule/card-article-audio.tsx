import React from "react";
import ReactMarkdown from "react-markdown";

type CardAudioProps = {
    iconSrc: string;
    iconAlt: string;
    content: string;
    audioUrl: string;
    backgroundImage?: string;
    backgroundColor?: string;
};

const CardAudio: React.FC<CardAudioProps> = ({
    iconSrc,
    iconAlt,
    content,
    audioUrl,
    backgroundImage,
    backgroundColor = "#F4F5F8",
}) => {
    return (
        <aside 
            className="article-section__left-audio"
            style={{
                backgroundColor,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            }}
        >

            <img src={iconSrc} alt={iconAlt} width={50} height={50} />

            <ReactMarkdown>{content}</ReactMarkdown>

            <audio controls src={audioUrl} className="w-100">
                Your browser does not support the audio element.
            </audio>
        </aside>
    );
};

export default CardAudio;