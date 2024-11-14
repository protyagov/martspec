import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import appIds from "@/data/app-ids.json";
import ButtonApple from "@/atomic/atom/button-apple";
import { IconWrapper } from ".ladle/decorators";

export default {
    title: "Atom",
} satisfies StoryDefault;

export const ButtonAppleStory: Story = () => <ButtonApple appId={appIds["vitamin"]} appDownloadTitle={"Vitamin"} />;

ButtonAppleStory.decorators = [IconWrapper];
ButtonAppleStory.storyName = "ButtonApple";
