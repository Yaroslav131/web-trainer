import React, { useEffect, useState } from "react";
import '../../../../reset.css'
import './SubmitButton.css'

interface Iprops {
    onSubmit: (event: any) => void
}
export default function SubmitButton(props: Iprops) {

    const [ispressedButton, SetIspressedButton] = useState(false);

    useEffect(() => {
        sendAnswer();
    });

    function sendAnswer() {
        document.onkeypress = function (event) {
            let e = event || window.event;
            if (e.keyCode == 13) {
                e.preventDefault();
                SetIspressedButton(true)
                setTimeout(() => { SetIspressedButton(false) }, 700)
                props.onSubmit(event);
            }
        }
    }

    return (
        <button onClick={props.onSubmit} className={ispressedButton ? "submit  pressed-button" : "submit"} >
            Отправить
        </button>
    );
}