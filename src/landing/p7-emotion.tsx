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
                        <img src="/img/emotion-screen-1.png" className="ms-base-image" alt="" height={512} width={512} />
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
                <div className="row">
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>Как это работает?</h2>
                            <p>Посмотрите и выберите цвет, который вам больше всего нравится. Из оставшихся 7 цветов снова выберите цвет, и так до тех пор, пока не закончатся варианты. Повторив описанную выше процедуру вы получите более подробный результат.</p>
                            <h4 className="mb-4">Углубленное тестирование включает:</h4>
                            <ul className="d-flex gap-4 how-list">
                                <li className="bg-orange">Что вы желаете прямо сейчас</li>
                                <li className="bg-aqua">Актуальную проблему</li>
                                <li className="bg-yellow">Что вас ожидает в будущем</li>
                                <li className="bg-violet">Ваш источник стресса</li>
                                <li className="bg-blue">Что вы чувствуете в данный момент</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/img/emotion-screen-2.png" className="ms-base-image" alt="" height={512} width={512} />
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="/img/emotion-screen-3.png" className="ms-base-image" alt="" height={512} width={512} />
                    </div>
                    <div className="col-lg-6 d-table">
                        <div className="d-table-cell align-middle">
                            <h2>Почему это работает</h2>
                            <p>Приложение использует цвет в качестве визуального представления - следуя цветовой схеме. Пользователь должен относится к приложению как к инструменту для самосознания. Цветовой тест является оптимальным инструментом для анализа конфликтов, вопросов личной жизни, случайных изменений настроения.</p>
                            <h4 className="mb-4">Эмоция подходит для:</h4>
                            <div className="why-list">
                                <p>Людей стремящиеся к саморазвитию</p>
                                <p>Людям, для лучшего понимания партнера</p>
                                <p>Студентам при подготовке к тестам или экзаменам</p>
                                <p>Любителям заниматься  фитнесом и спорта</p>
                                <p>Исследования аналитики данных</p>
                                <p>Клиент реабилитационных центров</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray py-5">
                <div className="row">
                    <h2>Наши преимущества</h2>
                </div>
                <div className="advantages-list">

                    <div className="row">
                        <div className="col-lg-6 pe-3">
                            <div className="li mb-3">
                                <div className="icon"><img src="/img/emotion-icon-1.svg" alt="" /></div>
                                <div>
                                    <h4>Защита данных</h4>
                                    <p>Мы НЕ храним ваши данные на наших серверах.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="li mb-3">
                                <div className="icon"><img src="/img/emotion-icon-2.svg" alt="" /></div>
                                <div>
                                    <h4>Синхронизация</h4>
                                    <p>Данные автоматически переносятся на все устройства.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="li mb-3">
                                <div className="icon"><img src="/img/emotion-icon-3.svg" alt="" /></div>
                                <div>
                                    <h4>Без авторизации</h4>
                                    <p>Учётная запись для этого приложения не требуется.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="li mb-3">
                                <div className="icon"><img src="/img/emotion-icon-4.svg" alt="" /></div>
                                <div>
                                    <h4>Без рекламы</h4>
                                    <p>У нас НЕТ раздражающей рекламы.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <h2>Показатели</h2>
                </div>
                <div className="metrics-list">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="block bg-violet">
                                <h4>Тревожность</h4>
                                <p>Это эмоция, характеризующая чувством напряжения и мыслями беспокойства на конкретную угрозу.</p>
                                <a href={"/"}><span>Читать дальше</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-green">
                                <h4>Продуктивность</h4>
                                <p>Показывает насколько эффективно и результативно вы способны выполнять задачи.</p>
                                <a href={"/"}><span>Читать дальше</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="block bg-aqua">
                                <h4>Гармоничность</h4>
                                <p>Состояние, когда все аспекты личности находятся в балансе и работают в гармонии друг с другом.</p>
                                <a href={"/"}><span>Читать дальше</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-orange">
                                <h4>Независимость</h4>
                                <p>Эмоция относится к способу принимать решения и брать на себя ответственность.</p>
                                <a href={"/"}><span>Читать дальше</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">                        
                            <div className="block bg-yellow">
                                <h4>Энергичность</h4>
                                <p>Показывает количество энергии, так званого “Зеленого уровня” который способствует достижению целей.</p>
                                <a href={"/"}><span>Читать дальше</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block bg-blue">
                                <h4>Открытость</h4>
                                <p>Это эмоция, описывает насколько люди открыты для новых идей и опытов..</p>
                                <a href={"/"}><span>Читать дальше</span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Применение</h2>
                        <p>Тест дает обширную, свободную от сознательного контроля испытуемого характеристику его эмоционального состояния. Тест хорошо работает даже с дальтониками и теми, кто, как им кажется, нарочно выбирает не то, что им нравится.</p>
                    </div>
                </div>
                <div className="row mb-md-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-6.svg" alt="" /></div>
                        <h4>Для контроля динамики эмоций спортсменов</h4>
                        <p>Это даёт возможность тренеру заранее предвидеть и целенаправленно устранять срывы, связанные с истощением энергетических или волевых возможностей спортсменов.</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-7.svg" alt="" /></div>
                        <h4>Cудебно-психологические экспертизы</h4>
                        <p>Особенности теста делают его просто незаменимым при проведении анализе семейно-брачных конфликтов и причин, затрудняющих устройство личной жизни у пришедших на консультацию к психологу.</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-8.svg" alt="" /></div>
                        <h4>Анализ эмоционального состояния пациентов</h4>
                        <p>Медицинскими психологами тест может быть использован при отборе кандидатов в психотерапевтические группы для более адекватного подбора, для контроля за процессом психической реабилитации у каждого больного.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-9.svg" alt="" /></div>
                        <h4>Анализ производительности на предприятиях</h4>
                        <p>Тест успешно используется для проверки производительности сотрудников больших заводов, чтобы получить представление о благополучии сотрудников, их вовлеченность и общую производительность.</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-10.svg" alt="" /></div>
                        <h4>При подготовке к экзамену или собеседованию на работу</h4>
                        <p>Наблюдая за своими эмоциями, можно определить закономерность и триггеры, которые могут способствовать усилению стресса. Эти знания помогут планировать важные темы в пик активности для лучшего запоминания информации.</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon mb-5"><img src="/img/emotion-icon-11.svg" alt="" /></div>
                        <h4>Реабилитация солдат вернувшихся из плена</h4>
                        <p>По определению психической напряженности военнослужащих, применялся модифицированный цветовой тест в качестве метода определения эмоционального и мотивационного состояния.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="d-flex block bg-violet">
                        <div className="col-lg-6 d-flex flex-column">
                            <h2>Наше приложение доступно для любого устройства</h2>
                            <p className="flex-grow-1">Скачайте приложение прямо сейчас и начните следить у себя за изменением в настроении даже в течение одного и того же дня</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                                target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple mt-5"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/emotion-screen-6.png" className="img-fluid pt-0" alt="" height={512} width={512} />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

        <Footer />
    </>
}
