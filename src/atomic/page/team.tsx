import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale";
import TeamMember from "src/atomic/molecule/teamMember";
import teamData from "src/data/team.json";
import PageHeader from "../molecule/page-header";

export default function Team() {

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 text-center ms-team">

            <PageHeader PAGE="TEAM" />

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