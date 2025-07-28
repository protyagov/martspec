import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import TeamMember from "@/atomic/molecule/team-Member";
import ScrollButton from "../atom/scroll-button";
import Header from "@/atomic/organism/header";
import ImageI18N from "@/atomic/atom/img-i18n";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";

interface TeamMembers {
  [key: string]: {
    NAME: string;
    TITLE: string;
    AVATAR: string;
    LINK: string;
  };
}

export default function Team() {
    const [teamMembers, setTeamMembers] = React.useState<TeamMembers | null>(null);

    React.useEffect(() => {
    const fetchTeamData = async () => {
        const response = await fetch(`/data/team/${Locale.language}.json`);
        const data = await response.json();
        setTeamMembers(data);
    };
    fetchTeamData();
    },[Locale.language])

    const memberIds = Object.keys(teamMembers || {});

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page pb-5 ms-team row ms-team-info-section">
                <section className="mb-1 mt-1">
                <Header 
                    title={_("TEAM.HEAD")}
                >
                    <p className="font-normal">{_("TEAM.ABOUT")}</p>
                </Header>
                </section>

                <section className="mb-5 mt-1">
                <div className="d-none d-md-block">
                    <div className="row justify-content-center  mb-1 big-card-row">
                    {memberIds.slice(0, 2).map((memberId) => (
                        <TeamMember key={`wide-${memberId}`} member={teamMembers![memberId]} isWide={true} />
                    ))}
                    </div>
                    <div className="members-list row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                    {memberIds.slice(2).map((memberId) => (
                        <TeamMember key={`normal-${memberId}`} member={teamMembers![memberId]} />
                    ))}
                    </div>
                </div>
                <div className="d-md-none">
                    <div className="row row-cols-1 g-4 justify-content-center">
                    {memberIds.map((memberId) => (
                        <TeamMember key={`mobile-${memberId}`} member={teamMembers![memberId]} />
                    ))}
                    </div>
                </div>
                </section>

                <section className="m-1">
                    <div className="row d-flex justify-content-between g-4">
                        <div className="col-12 col-xxl-5 order-2 order-xxl-1">
                            <ImageI18N
                                src="/img/page/team/team_card.svg"
                                w={620}
                                h={360}
                                cls="ms-base-image mt-mob-xs mb-6"
                            />
                        </div>
                        <div className="col-12 col-xxl-6 order-1 order-xxl-2 ms-team-info-section-h2">
                            <CardTitleTextButton
                                title={_("TEAM.HEAD1")}
                                textContent={[_("TEAM.TEXT1_1")]}
                                buttonText={_("TEAM.BUTTON")}
                                buttonLink={`mailto:support@martspec.com?subject=Martspec Question&body=I have a question about your products.`}
                                buttonColor="#1686FF"   
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}