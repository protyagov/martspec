import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _ from "@/i18n/locale";
import TeamMember from "@/atomic/molecule/team-Member";
import teamData from "@/data/team.json";
import PageHeader from "@/atomic/molecule/page-header";
import ScrollButton from "../atom/scroll-button";

export default function Team() {
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page pb-5 text-center ms-team">
                <PageHeader title={_("TEAM.HEAD")} subtitleLevel2={_("TEAM.ABOUT")} />

                <section>
                    <div className=" d-flex flex-wrap justify-content-center members-list">
                        {teamData.map((member) => (
                            <TeamMember key={member.name} {...member} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
