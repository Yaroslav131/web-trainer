import React, { useState } from "react";
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

    const [exercises, SetExercises] = useState(props.excersises);

    const [isLevelListOpen, SetLevelListOpen] = useState(false);

    function onCorrectAnswer() {
        let copyEx = exercises;
        copyEx[curentExIndex].isCompleted = true;
        SetExercises([]);
        SetExercises(copyEx);
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

    return (
        <div className="MainPage">
            <div className="main">
                <Header />
                <ExerciseBlock onCorrectAnswer={onCorrectAnswer} 
                curentExIndex={curentExIndex} 
                excersises={exercises} />
                <Footer/>
            </div>
            <div className="Sidebar">
                <SideBar
                    isLevelListOpen={isLevelListOpen}
                    exercises={exercises}
                    curentExIndex={curentExIndex}
                    onNextEx={OnNextEx}
                    onPreviousEx={OnPreviousEx}
                    closeLevelsNav={CloseLevelseNav}
                    openLevelsNav={OpenLevelsNav}
                    onCurrentLevelChange={OnCurrentLevelChange} />
            </div>
        </div>
    )
}