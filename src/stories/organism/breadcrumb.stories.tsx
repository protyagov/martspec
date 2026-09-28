import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { PageWrapper } from ".ladle/decorators";

import { Breadcrumb } from "@/atomic/organism/breadcrumb";

export default {
  title: "Organism",
} satisfies StoryDefault;

export const BreadcrumbStory: Story = () => {
  return (
    <Breadcrumb
      items={[
        {
          label: "Home",
          href: "/en",
        },
        {
          label: "Vitamin",
          href: "/en/vitamin",
        },
        {
          label: "Acai",
          href: "/en/vitamin/acai",
          current: true,
        },
      ]}
    />
  );
};

BreadcrumbStory.decorators = [PageWrapper];
BreadcrumbStory.storyName = "Breadcrumb";
