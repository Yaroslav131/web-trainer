import React, { useEffect, useState } from "react";
import '../../../../reset.css'
import './HelpButton.css'

export default function HelpButton(props: any) {
    
    return (
        <button onClick={props.onClick} className="help-button" >
            ?
        </button>
    );
}