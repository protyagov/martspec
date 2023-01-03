import * as React from "react";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";

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

        <div className="ms-base-page pb-5">
        </div>
          
        <Footer />
    </>
}