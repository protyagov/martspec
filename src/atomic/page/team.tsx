import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale";
import TeamMember from "src/atomic/molecule/team-Member";
import teamData from "src/data/team.json";
import PageHeader from "../molecule/page-header";

export default function Team() {

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 text-center ms-team">

            <PageHeader title="TEAM.HEAD" subtitleLevel2="TEAM.ABOUT" />

            <section>
                <div className=" d-flex flex-wrap justify-content-center members-list">
                    {
                        teamData.map(member => <TeamMember key={member.name} {...member} />)
                    }
                </div>
            </section>
        </div>

        <Footer />
    </>
}