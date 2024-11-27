import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import Accordion from "@/atomic/molecule/accordion";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const AccordionStory: Story = () => (
    <section style={{ height: "15%" }}>
        <Accordion
            title={_(`VITAMIN.VITAMIN_FAT.NAME`)}
            bgColor="#fff3e9"
            expandIconColor={"e95813"}
            bgImg={{ src: "/img/page/vitamin/vitamin-list-header-fat-bg.svg", width: 114, height: 132 }}
            mobileBgResized={false}
            defaultExpanded={false}
        >
            <p className="pt-4">Here is the content inside the accordion.</p>
        </Accordion>
    </section>
);

AccordionStory.decorators = [PageWrapper];
AccordionStory.storyName = "Accordion";
