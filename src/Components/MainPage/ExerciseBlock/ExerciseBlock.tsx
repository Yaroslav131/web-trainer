import React, { useState, useEffect } from "react";
import Exercise from "../../../Classes/Execirse"
import JobBlock from "./TaskBlock/TaskBlock";
import ImgBlock from "./ImgBlock/ImgBlock";
import CodeInput from "./CodeInput/CodeInput";
import SubmitButton from "./SubmitButton/SubmitButton"
import HelpButton from "./HelpButton/HelpButton";
import "./ExerciseBlock.css";
import Modal from "../HelpWindow/HelpWindow";
import '../../../reset.css'

interface Iprops {
    excersises: Exercise[]
    curentExIndex: number
    onCorrectAnswer: () => void
    onNextEx: () => void
    onPreviousEx: () => void
}

export default function ExerciseBlock(props: Iprops) {

    const [answer, setAnswer] = useState(``)
    const [iFrameClassName, SetiFrameClassNme] = useState(``)

    function onInputAnswer(event: any) {
        setAnswer(event.target.value);
    }

    useEffect(() => {
        setAnswer(``)
    }, [props.curentExIndex]);

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

        let splitAnswerString = props.excersises[props.curentExIndex].answer.split(',');

        const found = splitAnswerString.some(r => splitUserAnswerString.includes(r))

        if (found) {
            props.onCorrectAnswer();
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
            <JobBlock text={props.excersises[props.curentExIndex].task} />
            <CodeInput
                iFrameClassName={iFrameClassName}
                onInputAnswer={onInputAnswer}
                inputHTMLValue={props.excersises[props.curentExIndex].htmlCodeOutput}
                reactObj={props.excersises[props.curentExIndex].htmlСompilationCode}
                inputCSSValue={props.excersises[props.curentExIndex].cssCodeOutput}
                cssCompelateCode={props.excersises[props.curentExIndex].cssСompilationCode}
                exerciseType={props.excersises[props.curentExIndex].ExerciseType}
                userAnswer={answer}
            />

            <div className="buttons-container">

                <div className="arrow-div">
                    <div onClick={props.onPreviousEx} className={props.curentExIndex == 0 ? "arrow-left-disable" : "arrow_left"} ></div>
                </div>

                <div className="button-container">
                    <SubmitButton
                        onSubmit={onSubmit}
                    />
                </div>

                <div className="arrow-div">
                    <div onClick={props.onNextEx} className={props.curentExIndex == props.excersises.length-1 ? "arrow-right-disable" : "arrow_right"} ></div>
                </div>

                <div className="button-container">
                    <HelpButton onClick={() => setModal(true)} />
                </div>

                <Modal
                    visible={isModal}
                    title='Подсказка'
                    content={<p>{props.excersises[props.curentExIndex].helpText}</p>}
                    footer={<button onClick={onClose}>Закрыть</button>}
                    onClose={onClose}
                />
            </div>
        </main>
    )
}