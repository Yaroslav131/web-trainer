import React, { useState, useEffect, ReactElement, useRef } from "react";
import "./Sidebar.css"
import '../../../reset.css'

import humburgerIcon from '../../../assets/imgs/icons/icons8-circled-menu-100.png'
import Exercise from "../../../classes/Execirse";
import CssSelectorExercise from "../../../classes/Execirse";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeAsidebar } from './asidebarSlice'
import { openLevelList, closeLevelList } from './levelListSlice'
import { reset, setByAmount } from '../counterSlice'
import { resetEx } from '../exercisesSlice'
import Modal from "../../HelpWindow/HelpWindow";
import AboutCss from "../AboutBlocks/AboutCSS";
import AboutCssSelectors from "../AboutBlocks/AboutCssSelectors";
interface Iprops {
}

export default function SideBar(props: Iprops) {
    let helpBlock;

    const displayIncriment = 1;

    const [curentEx, SetCurentEx] = useState(Object)

    const count = useAppSelector((state) => state.counter.value)
    const isOpenAsidebar = useAppSelector((state) => state.asidebar.value)
    const isLevelListOpen = useAppSelector((state) => state.levelList.value)
    const exercises = useAppSelector((state) => state.exercises.value)

    const [isBookModal, setBookModal] = useState(false)
    const onBookClose = () => setBookModal(false)
    const onBookOpen = () => setBookModal(true)

    useEffect(() => {
        SetCurentEx(exercises[count]);
    }, [count])


    if (curentEx.ExerciseType == "CSS") {
        helpBlock = <CssSelectorHelpBlock exercise={curentEx} />
    }

    const dispatch = useAppDispatch()

    // const sidebarRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     function handleClickOutside(event: any) {
    //         if (event.target.className!="menu" && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    //             // закрыть aside bar, если кликнули вне его
    //             sidebarRef.current.className="sidenav";
    //         }
    //     }

    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [sidebarRef]);

    return (
        <aside >
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

            <div className={isOpenAsidebar ? "sidenav sidenav-open" : "sidenav"}>
                <LevelCounter
                    ex={exercises[count]}
                    excersisesCount={exercises.length - displayIncriment}
                />
                <hr />
                {helpBlock}

                <button onClick={onBookOpen} className="side-bar-button">{"Что такое CSS?"}</button>
            </div>

            <div className={isLevelListOpen ? "level-bar-open" : "level-bar-open bar-close"}>
                <LevelList
                />

                <button onClick={() => {
                    dispatch(resetEx());
                    dispatch(reset());
                    dispatch(closeLevelList());
                }} className="side-bar-button">{"Сбросить прогресс"}</button>
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
    excersisesCount: number,
    ex: Exercise
}

function LevelCounter(props: ILevelCounterProps) {

    const count = useAppSelector((state) => state.counter.value)
    let current = count;
    current++;
    let length = props.excersisesCount;
    length++;

    const dispatch = useAppDispatch()

    return (
        <div className={"counter-bar"} >
            <div onClick={() => { dispatch(closeAsidebar()) }} className={"close-short-screen"}></div>
            <div className="level-bar">
                <div className="level-counter">
                    <p className="counter-head">Задание {current} из {length}</p>
                    <div className="flex-container">
                        <div className={props.ex.isCompleted ? "checkmark" : ""} >
                        </div>
                    </div>
                </div>

                <div className="hamburger-menu-container tooltip" onClick={() => { dispatch(openLevelList()) }}>
                    <span className="tooltiptext left-bottom-tooltip">Список заданий</span>
                    <img className="hamburger-menu" src={humburgerIcon} alt="Задания" />
                </div>
            </div>
        </div>
    )
}

interface ILevelListProps {
}


function LevelList(props: ILevelListProps) {
    const dispatch = useAppDispatch()
    const exercises = useAppSelector((state) => state.exercises.value)
    let levelList = exercises.map((x, index) => <ListItem key={index}
        onClick={() => {
            dispatch(setByAmount(index));
            dispatch(closeLevelList())
        }}
        exercise={x} index={++index} />)
    return (
        <>
            <div className="level-header">
                <p className="counter-head">Выберите задание</p>
                <div onClick={() => { dispatch(closeLevelList()) }} className="close"></div>
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