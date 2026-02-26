import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import NavigationBar from "@/atomic/organism/navbar";
import BulletList from "@/atomic/molecule/bullet-list";
import { Footer } from "@/atomic/organism/footer";
import PillText from "@/atomic/atom/pill-text";

interface VacancyDetailsProps {
    position: string;
}

interface Expectation {
    H3: string;
    UL: string[];
}

interface VacancyData {
    TITLE: string;
    DESC: string;
    EXPECTATIONS: Expectation[];
    APPLY_LINK: string;
    VACANCY_STATUS: string;
}

interface CareerData {
    PAY: string;
    FORMAT: string;
    EXPECTATIONS_H2: string;
    CONDITIONS_H2: string;
    FEATURES_H2: string;
    POSITIONS: {
        [key: string]: VacancyData;
    };
    CONDITIONS: string[];
    FEATURES: string[];
    RESPONSE_BTN: string;
    VACANCY_STATUS: {
        OPEN: string,
        CLOSED: string,    
    };
}

const VacancyDetails: React.FC<VacancyDetailsProps> = ({ position }) => {
    const [vacancyData, setVacancyData] = React.useState<VacancyData | null>(null);
    const [data, setData] = React.useState<CareerData | null>(null);

    React.useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`/data/career-${Locale.language}.json`);
            if (!response.ok) return;

            const result = await response.json();

            let key: string = "";

            if (position === "designer") {
                key = "DESIGNER";
            } else if (position === "ios-engineer") {
                key = "MOBILE_DEVELOPER";
            } else if (position === "frontend-engineer") {
                key = "FRONTEND";
            } else if (position === "qa-engineer") {
                key = "QUALITY_ASSURANCE";
            } else if (position === "business-analyst") {
                key = "BUSINESS_ANALYST";
            } else if (position === "copywriter") {
                key = "COPYWRITER";
            } else if (position === "marketologist") {
                key = "MARKETOLOGIST";
            }

            if (!key)
                throw new Error(
                    `the key var is undefined. This happened because the variable of the current position is:${position} does not match any of the predefined positions`
                );

            setVacancyData(result.POSITIONS[key]);
            setData(result);
            
        };

        fetchData();

    }, [position, Locale.language]);

    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new vacancy-details">
                {vacancyData && data && (
                    <>
                        <section>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1>{vacancyData.TITLE}</h1>
                                    <div>
                                        <PillText
                                            text={
                                                vacancyData.VACANCY_STATUS === "OPEN"
                                                    ? _("VACANCY.VACANCY_STATUS.OPEN")
                                                    : _("VACANCY.VACANCY_STATUS.CLOSED")
                                            }
                                            textColor={vacancyData.VACANCY_STATUS === "OPEN" ? "#219B3F" : "#FD7E14"}
                                            backgroundColor={
                                                vacancyData.VACANCY_STATUS === "OPEN" ? "#E5F4D9" : "#FFF3E9"
                                            }
                                        />
                                    </div>
                                    <p className="p">{data.PAY}</p>
                                    <p style={{ color: "#212529" }}>{data.FORMAT}</p>
                                </div>
                                <p style={{ color: "#212529", marginBottom: "0" }}>{vacancyData.DESC}</p>
                            </div>
                        </section>

                        <section className="row">
                            <h2>{data.EXPECTATIONS_H2}</h2>
                            <div className="row row-cols-lg-2 row-cols-1 p-0 g-4">
                                {vacancyData.EXPECTATIONS.map((expectation: Expectation, index: number) => (
                                    <div className="col" key={index}>
                                        <h3 className="mb-3">{expectation.H3}</h3>
                                        <BulletList
                                            items={expectation.UL}
                                            iconColor="#FFB340"
                                            className="col-bullet-list"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="row">
                            <h2>{data.CONDITIONS_H2}</h2>
                            <ul>
                                {data.CONDITIONS.map((condition: string, index: number) => (
                                    <li key={index}>{condition}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="row">
                            <h2>{data.FEATURES_H2}</h2>
                            <ul>
                                {data.FEATURES.map((feature: string, index: number) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="row">
                            <button
                                className="mt-2 ms-btn-large mb-6 w-auto"
                                onClick={() => window.open(vacancyData.APPLY_LINK, "_blank", "noopener,noreferrer")}
                            >
                                {data.RESPONSE_BTN}
                            </button>
                        </section>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default VacancyDetails;
