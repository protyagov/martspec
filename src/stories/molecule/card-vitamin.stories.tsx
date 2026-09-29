import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _, { Locale } from "@/i18n/locale";

import CardVitamin from "@/atomic/molecule/card-vitamin";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

const foodAdditives = [
    { id: "ACAI", category: "berry" },
    { id: "ASHWAGANDHA", category: "extract" },
    { id: "CHAGA", category: "mushroom" },
];

export const CardVitaminStory: Story = () => (
    <div className="vitamin">
        <section className="row mt-4 mt-lg-5 pt-4">
            <div className="col-12 d-flex flex-column">
                <ul className="d-grid vitamin-list">
                    <li>
                        <CardVitamin
                            title={_("VITAMIN.VITAMIN_A.HEAD")}
                            subtitle={_("VITAMIN.VITAMIN_A.NAME")}
                            description={_("VITAMIN.VITAMIN_A.DESK")}
                            actionLink={{
                                text: _("VITAMIN.BTN_GO"),
                                href: Locale.i18nLink("vitamin/vitamin_a"),
                            }}
                            bgColor="#fff3e9"
                            primaryColor="#e95813"
                            linkHoverColor="#ff8f32"
                            bgImg={{
                                src: "/img/page/vitamin/vitamin-card-fat-soluble-bg.svg",
                                width: 128,
                                height: 92,
                            }}
                        />
                    </li>
                    {foodAdditives.map(({ id, category }) => (
                        <li key={id}>
                            <CardVitamin
                                title={_(`VITAMIN.${id}.HEAD`)}
                                subtitle={_(`VITAMIN.${id}.NAME`)}
                                category={_(`VITAMIN.${id}.CATEGORY`)}
                                description={_(`VITAMIN.${id}.DESK`)}
                                iconSrc={`/img/page/vitamin/vitamin-card-icon-${category}.svg`}
                                actionLink={{
                                    text: _("VITAMIN.BTN_GO"),
                                    href: Locale.i18nLink(`vitamin/${id.toLowerCase()}`),
                                }}
                                bgColor="#ECD6EAA3"
                                primaryColor="#AD43D7"
                                linkHoverColor="#CB30E0"
                                bgImg={{
                                    src: "/img/page/vitamin/vitamin-card-FoodAdditives-bg.svg",
                                    width: 100,
                                    height: 160,
                                    position: "bottom",
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </div>
);

CardVitaminStory.decorators = [PageWrapper];
CardVitaminStory.storyName = "CardVitamin";
