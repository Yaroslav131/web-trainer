import React, { useEffect, useState } from "react";
import '../../../../reset.css'
import './SubmitButton.css'

export default function SubmitButton(props: any) {

    function onSubmit(event: any) {
        if (props.answer.includes(props.inputValue)) {
            props.onCorrectAnswer();
        }
    }

    return (
        <button onClick={onSubmit} className="submit" >
            Отправить
        </button>
    );
}