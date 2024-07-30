import React, { useEffect, useState } from 'react';
import NavigationBar from "@/atomic/organism/navbar";
import BulletList from "@/atomic/molecule/bullet-list";
import { Footer } from "@/atomic/organism/footer";

interface VacancyDetailsProps {
    position: string;
    lang: string;
}

interface Expectation {
    H3: string;
    UL: string[];
}

interface VacancyData {
    TITLE: string;
    DESC: string;
    EXPECTATIONS: Expectation[];
}

interface CareerData {
    NOT_FOUND: string,
    PAY: string;
    FORMAT: string;
    EXPECTATIONS_H2: string;
    CONDITIONS_H2: string,
    FEATURES_H2: string,
    FEATURES_H3: string,
    RESPONSE_H2: string,
    POSITIONS: {
        [key: string]: VacancyData;
    };
    CONDITIONS: string[];
    FEATURES: string[];
    RESPONSE: string;
    RESPONSE_BTN: string
}

const VacancyDetails: React.FC<VacancyDetailsProps> = ({ position, lang }) => {
    const [data, setData] = useState<VacancyData | null>(null);
    const [generalData, setGeneralData] = useState<CareerData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/data/career-${lang}.json`);
            if (!response.ok) return;

            const result = await response.json();
            setData(result.POSITIONS[position]);
            setGeneralData(result);
        };

        fetchData();
    }, [position, lang]);

    if (!data || !generalData) {
        let NOT_FOUND = '';
        switch (lang) {
            case 'ru':
                NOT_FOUND = 'Вакансия не найдена';
                break;
            case 'en':
                NOT_FOUND = 'Vacancy not found';
                break;
            default:
                NOT_FOUND = 'Vacancy not found';
                break;
        }
        return <p>{NOT_FOUND}</p>;
    }

    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new vacancy-details">
                <section>
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{data.TITLE}</h1>
                            <p className="p" style={{ fontWeight: 'bold' }}>{generalData.PAY}</p>
                            <p style={{ color: '#212529' }}>{generalData.FORMAT}</p>
                        </div>
                        <p style={{ color: '#212529', marginBottom: '0' }}>
                            {data.DESC}
                        </p>
                    </div>
                </section>

                <section className='row'>
                    <h2>{generalData.EXPECTATIONS_H2}</h2>
                    <div className="row row-no-padding col-12">
                        {data.EXPECTATIONS.map((expectation: Expectation, index: number) => (
                            <div className="col-lg-6-start" key={index}>
                                <h3 className="h3">{expectation.H3}</h3>
                                <BulletList
                                    items={expectation.UL}
                                    iconColor="#FFB340"
                                    className="col-bullet-list"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section className='row'>
                    <h2>{generalData.CONDITIONS_H2}</h2>
                    <ul>
                        {generalData.CONDITIONS.map((condition: string, index: number) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </section>

                <section className='row'>
                    <h2>{generalData.FEATURES_H2}</h2>
                    <h3>{generalData.FEATURES_H3}</h3>
                    <ul>
                        {generalData.FEATURES.map((feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <div className='row'>
                        <h2>{generalData.RESPONSE_H2}</h2>
                        <p>{generalData.RESPONSE}</p>
                        <div>
                            <button className='mt-2 ms-btn-large'>{generalData.RESPONSE_BTN}</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default VacancyDetails;
