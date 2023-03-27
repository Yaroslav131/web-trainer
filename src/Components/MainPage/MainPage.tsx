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

interface Iprops {
    excersises: Exercise[]
}

export default function MainPage(props: Iprops) {

    const [curentExIndex, SetCurentEx] = useState(0);

    const [curentClassName, SetClassName] = useState("main");

    const [exercises, SetExercises] = useState(props.excersises);

    const [isLevelListOpen, SetLevelListOpen] = useState(false);

    const [isSidebarOpen, SetSidebarOpen] = useState(true);
    const [isShotScreen, SetIsShotScreen] = useState(false);

    function onCorrectAnswer() {
        let copyEx = exercises;
        copyEx[curentExIndex].isCompleted = true;
        SetExercises([]);
        SetExercises(copyEx);
        flashingColorOnCorrect();
    }

    function flashingColorOnCorrect() {
        let className = `${curentClassName} green-flash`

        SetClassName(className)

        setTimeout(() => { SetClassName("main") }, 700)
    }

    function flashingColorOnWrong() {
        let className = `${curentClassName} red-flash`

        SetClassName(className)

        setTimeout(() => { SetClassName("main") }, 700)
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

        for (let index = 0; index < exCop.length; index++) {
            exCop[index].isCompleted = false;
        }
        SetExercises(exCop);

        SetLevelListOpen(false);

        SetCurentEx(0);
    }

    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)
    const onTutorialOpen = () => setModal(true)

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

    return (
        <div className={isShotScreen ? 'main-page-short' : "main-page"} >

            <Modal
                visible={isModal}
                title='Обучение'
                content={
                  <SlideCarousel/>
                }
                footer={<button onClick={onClose}>Закрыть</button>}
                onClose={onClose}
            />
            <div className={curentClassName}>
                <Header isSidebarOpen={isSidebarOpen}
                    onOpenSidebar={onOpenSidebar} />
                <ExerciseBlock onCorrectAnswer={onCorrectAnswer}
                onWrongAnswer={flashingColorOnWrong}
                    curentExIndex={curentExIndex}
                    excersises={exercises} />
                <Footer />
            </div>
            <div className="Sidebar">
                <SideBar
                    isLevelListOpen={isLevelListOpen}
                    exercises={exercises}
                    curentExIndex={curentExIndex}
                    isSidebarOpen={isSidebarOpen}
                    isShotScreen={isShotScreen}
                    onCancelSidebar={onCancelSidebar}
                    onNextEx={OnNextEx}
                    onPreviousEx={OnPreviousEx}
                    closeLevelsNav={CloseLevelseNav}
                    openLevelsNav={OpenLevelsNav}
                    onCurrentLevelChange={OnCurrentLevelChange}
                    onProgressReset={onProgressReset}
                    onTutorialOpen={onTutorialOpen} />
            </div>
        </div >
    )
}