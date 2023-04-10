import React, { useState, useEffect, ReactElement } from "react";
import "./Sidebar.css"
import '../../../reset.css'
import './ProgressBar.css'
import humburgerIcon from '../../../assets/imgs/icons/icons8-circled-menu-100.png'
import Exercise from "../../../Classes/Execirse";
import CssSelectorExercise from "../../../Classes/Execirse";

interface Iprops {
    exercises: Exercise[]
    curentExIndex: number
    isLevelListOpen: Boolean
    isSidebarOpen: boolean
    isShotScreen: boolean
    compliteExCounter: number
    onCancelSidebar: () => void
    openLevelsNav: () => void
    closeLevelsNav: () => void
    onNextEx: () => void
    onPreviousEx: () => void
    onCurrentLevelChange: (event: any) => void
    onProgressReset: () => void
    onTutorialOpen: () => void
    onBookOpen: () => void
}

export default function SideBar(props: Iprops) {
    let helpBlock;
    const displayIncriment = 1;
    const [curentExIndex, SetCurentExIndex] = useState(Object)

    useEffect(() => {
        SetCurentExIndex(props.exercises[props.curentExIndex]);
    }, [props])


    if (curentExIndex.ExerciseType == "CSS") {
        helpBlock = <CssSelectorHelpBlock exercise={curentExIndex} />
    }

    return (
        <aside>
            <div className={props.isSidebarOpen ? "sidenav sidenav-open" : "sidenav"}>
                <LevelCounter
                    ex={props.exercises[props.curentExIndex]}
                    curentExIndex={props.curentExIndex}
                    excersisesCount={props.exercises.length - displayIncriment}
                    isSidebarOpen={props.isSidebarOpen}
                    isShotScreen={props.isShotScreen}
                    onCancelSidebar={props.onCancelSidebar}

                    openLevelsNav={props.openLevelsNav} />
                    <hr />
                {helpBlock}

                <button onClick={props.onTutorialOpen} className="side-bar-button">{"Как работает тренажер?"}</button>
                <button onClick={props.onBookOpen} className="side-bar-button">{"Что такое CSS?"}</button>
            </div>

            <div className={props.isLevelListOpen ? "level-bar-open" : "level-bar-open bar-close"}>
                <LevelList onCurrentLevelChange={
                    props.onCurrentLevelChange}
                    closeLevelseNav={props.closeLevelsNav}
                    exercises={props.exercises} />

                <button onClick={props.onProgressReset} className="side-bar-button">{"Сбросить прогресс"}</button>
            </div>
        </aside>
    )
}

interface ICssSelectorHelpBlock {
    exercise: CssSelectorExercise
}

function CssSelectorHelpBlock(props: ICssSelectorHelpBlock) {
    let examples = props.exercise.examples.map((x, index) => <div key={index}> <p className="example-test">{x}</p> <hr /></div >)
    return (
        <div className="help-block">
            <div className="selectorName">{props.exercise.name}</div>
            <div className="title">{props.exercise.title}</div>
            <div className="hint">{props.exercise.hint}</div>
            <div className="examples-title">Примеры</div>
            <div className="examples">
                {examples}
            </div>
        </div>
    )
}


interface ILevelCounterProps {
    curentExIndex: number,
    excersisesCount: number,
    ex: Exercise
    isSidebarOpen: boolean
    isShotScreen: boolean
    onCancelSidebar: () => void
    openLevelsNav: () => void
}

function LevelCounter(props: ILevelCounterProps) {

    const [isCancelDisplay, SetIsCancelDisplay] = useState(false);

    let current = props.curentExIndex;
    current++;
    let length = props.excersisesCount;
    length++;

    useEffect(() => {
        if (props.isSidebarOpen && props.isShotScreen) {
            SetIsCancelDisplay(true);
        }
        else {
            SetIsCancelDisplay(false);
        }
    }, [props.isSidebarOpen, props.isShotScreen]);

    return (
        <div className={"counter-bar"} >
            <div onClick={props.onCancelSidebar} className={ "close-short-screen"}></div>
            <div className="level-bar">
                <div className="level-counter">
                    <p className="counter-head">Задание {current} из {length}</p>
                    <div className="flex-container">
                        <div className={props.ex.isCompleted ? "checkmark" : ""} >
                        </div>
                    </div>
                </div>

                <div className="hamburger-menu-container tooltip" onClick={props.openLevelsNav}>
                    <span className="tooltiptext left-bottom-tooltip">Список заданий</span>
                    <img className="hamburger-menu" src={humburgerIcon} alt="Задания" />
                </div>
            </div>
        </div>
    )
}

interface ILevelListProps {
    exercises: Exercise[]
    closeLevelseNav: () => void
    onCurrentLevelChange: (event: any) => void
}


function LevelList(props: ILevelListProps) {

    let levelList = props.exercises.map((x, index) => <ListItem key={index} onClick={props.onCurrentLevelChange} exercise={x} index={++index} />)
    return (
        <>
            <div className="level-header">
                <p className="counter-head">Выберите задание</p>
                <div onClick={props.closeLevelseNav} className="close"></div>
            </div>
            <div className="level-list">
                {levelList}
            </div>
        </>
    )
}

interface IListItemProps {
    exercise: Exercise
    index: number
    onClick: (event: any) => void
}

function ListItem(props: IListItemProps) {
    return (
        <button onClick={props.onClick} value={props.index - 1} className="level-item-button">
            <div className="level-item ">
                <div className="flex-container">
                    <div className={props.exercise.isCompleted ? "list-checkmark-complete" : "list-checkmark "}></div>
                </div>
                <div className="flex-container">
                    <p className="item-index">
                        {props.index}
                    </p>
                </div>
                <div className="flex-container-text">
                    <p className="item-name ">
                        {props.exercise.name}
                    </p>
                </div>
            </div>
        </button>
    )
}