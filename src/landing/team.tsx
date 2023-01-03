import * as React from "react";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import _ from "src/i18n/locale";
import TeamMember from "src/part/teamMember";

export default function Team() {
    const [teamData, setTeamData] = React.useState([]);

    React.useEffect(() => {
        const fetchTeamData = async (): Promise<void> => {
            const response = await fetch("/data/team.json");
            if (!response.ok) return;
            setTeamData(await response.json());
        };
        fetchTeamData();
    }, []);

    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 ms-team">
            <h1 className="text-center pt-5">{_("TEAM.HEAD")}</h1>
            <p className="text-center">{_("TEAM.SUBHEAD")}</p>
            <section>
                <div className="d-flex flex-wrap justify-content-center members-list">
                    {
                        teamData.map(member => <TeamMember key={member.name} {...member} />)
                    }
                </div>
            </section>
        </div>
          
        <Footer />
    </>
}