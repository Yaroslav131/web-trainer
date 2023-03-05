import React, { useEffect, useState } from "react";
import '../../../../reset.css'
import './CodeInput.css'

export default function CodeEditorWindow(props: any) {

    function onSubmit(event: any) {
        if (props.answer.includes(props.inputValue)) {
            props.onCorrectAnswer();
        }
    }

    return (
        <div className="text-container ">
            <textarea placeholder="Пишите код" value={props.inputValue} id="editing" onChange={(props.onInputUpdate)}></textarea>
        </div >
    );
}