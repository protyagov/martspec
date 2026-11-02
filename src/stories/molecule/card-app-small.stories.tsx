import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _, { Locale } from "@/i18n/locale";


import CardAppSmall from "@/atomic/molecule/card-app-small";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardAppSmallStory: Story = () => (
    <div style={{maxWidth: "410px"}}>
            <style>{`
            .card-app-small {
                box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
                border: 1px solid #E5E7EB;
                background-color: #FFFFFF;
            }
            .card-app-small h1 {
                margin: 0 0 0.25rem 0;
            }
            .card-app-small h2 {
                margin: 0 0 0.5rem 0;
            }
            .card-app-small p {
                font-size: 1.5rem;
            }
        `}</style>
        <CardAppSmall
            iconSrc="/img/page/vitamin/vitamin-ring-icon-main-page.svg"
            iconAlt={_("VITAMIN.ICO1")}
            title={_("VITAMIN.HEAD1")}
            subtitle={_("VITAMIN.SUBHEAD1")}
            content={_("VITAMIN.TEXT1")}
            button={{
                buttonType: "ButtonChevronRight",
                text: _("VITAMIN.BUTTON_OPEN_NUTRIENTS"),
                link: Locale.i18nLink("vitamin"),
                color: "#1686FF",
            }}
            backgroundColor="#FFF"
        />
    </div>
);

CardAppSmallStory.decorators = [PageWrapper];
CardAppSmallStory.storyName = "CardAppSmall";