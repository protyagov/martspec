import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _, { Locale } from "@/i18n/locale";

import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleTextButtonStory: Story = () => (
    <div className="row" style={{maxWidth: "1060px"}}>
        <CardTitleTextButton
            title={_("ELECTROLYTE.HEAD2")}
            textContent={[_("ELECTROLYTE.DESC2_1"), _("ELECTROLYTE.DESC2_2")]}
            buttonText={_("ELECTROLYTE.BTN_MORE")}
            buttonLink={Locale.i18nLink(`coming-soon`)}
            buttonColor={"#8079CC"}
        />
    </div>
);
CardTitleTextButtonStory.decorators = [PageWrapper];
CardTitleTextButtonStory.storyName = "CardTitleTextButton";
