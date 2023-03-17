import React, { useEffect, useState } from "react";
import '../../../../reset.css'
import './SubmitButton.css'

export default function SubmitButton(props: any) {

    

    return (
        <button onClick={props.onSubmit} className="submit" >
            Отправить
        </button>
    );
}