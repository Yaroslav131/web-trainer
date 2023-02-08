import React, { useState } from "react";
import Exercise from "../../Classes/Execirse"
import SideBar from "../Sidebar/Sidebar"

interface Iprops {
    excersises: Exercise[]
}

export default function MainPage(props: Iprops) {

    const [curentExIndex, SetCurentEx] = useState(0);

    const [isLevelListOpen, SetLevelListOpen] = useState(false);

    function openLevelsNav() {
        SetLevelListOpen(true)
    }

    function closeLevelseNav() {
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

            </div>
            <div className="Sidebar">
                <SideBar
                    closeLevelsNav={closeLevelseNav}
                    openLevelsNav={openLevelsNav}
                    isLevelListOpen={isLevelListOpen}
                    OnCurrentLevelChange={OnCurrentLevelChange}
                    exercises={props.excersises}
                    curentExIndex={curentExIndex}
                    onNextEx={OnNextEx}
                    onPreviousEx={OnPreviousEx} />
            </div>
        </div>
    )
}