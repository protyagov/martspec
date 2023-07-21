import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";

export default function P7Emotion() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5 emotion">

            <section className="text-center">
                <div className="row">
                    <div className="col">
                        <img src="/img/emotion.png" className="ms-base-image" alt={_("EMOTION.IMG")} height={512} width={512} />
                        <h1 className="text-center pt-3 mb-5">{_("EMOTION.HEAD")}</h1>
                        <h3>Стресс, тревога, депрессия или резкие перепады настроения?</h3>
                        <p>Приложение Эмоции поможет наблюдать у себя изменения в настроении в течение дня.</p>
                        <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                            target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-5"
                            style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="row g-4 mb-4">
                    <div className="col-lg-8">
                        <div className="block bg-violet">
                            <h3>Графики колебания</h3>
                            <p>Представлены графики колебания тревожности, гармонии, энергии и другие независимости за каждый месяц.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="block bg-yellow">
                            <h3>История измерений</h3>
                            <p>Вы можете просматривать истории измерений по месяцам и годам.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="block bg-yellow">
                            <h3>Быстрое тестирование</h3>
                            <p>Тест проходится меньше чем за минуту и сразу выдает готовый результат.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="block bg-violet">
                            <h3>Детальная диагностика</h3>
                            <p>Показывает причины текущего состояния по категориям, реальное положение дел и ожидания.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>Почему Эмоция?</h2>
                            <p>В отличии от других тестов наш работает напрямую с подсознанием человека — не надо отвечать на 100 однотипных вопросов как в других тестах — позвольте вашему подсознанию делать работу</p>
                            <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large button">Попробовать сейчас</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/emotion-screens-1st.png" className="ms-base-image" alt="" height={512} width={512} />
                    </div>
                </div>
            </section>

            <section className="bg-gray py-5">
                <div className="row mb-5">
                    <div className="col-lg-6 d-table">
                        <img src="/img/emotion-diagram-1.png" className="img-fluid mx-0 px-0" alt="" height={512} />
                    </div>
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>Биоритмы</h2>
                            <p>Приложение предлагает 3 цикла, благодаря которым вы сможете контролировать регулярные или периодические повторения во всех жизненных процессов. У каждого цикла есть 5 фаз, которые более детально описывают конкретные характеристики и особенности состояния.</p>
                            <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large button">Узнать больше </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="block bg-yellow">
                            <h3>Физический</h3>
                            <p>Физический биоритм связан с физическими циклами тела и энергетическими уровнями. Биоритм влияет выносливость, скорость, быстрота реакции и мышечная сила.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="block bg-green">
                            <h3>Эмоциональный</h3>
                            <p>Эмоциональный биоритм человека отображает цикличность чувствительности, определяет его творческие возможности, общее психическое состояние.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="block bg-violet">
                            <h3>Интеллектуальный</h3>
                            <p>Интеллектуальный связан с психическими процессами. Характеризуется остротой ума, легким решением задач, с другой стороны  - дискомфортом и стрессом.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h4>{_("EMOTION.HEAD3")}</h4>
                <p className="mt-3">{_("EMOTION.DESC3_1")}</p>
                <p className="mt-3">{_("EMOTION.DESC3_2")}</p>
            </section>

            <div className="pb-5 text-center">
                <img src="/img/p_emotion_screens4.512.webp" alt={_("MAIN.P3.IMG")} className="ms-base-image" width="512px" height="512px" />
            </div>

            <section>
                <h4>{_("EMOTION.HEAD4")}</h4>
                <p className="mt-3">{_("EMOTION.DESC4")}</p>
            </section>

            <section>
                <h4>{_("EMOTION.HEAD5")}</h4>
                <p className="mt-3">{_("EMOTION.DESC5_1")}</p>
                <p className="mt-3">{_("EMOTION.DESC5_2")}</p>
            </section>
        </div>

        <div className="container mb-5 pb-5 text-center">
            <img src="/img/p_emotion_screens.512.webp" alt={_("EMOTION.IMG")} className="ms-base-image" width="512px" height="512px" />
        </div>

        <Footer />
    </>
}
