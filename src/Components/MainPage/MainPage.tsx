import React, { useState } from "react";
import Exercise from "../../Classes/Execirse"
import SideBar from "../Sidebar/Sidebar"

interface Iprops {
    excersises: Exercise[]
}

export default function MainPage(props: Iprops) {

    const [curentExIndex, SetCurentEx] = useState(1);

    function OnNextEx() {
        let curent = curentExIndex;

        if (curent < props.excersises.length-1) {
            SetCurentEx(++curent)
        }
    }

    function OnPreviousEx() {
        let curent = curentExIndex;

        if (curent > 1) {
            SetCurentEx(--curent)
        }
    }

    return (
        <div className="MainPage">
            <div className="Main">

            </div>
            <div className="Sidebar">
                <SideBar
                    curentExcersise={props.excersises[curentExIndex]}
                    curentExIndex={curentExIndex}
                    excersisesCount={props.excersises.length-1}
                    onNextEx={OnNextEx}
                    onPreviousEx={OnPreviousEx} />
            </div>
        </div>
    )
}