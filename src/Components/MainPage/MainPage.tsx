import React, { useState } from "react";
import Exercise from "../../Classes/Execirse"
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar"
import './MainPage.css'
import JobBlock from "./JobBlock/JobBlock";
import ImgBlock from "./ImgBlock/ImgBlock";

import CodeInput from "./CodeInput/CodeInput";

interface Iprops {
    excersises: Exercise[]
}

export default function MainPage(props: Iprops) {

    const [curentExIndex, SetCurentEx] = useState(0);

    const [isLevelListOpen, SetLevelListOpen] = useState(false);

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
            <div className="Main">
                <Header />
                <JobBlock text={props.excersises[curentExIndex].task} />
                <ImgBlock imgURL={props.excersises[curentExIndex].imgURL} />
                <CodeInput/>
            </div>
            <div className="Sidebar">
                <SideBar
                    isLevelListOpen={isLevelListOpen}
                    exercises={props.excersises}
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