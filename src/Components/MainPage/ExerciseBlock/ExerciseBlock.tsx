import React, { useState, useEffect } from "react";
import JobBlock from "./TaskBlock/TaskBlock";
import CodeInput from "./CodeInput/CodeInput";
import SubmitButton from "./SubmitButton/SubmitButton"
import HelpButton from "./HelpButton/HelpButton";
import "./ExerciseBlock.css";
import Modal from "../../HelpWindow/HelpWindow";
import '../../../reset.css'
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {  setCorectAnswer } from '../exercisesSlice'
import { decrement, increment } from '../counterSlice'

export default function ExerciseBlock() {
    const [answer, setAnswer] = useState(``)
    const [iFrameClassName, SetiFrameClassNme] = useState(``)
    const count = useAppSelector((state) => state.counter.value)
    const exercises = useAppSelector((state) => state.exercises.value)

    const dispatch = useAppDispatch();

    function onInputAnswer(event: any) {
        setAnswer(event.target.value);
    }

    useEffect(() => {
        setAnswer(``)
    }, [count]);

    function flashingColorOnCorrect() {
        let className = `green-flash`

        SetiFrameClassNme(className)
        setTimeout(() => { SetiFrameClassNme("") }, 700)
    }

    function flashingColorOnWrong() {
        let className = `red-flash`

        SetiFrameClassNme(className)
        setTimeout(() => { SetiFrameClassNme("") }, 700)
    }

    function onSubmit() {
        let splitUserAnswerString = answer.split(',');

        let splitAnswerString = exercises[count].answer.split(',');

        const found = splitAnswerString.some(r => splitUserAnswerString.includes(r))

        if (found) {
            dispatch(setCorectAnswer(count))

            flashingColorOnCorrect()
        }
        else {
            flashingColorOnWrong();
        }
    }

    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)

    return (
        <main className="exercise-block">
            <JobBlock text={exercises[count].task} />
            <CodeInput
                iFrameClassName={iFrameClassName}
                onInputAnswer={onInputAnswer}
                inputHTMLValue={exercises[count].htmlCodeOutput}
                reactObj={exercises[count].htmlСompilationCode}
                inputCSSValue={exercises[count].cssCodeOutput}
                cssCompelateCode={exercises[count].cssСompilationCode}
                exerciseType={exercises[count].ExerciseType}
                userAnswer={answer}
            />

            <div className="buttons-container">

                <div className="arrow-div">
                    <div onClick={() => dispatch(count > 0 ? decrement() : () => { })} className={count == 0 ? "arrow-left-disable" : "arrow_left"} ></div>
                </div>

                <div className="button-container">
                    <SubmitButton
                        onSubmit={onSubmit}
                    />
                </div>

                <div className="arrow-div">
                    <div onClick={() => dispatch(count < exercises.length - 1 ? increment() : () => { })} className={count == exercises.length - 1 ? "arrow-right-disable" : "arrow_right"} ></div>
                </div>

                <div className="button-container">
                    <HelpButton onClick={() => setModal(true)} />
                </div>

                <Modal
                    visible={isModal}
                    title='Подсказка'
                    content={<p>{exercises[count].helpText}</p>}
                    footer={<button onClick={onClose}>Закрыть</button>}
                    onClose={onClose}
                />
            </div>
        </main>
    )
}