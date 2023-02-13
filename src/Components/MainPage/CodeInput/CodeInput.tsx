import React, { useState } from "react";
import '../../../reset.css'
import './CodeInput.css'

export default function CodeInput(props: any) {

    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    )


    return (
        <div className="text-container">
            
            <div className="submit-container">
                <button className="submit" >
                    Отправить
                </button>
            </div>
        </div>
    );
}