import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import VacancyStatus from "@/atomic/atom/vacancy-status";
import { IconWrapper, PageWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

// TODO: добавить локализацию
const text = { OPEN: "Вакансия открыта", CLOSED: "Набор приостановлен" };

export const VacancyStatusStory: Story = () => (
    <VacancyStatus isOpened={false} text={text} />
);

VacancyStatusStory.decorators = [IconWrapper, PageWrapper];
VacancyStatusStory.storyName = "VacancyStatus";
