import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import CardImage from "@/atomic/molecule/card-image";
import _, { Locale } from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardImageStory: Story = () => {

    const currentLanguage = Locale.language;
    const imgSrc = `/img/page/vitamin/vitamin-watches-${currentLanguage}.webp`;

    return (
        <div className="col col-md-12 row-cols-xl-3 d-flex justify-content-center align-items-center">
            <CardImage
                imgSrc={imgSrc}
                imgH={720}
                imgW={664}
                imgAlt={_("VITAMIN.ALT4")}
                bgColor={"#F2F2F5"}
            />
        </div>
    );
}

CardImageStory.storyName = "CardImage";
