import React, { useEffect, useState } from "react";
import Exercise from "../../Classes/Execirse"
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar"
import './MainPage.css'
import ExerciseBlock from "./ExerciseBlock/ExerciseBlock"
import Footer from "./Footer/Footer"
import Modal from "./HelpWindow/HelpWindow";
import './HelpWindow/HelpWindow.css'
import '../../reset.css'
import SlideCarousel from "./Carousel/Carousel";
import AboutCss from "./AboutBlocks/AboutCSS";
import AboutCssSelectors from "./AboutBlocks/AboutCssSelectors";

interface Iprops {
    excersises: Exercise[],
    excersisesTitle: string
}

export default function MainPage(props: Iprops) {

    const [curentExIndex, SetCurentEx] = useState(0);
    const [compliteExCounter, SetCompliteExCounter] = useState(0);
    const [exercises, SetExercises] = useState(props.excersises);

    const [isLevelListOpen, SetLevelListOpen] = useState(false);
    const [isSidebarOpen, SetSidebarOpen] = useState(true);
    const [isShotScreen, SetIsShotScreen] = useState(false);

    function onCorrectAnswer() {
        let copyEx = exercises;
        let counter = compliteExCounter;

        if (copyEx[curentExIndex].isCompleted == false) {
            SetCompliteExCounter(++counter)

        }

        copyEx[curentExIndex].isCompleted = true;

        SetExercises(copyEx);
    }

    function OnNextEx() {
        let curent = curentExIndex;

        if (curent < props.excersises.length - 1) {
            SetCurentEx(++curent)
        }
    }

    function OnPreviousEx() {
        let curent = curentExIndex;

        if (curent > 0) {
            SetCurentEx(--curent)
        }
    }

    function OnCurrentLevelChange(event: any) {
        SetCurentEx(event.target.value)

        SetLevelListOpen(false)
    }


    function onOpenSidebar() {
        SetSidebarOpen(true)
    }

    function onCancelSidebar() {
        SetSidebarOpen(false)
    }

    function OpenLevelsNav() {
        SetLevelListOpen(true)
    }

    function CloseLevelseNav() {
        SetLevelListOpen(false)
    }

    function onProgressReset() {
        let exCop = exercises;

        exCop.forEach(element => {
            element.isCompleted = false
        });

        SetExercises(exCop);
        SetLevelListOpen(false);
        SetCurentEx(0);
        SetCompliteExCounter(0);
    }

    const handleWindowSizeChange = () => {
        let screenWidth = window.screen.width;
        let documentWidth = document.documentElement.scrollWidth;
        if (screenWidth - 400 > documentWidth) {
            SetSidebarOpen(false)
            SetIsShotScreen(true)
        }
        else {
            SetSidebarOpen(true)
            SetIsShotScreen(false)
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const [isTutotialModal, setTutotialModal] = useState(false)
    const onTutotialClose = () => setTutotialModal(false)
    const onTutorialOpen = () => setTutotialModal(true)

    const [isBookModal, setBookModal] = useState(false)
    const onBookClose = () => setBookModal(false)
    const onBookOpen = () => setBookModal(true)

    return (
        <div className={isShotScreen ? 'main-page-short' : "main-page"} >

            <Modal
                visible={isTutotialModal}
                title='Обучение'
                content={<SlideCarousel />}
                footer={<button onClick={onTutotialClose}>Закрыть</button>}
                onClose={onTutotialClose}
            />
            <Modal
                visible={isBookModal}
                title='О CSS'
                content={<>
                    <AboutCss />
                    <AboutCssSelectors />
                </>}
                footer={<button onClick={onBookClose}>Закрыть</button>}
                onClose={onBookClose}
            />
            <div className="main">
                <Header
                    headerTitle={props.excersisesTitle}
                    isSidebarOpen={isSidebarOpen}
                    onOpenSidebar={onOpenSidebar} />
                <ExerciseBlock
                    onCorrectAnswer={onCorrectAnswer}
                    curentExIndex={curentExIndex}
                    excersises={exercises}
                    onNextEx={OnNextEx}
                    onPreviousEx={OnPreviousEx}
                />
                <Footer />
            </div>

            <SideBar
                isLevelListOpen={isLevelListOpen}
                exercises={exercises}
                curentExIndex={curentExIndex}
                compliteExCounter={compliteExCounter}
                isSidebarOpen={isSidebarOpen}
                isShotScreen={isShotScreen}
                onCancelSidebar={onCancelSidebar}
                onNextEx={OnNextEx}
                onPreviousEx={OnPreviousEx}
                closeLevelsNav={CloseLevelseNav}
                openLevelsNav={OpenLevelsNav}
                onCurrentLevelChange={OnCurrentLevelChange}
                onProgressReset={onProgressReset}
                onTutorialOpen={onTutorialOpen}
                onBookOpen={onBookOpen} />
        </div >
    )
}