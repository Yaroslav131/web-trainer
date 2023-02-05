import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Sidebar.css"
import '../../reset.css'
import './ProgressBar.scss'
import humburgerIcon from '../../imgs/icons8-circled-menu-100.png'
import Exercise from "../../Classes/Execirse";

interface Iprops {
    curentExcersise: Exercise
    curentExIndex: number
    excersisesCount: number
    onNextEx: () => void
    onPreviousEx: () => void
}

export default function SideBar(props: Iprops) {

    return (
        <div className="sidenav">
            <LevelCounter
                curentEx={props.curentExcersise}
                curentExIndex={props.curentExIndex}
                excersisesCount={props.excersisesCount}
                OnNextEx={props.onNextEx}
                OnPreviousEx={props.onPreviousEx} />
            <ProgressBar completed={props.curentExIndex} maxCompleted={props.excersisesCount}
                className="progress-bar"
                baseBgColor='#808080'
                height='6px'
                isLabelVisible={false}
                animateOnRender={false}
                width='365px'
                bgColor='rgb(34, 157, 73)'
            />
        </div>


    )
}

interface ILevelCounterProps {
    curentExIndex: number,
    excersisesCount: number,
    curentEx: Exercise

    OnNextEx: () => void
    OnPreviousEx: () => void
}

function LevelCounter(props: ILevelCounterProps) {
    return (

        <div className="level-bar">
            <div className="level-counter">
                <p className="counter">Задание {props.curentExIndex} из {props.excersisesCount}</p>
                <div className={props.curentEx.isCompleted ? "checkmark" : ""} >
                </div>
            </div>

            <div className="nav-level-bar">
                <div className="arrows">
                    <div className="arrow-div">
                        <div onClick={props.OnPreviousEx} className="arrow_left" ></div>
                    </div>
                    <div className="arrow-div">
                        <div onClick={props.OnNextEx} className="arrow_right" ></div>
                    </div>
                </div>

                <div >
                    <img className="hamburger-menu" src={humburgerIcon} alt="Задания" />
                </div>
            </div>
        </div>
    )
}