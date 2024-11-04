import React from "react";
import { Locale } from "@/i18n/locale";
import type { Story, StoryDefault } from "@ladle/react";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const ImageI18NStory: Story<{
	src: string;
	alt?: string;
	cls?: string;
	h: number;
	w: number;
}> = ({src, alt, cls, h, w}) => (
		<img
				src={src.replace("-en.", `-${Locale.language}.`)}
				width={w}
				height={h}
				className={cls}
				alt={alt}
				onError={(e) => (e.currentTarget.src = src)}
		/>
);

ImageI18NStory.args = {
		src: "/img/page/vitamin/vitamin-home-en.webp",
		alt: 'Track the most essential vitamins directly on your wrist',
		cls: 'mx-auto my-4 img-fluid',
		h: 512,
		w: 512
};

ImageI18NStory.storyName = "ImageI18N";
