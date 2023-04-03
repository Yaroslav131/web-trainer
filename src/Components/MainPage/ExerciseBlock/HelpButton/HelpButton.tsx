import React, { useEffect, useState } from "react";
import '../../../../reset.css'
import './HelpButton.css'

interface Iprops {
    onClick: () => void
}

export default function HelpButton(props: Iprops) {

    return (
        <div className=" tooltip ">

            <button onClick={props.onClick} className="help-button" >
                ?
            </button>

             <span className="tooltiptext right-top-tooltip">Подсказка</span>
        </div>

    );
}