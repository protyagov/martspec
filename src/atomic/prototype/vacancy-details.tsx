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
    const [vacancyData, setVacancyData] = useState<VacancyData | null>(null);
    const [data, setData] = useState<CareerData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/data/career-${lang}.json`);
            if (!response.ok) return;

            const result = await response.json();
            setVacancyData(result.POSITIONS[position]);
            setData(result);
        };

        fetchData();
    }, [position, lang]);

    if (!vacancyData || !data) {
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
                            <h1>{vacancyData.TITLE}</h1>
                            <p className="p" style={{ fontWeight: 'bold' }}>{data.PAY}</p>
                            <p style={{ color: '#212529' }}>{data.FORMAT}</p>
                        </div>
                        <p style={{ color: '#212529', marginBottom: '0' }}>
                            {vacancyData.DESC}
                        </p>
                    </div>
                </section>

                <section className='row'>
                    <h2>{data.EXPECTATIONS_H2}</h2>
                    <div className="row row-no-padding col-12">
                        {vacancyData.EXPECTATIONS.map((expectation: Expectation, index: number) => (
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
                    <h2>{data.CONDITIONS_H2}</h2>
                    <ul>
                        {data.CONDITIONS.map((condition: string, index: number) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </section>

                <section className='row'>
                    <h2>{data.FEATURES_H2}</h2>
                    <h3>{data.FEATURES_H3}</h3>
                    <ul>
                        {data.FEATURES.map((feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <div className='row'>
                        <h2>{data.RESPONSE_H2}</h2>
                        <p>{data.RESPONSE}</p>
                        <div>
                            <button className='mt-2 ms-btn-large'>{data.RESPONSE_BTN}</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default VacancyDetails;
