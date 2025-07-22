import React from "react";
import type { Story, StoryDefault } from "@ladle/react";

import TeamMember from "@/atomic/molecule/team-Member";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const TeamMemberStory: Story = () => (
    <div className="ms-base-page pb-5 text-center ms-team">
        <div className="d-flex flex-wrap justify-content-center members-list">
            <TeamMember
                id="ALEVTYNA"
                isBig={false}
            />
        </div>
    </div>
);

TeamMemberStory.decorators = [PageWrapper];
TeamMemberStory.storyName = "TeamMember";
