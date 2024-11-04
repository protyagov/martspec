import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import ImageI18N from "@/atomic/atom/img-i18n";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const ImageI18NStory: Story<{
		src: string;
		alt?: string;
		cls?: string;
		h: number;
		w: number;
}> = (props) => (
		<ImageI18N {...props} />
);

ImageI18NStory.args = {
		src: "/img/page/vitamin/vitamin-home-en.webp",
		alt: 'Track the most essential vitamins directly on your wrist',
		cls: 'mx-auto my-4 img-fluid',
		h: 512,
		w: 512
};

ImageI18NStory.storyName = "ImageI18N";
