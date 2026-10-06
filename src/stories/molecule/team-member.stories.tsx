import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import TeamMember from "@/atomic/molecule/team-Member";
import { PageWrapper } from ".ladle/decorators";

const member = {
    NAME: "John Doe",
    TITLE: "Frontend Developer",
    AVATAR: "https://i.pravatar.cc/300?img=12",
    LINK: "https://example.com",
};

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const TeamMemberStory: Story = () => (
    <div className="ms-base-page pb-5 text-center ms-team">
        <div className="d-flex flex-wrap justify-content-center members-list gap-4">
            <TeamMember member={member} isWide={false} />
            <TeamMember member={member} isWide={true} />
        </div>
    </div>
);

TeamMemberStory.decorators = [PageWrapper];
TeamMemberStory.storyName = "TeamMember";
