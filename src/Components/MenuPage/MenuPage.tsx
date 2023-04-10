import React, { useState } from "react";
import { Link } from "react-router-dom"
import './MenuPage.css'
import Modal from "../HelpWindow/HelpWindow";
import SlideCarousel from "../Carousel/Carousel";

export default function MenuPage(props: any) {

    const [isTutotialModal, setTutotialModal] = useState(false)
    const onTutotialClose = () => setTutotialModal(false)
    const onTutorialOpen = () => setTutotialModal(true)
    return (
        <div className="main-menu">
            <Modal
                visible={isTutotialModal}
                title='Обучение'
                content={<SlideCarousel />}
                footer={<button onClick={onTutotialClose}>Закрыть</button>}
                onClose={onTutotialClose}
            />

            <header className="main-menu-header">
                <h1 className="main-menu-logo">Web Trainer</h1>
            </header>

            <main className="main-menu-main">
                <p className="text-about"><span className="text-about-head">Добро пожаловать!</span> Данный сайт представляет собой тренажер по совершенствованию навыков в области HTML и CSS путем решения небольших заданий. Ниже вы можете выбрать область, в которой вы будете решать задачи.</p>
                <div className="buttons">
                    <div className="button__container">
                        <button onClick={onTutorialOpen} id="green-button">{"Как работает тренажер?"}</button>
                    </div>
                    <div className="button__container">
                        <Link to="/exercises/html-exersises"><button >HTML теги</button></Link>
                    </div>
                    <div className="button__container">
                        <Link to="/exercises/css-selectors"><button >CSS селекторы</button></Link>
                    </div>
                </div>
            </main>

            <footer className="menu-footer">
                <div className="text-container">
                    {/* <p className="creators-text">Белорусско-Российский университет<br />
                        Кафедра: Программное обеспечение информационных технологий<br />
                        Руководитель:старший преподователь Прудников В.М.<br />
                        Разработали:студенты Бубнов Я.Н., Шидловский М.А.</p> */}
                </div>
            </footer>
        </div>
    )
}