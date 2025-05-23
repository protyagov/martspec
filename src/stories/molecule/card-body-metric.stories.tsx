import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import CardBodyMetric from "@/atomic/molecule/card-body-metric";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardBodyMetricStory: Story = () => (
    <div className="d-flex flex-column gap-5"  style={{ minWidth: "290px" }}>
        <CardBodyMetric 
            title="Плечи"
            actionLink={{
                text: "Как измерять",
                href: "",
            }}
            primaryColor={"#FD7E14"}
            linkHoverColor={"#ff8f32"}
            bgImg={{src: "/img/page/body-size/body-circumferences.svg", width: 181, height: 87}}
            hasUnderlineHover={true}
        />
        <CardBodyMetric 
            title="Трицепс"
            actionLink={{
                text: "Как измерять",
                href: "",
            }}
            primaryColor={"#639C35"}
            linkHoverColor={"#76B34B "}
            bgImg={{src: "/img/page/body-size/skinfold-measurement.svg", width: 69, height: 94}}
            hasUnderlineHover={true}
        />
    </div>
);

CardBodyMetricStory.decorators = [PageWrapper];
CardBodyMetricStory.storyName = "CardBodyMetric";
