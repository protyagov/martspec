import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import TitleTextLinkCard from "@/atomic/molecule/title-text-link-card";
import _, { Locale } from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const TitleTextLinkCardStory: Story = () => (
    <div className="d-flex justify-content-center">
        <TitleTextLinkCard
            title={_("ELECTROLYTE.HEAD4")}
            text={_("ELECTROLYTE.DESC4_1")}
            link={{
                text: _("ELECTROLYTE.BTN_LINK"),
                href: "https://ods.od.nih.gov/factsheets/Calcium-Consumer",
            }}
            image="/img/page/electrolyte/calcium.webp"
            alt="calcium"
            gridColumnClass="col-xxl-6"
            additionalCardClass="electrolyte-card-style"
            hasShadow={true}
            bgColor="transparent"
            imageZIndex={-1}
            arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
            color="#8079CC"
            hoverColor="#6760b7"
        />
    </div>
);

TitleTextLinkCardStory.storyName = "TitleTextLinkCard";
