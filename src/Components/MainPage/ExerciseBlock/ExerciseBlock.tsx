import React, { useState, useEffect } from "react";
import Exercise from "../../../Classes/Execirse"
import JobBlock from "./JobBlock/JobBlock";
import ImgBlock from "./ImgBlock/ImgBlock";
import CodeEditorWindow from "./CodeInput/CodeInput";
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

    const [inputValue, setInput] = useState("")

    function onInputUpdate(event: any) {
        setInput(event.target.value);
    }

    useEffect(() => {
        setInput("")
    }, [props]);

    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)


    return (
        <div className="exerciseBlock">
            <JobBlock text={props.excersises[props.curentExIndex].task} />
            <ImgBlock imgURL={props.excersises[props.curentExIndex].imgURL} />
            <CodeEditorWindow
                onCorrectAnswer={props.onCorrectAnswer}
                onInputUpdate={onInputUpdate}
                inputValue={inputValue}
            />

            <div className="buttons-container">
                <div className="button-container">
                    <SubmitButton
                        answer={props.excersises[props.curentExIndex].answer}
                        inputValue={inputValue}
                        onCorrectAnswer={props.onCorrectAnswer} />
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