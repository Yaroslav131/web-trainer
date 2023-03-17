import React, { useState, useEffect } from "react";
import Exercise from "../../../Classes/Execirse"
import JobBlock from "./JobBlock/JobBlock";
import ImgBlock from "./ImgBlock/ImgBlock";
import CodeInput from "./CodeInput/CodeInput";
import SubmitButton from "./SubmitButton/SubmitButton"
import HelpButton from "./HelpButton/HelpButton";
import "./ExerciseBlock.css";
import Modal from "./HelpWindow/HelpWindow";

interface Iprops {
    excersises: Exercise[]
    curentExIndex: number
    onCorrectAnswer: () => void
}

export default function ExerciseBlock(props: Iprops) {

    const [answer, setAnswer] = useState(``)


    function onInputAnswer(event: any) {
        setAnswer(event.target.value);
    }

    useEffect(() => {
        setAnswer(``)
    }, [props.curentExIndex]);

    function onSubmit(event: any) {
        if (props.excersises[props.curentExIndex].answer == answer) {
            props.onCorrectAnswer();
        }
    }

    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)


    return (
        <div className="exerciseBlock">
            <JobBlock text={props.excersises[props.curentExIndex].task} />
            <ImgBlock imgURL={props.excersises[props.curentExIndex].imgURL} />
            <CodeInput
                onInputAnswer={onInputAnswer}
                inputHTMLValue={props.excersises[props.curentExIndex].htmlCode}
                inputCSSValue={props.excersises[props.curentExIndex].cssCode}
                exerciseType={props.excersises[props.curentExIndex].type}
                userAnswer={answer}
                onSubmit={onSubmit}
            />

            <div className="buttons-container">
                <div className="button-container">
                    <SubmitButton
                        onSubmit={onSubmit} />
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
        </div>
    )
}