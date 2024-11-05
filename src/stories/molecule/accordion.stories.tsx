import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import Accordion from "@/atomic/molecule/accordion";
import _ from "@/i18n/locale";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const AccordionStory: Story = () => (
    <Accordion
        title={_(`VITAMIN.VITAMIN_FAT.NAME`)}
        bgColor="#fff3e9"
        expandIconColor={"e95813"}
        bgImg={{ src: "/img/page/vitamin/vitamin-list-header-fat-bg.svg", width: 114, height: 132 }}
        mobileBgResized={false}
        defaultExpanded={true}
    >
      <p>Here is the content inside the accordion.</p>
    </Accordion>
);

AccordionStory.storyName = "Accordion";
