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
                {...{
                    name: "ALEVTYNA",
                    title: "ENGINEER_WEB",
                    avatar: "/img/page/team/team_alevtyna.webp",
                    link: "",
                    text: "Dapibus sit mollis nec sed odio. Dictumst. Pellentesque sapien quam, interdum dolor consectetur amet",
                }}
            />
        </div>
    </div>
);

TeamMemberStory.decorators = [PageWrapper];
TeamMemberStory.storyName = "TeamMember";
