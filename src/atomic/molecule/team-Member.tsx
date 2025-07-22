import React, { useState } from "react";
import _, { Locale }  from "@/i18n/locale";

interface TeamMemberProps {
    id: string;
    size?: number;
    isBig?: boolean;
    
    // color: "white" | "black";
}
interface TeamData {
    POSITIONS: {
        [key: string]: string;
    };
    MEMBERS: {
        [key: string]: {
            NAME: string;
            TITLE: string;
            AVATAR: string;
            LINK: string;
        };
    };
}



export default function TeamMember(props: TeamMemberProps) {

    const [teamData, setTeamData] = React.useState<TeamData | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/data/team/${Locale.language}.json`);
            if (!response.ok) return;
            const result = await response.json();
            setTeamData(result.TEAM);
        };
        fetchData();
    }, [Locale.language]);

    if (!teamData || !teamData.MEMBERS[props.id]) return null;

    
    
    const member = teamData.MEMBERS[props.id];
    const position = teamData.POSITIONS[member.TITLE];
    const iconSize = props.size || 22;

    const svgAttrs = {
        width: iconSize,
        height: iconSize,
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };

    const item = _(member.LINK);
    function ItemLink() {
        if (item.length > 0 && item.includes("https://")) {
            return (
                <a href={_(member.LINK)} target="_blank" rel="noopener" aria-label="LinkedIn" className="linkedin-icon">
                    <svg {...svgAttrs}>
                        <circle cx="11" cy="11" r="10" fill="#258DE3" />
                        {/* <title>{_("TEAM." )}</title> */}
                        <path
                            id="Vector"
                            d="M22 13.4906V22H17.2646V14.0094C17.2646 12.0377 16.5739 10.6887 14.8969 10.6887C13.6143 10.6887 12.8251 11.6226 12.5291 12.4529C12.4304 12.7641 12.3319 13.1792 12.3319 13.6981V22H7.59645C7.59645 22 7.69501 8.50944 7.59645 7.16044H12.3319V9.23577C12.9238 8.1981 14.1076 6.74528 16.5739 6.74528C19.6322 6.74528 22 8.92459 22 13.4906ZM2.66361 0C1.08519 0 0 1.14149 0 2.59432C0 4.04714 0.986481 5.18863 2.56505 5.18863C4.24219 5.18863 5.22867 4.04714 5.22867 2.59432C5.32737 1.03766 4.34075 0 2.66361 0ZM0.295974 22H5.0314V7.16044H0.295974V22Z"
                            fill="white"
                            transform="scale(0.5) translate(11, 11)"
                        />
                    </svg>
                </a>
            );
        }
    }

    if (props.isBig) {
            return (
                <div className="col-12 col-lg-6 mb-4 ">
                    <div className="card bg-card rounded-5 w-100 overflow-hidden mb-0" style={{ minHeight: '300px' }}>
                        <div className="col-md-5 row g-0 mb-0 p-4">
                            <div className="col-md-5 h-100 p-0">
                                <img 
                                    src={member.AVATAR}
                                    onError={(e) => (e.currentTarget.src = "/img/team_placeholder.png")}
                                    alt={`${member.NAME} - ${position}`}
                                    className="rounded-5 w-100 object-fit-cover"
                                    style={{
                                objectPosition: 'top left',
                                minWidth: '320px',
                                minHeight: '290px'
                            }}
                                />
                            </div>
                            <div className="col-md-7 flex-grow-1 d-flex flex-column p-4 position-relative">
                                <div className="position-absolute top-0 end-0 ">
                                    <ItemLink />
                                </div>
                                <div className="mt-auto position-static" style={{ marginLeft: '20px' }}>
                                <h3 className="card-title-big ms-team-info-section-h4">{member.NAME}</h3>
                                <h5 className="card-subtitle-big text-muted">{position}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    return (
        <div className="col mb-2">
            <div className="card bg-card rounded-5 h-100 d-flex flex-column">
                <div className="p-4 pb-0">
                    <img
                        src={member.AVATAR}
                        onError={(e) => (e.currentTarget.src = "/img/team_placeholder.png")}
                        alt={`${member.NAME} - ${position}`}
                        className="img-card rounded-5"
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title text-black"> {member.NAME} </h4>
                    <h5 className="card-subtitle text-muted pe-4"> {_(position)}
                        <div className="position-absolute end-0 bottom-0 p-3">
                        <ItemLink />
                        </div>
                    </h5> 
                </div>
            </div>  
        </div>
    );
}
