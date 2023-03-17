import React, { useEffect, useState } from "react";
import Exercise from "../../Classes/Execirse"
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar"
import './MainPage.css'
import ExerciseBlock from "./ExerciseBlock/ExerciseBlock"
import Footer from "./Footer/Footer"

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
        flashingGreen();
    }

    function flashingGreen() {
        let className = `${curentClassName} green-flash`

        SetClassName(className)

        setTimeout(() => { SetClassName("main") }, 700)
    }

    function OpenLevelsNav() {
        SetLevelListOpen(true)
    }

    function CloseLevelseNav() {
        SetLevelListOpen(false)
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

    function onOpenSidebar() {
        SetSidebarOpen(true)
    }

    function onCancelSidebar() {
        SetSidebarOpen(false)
    }


    function onProgressReset() {
        let exCop = exercises;

        for (let index = 0; index < exCop.length; index++) {
            exCop[index].isCompleted = false;
        }
        SetExercises(exCop);
    }
    // call your useEffect
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return (
        <div className={isShotScreen ? 'main-page-short' : "main-page"} >
            <div className={curentClassName}>
                <Header isSidebarOpen={isSidebarOpen}
                    onOpenSidebar={onOpenSidebar} />
                <ExerciseBlock onCorrectAnswer={onCorrectAnswer}
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
                    onProgressReset={onProgressReset} />
            </div>
        </div >
    )
}