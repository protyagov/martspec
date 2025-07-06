import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import TeamMember from "@/atomic/molecule/team-Member";
import BigTeamMember from "@/atomic/molecule/team-Member";
import teamData from "@/data/team/team.json";
import ScrollButton from "../atom/scroll-button";
import Header from "@/atomic/organism/header";
import ImageI18N from "@/atomic/atom/img-i18n";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";

export default function Team() {
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page pb-5 ms-team row ms-team-info-section">
                <Header
                    title={_("TEAM.HEAD")}
                >
                    <p className="font-normal">{_("TEAM.ABOUT")}</p>
                </Header>
                <div className="">
                        <div className="row justify-content-center">
                            {teamData.slice(0, 2).map((member, index) => (
                                <TeamMember 
                                key={`big-${index}`} 
                                {...member} 
                                isBig={true} 
                                />
                            ))}
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center ">
                            {teamData.slice(2).map((member, index) => (
                                <TeamMember key={`normal-${index}`} 
                {...member}
                />
                            ))}
                        </div>
                    
                </div>
                <section>
                    <div className="card-body row d-flex g-4 justify-content-between ">
                        <div className="col-12 col-xxl-5 order-2 order-xxl-1">
                            <ImageI18N
                                src="/img/page/team/team_card.svg"
                                w={720}
                                h={315}
                            />
                        </div>
                        <div className="row col-12 col-xxl-6 order-1 order-xxl-2 d-flex justify-content-between g-4">
                            <CardTitleTextButton
                                title={_("TEAM.HEAD1")}
                                textContent={[_("TEAM.TEXT1_1")]}
                                buttonText={_("CAREERS.BUTTON3")}
                                buttonLink={Locale.i18nLink(`team`)}
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
