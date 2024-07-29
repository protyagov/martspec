import React, { useEffect, useState } from 'react';
import NavigationBar from "@/atomic/organism/navbar";
import BulletList from "@/atomic/molecule/bullet-list";
import { Footer } from "@/atomic/organism/footer";

interface VacancyDetailsProps {
    position: string;
    lang: string; 
}

interface Expectation {
    title: string;
    items: string[];
}

interface VacancyData {
    title: string;
    description: string;
    expectations: Expectation[];
}

const internshipConditions = [
    "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
    "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
    "— Работа из дома на своем устройстве",
    "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
];

const featuresOfWork = [
    "— Дружелюбная и вдохновляющая атмосфера стартапа",
    "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
    "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
];

const VacancyDetails: React.FC<VacancyDetailsProps> = ({ position, lang }) => {
    const [data, setData] = useState<VacancyData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/data/career-${lang}.json`);
            if (!response.ok) return;

            const result = await response.json();
            setData(result[position]);
        };

        fetchData();
    }, [position, lang]);

    if (!data) {
        return <p>Вакансия не найдена</p>;
    }

    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new vacancy-details">
                <section>
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{data.title}</h1>
                            <p className="p" style={{ fontWeight: 'bold' }}>Не оплачивается</p>
                            <p style={{ color: '#212529' }}>Стажировка, удаленная работа</p>
                        </div>
                        <p style={{ color: '#212529', marginBottom: '0' }}>
                            {data.description}
                        </p>
                    </div>
                </section>

                <section className='row'>
                    <h2>Ожидания от кандидата</h2>
                    <div className="row row-no-padding col-12">
                        {data.expectations.map((expectation: Expectation, index: number) => (
                            <div className="col-lg-6-start" key={index}>
                                <h3 className="h3">{expectation.title}</h3>
                                <BulletList
                                    items={expectation.items}
                                    iconColor="#FFB340"
                                    className="col-bullet-list"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section className='row'>
                    <h2>Условия стажировки</h2>
                    <ul>
                        {internshipConditions.map((condition: string, index: number) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </section>

                <section className='row'>
                    <h2>Особенности</h2>
                    <h3>Почему стоит выбрать нас:</h3>
                    <ul>
                        {featuresOfWork.map((feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <div className='row'>
                        <h2>Отклик на стажировку</h2>
                        <p>
                            1. Заполните Google форму и отправьте ее нам<br />
                            2. Мы все внимательно изучим и обязательно вернемся к вам с обратной связью в кратчайшие сроки
                        </p>
                        <div>
                            <button className='mt-2 ms-btn-large'>Откликнуться</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default VacancyDetails;