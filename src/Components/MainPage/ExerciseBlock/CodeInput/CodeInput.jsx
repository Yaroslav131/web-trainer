import React, { useEffect, useState } from "react";
import './CodeInput.css'

import cat from "./cat.png"
import { IFrame } from "./IFrame";

const CodeInput = (props) => {

    const [reactCode, SetReactCode] = useState(<></>);
    useEffect(() => {

        runCompeletion();
       // getReactCode();
        sendAnswer();

        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/979140767a.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }


    });

    function getReactCode() {
        let reactCode = <></>

        for (let value of Object.entries(props.reactObj)) {
            reactCode += <div className={value.class}>
                {value.imgs.map(x => <img src={require(`../../../../imgs/exercise-imgs/${x.name}.png`)} className={x.class}></img>)}
            </div>
        }

        SetReactCode(reactCode)
    }

    function runCompeletion() {
        let htmlCode = props.inputHTMLValue;

        let cssCode = props.inputCSSValue;
        let output = document.getElementById("output");

        if (props.exerciseType == "CSS") {
            cssCode = props.userAnswer + cssCode;
            output.contentDocument.body.innerHTML =htmlCode+ "<style>" + cssCode + "</style>";
        }
        else {
            htmlCode = props.userAnswer + htmlCode;
        }


    }

    function sendAnswer() {
        document.onkeypress = function (event) {
            let e = event || window.event;
            if (e.keyCode == 13) {
                e.preventDefault();

                props.onSubmit(event);
            }
        }

        document.getElementById("user-answer").focus();
    }

    let htmlBlock = <></>

    let cssBlock = <></>

    if (props.exerciseType == "CSS") {
        cssBlock = <div className="code-constainer">
            <textarea placeholder="Вводите ответ..." value={props.userAnswer} onInput={props.onInputAnswer} onKeyUp={runCompeletion} id="user-answer" ></textarea>
            <pre className="code-text" id="html-code" disabled>{props.inputCSSValue}</pre>
        </div>

        htmlBlock = <div className="code-constainer">
            <pre className="code-text" id="html-code" disabled>{props.inputHTMLValue}</pre>
        </div>
    }
    else if (props.exerciseType == "HTML") {
        htmlBlock = <div className="code-constainer">
            <textarea placeholder="Вводите код..." value={props.userAnswer} onInput={props.onInputAnswer} id="user-answer" onKeyUp={runCompeletion}></textarea>
            <div id="html-code" className="code-text" disabled>{props.inputHTMLValue}</div>
        </div>

        cssBlock = <div className="code-constainer">
            <div className="code-text" id="css-code" disabled>{props.inputCSSValue}</div>
        </div>
    }

    return (
        <div className="textarea-container">
            <div className="left">
                <label className="type-head"><i className="fa-brands fa-css3-alt"></i>  CSS</label>
                {cssBlock}
                <label className="type-head"><i className="fa-brands fa-html5"></i>  HTML</label>
                {htmlBlock}
            </div>
            <div className="right">
                <label className="type-head"><i className="fa-solid fa-play"></i>  Output</label>
                <IFrame>
                <img src={cat} ></img>
                </IFrame>
            </div>
        </div >
    );
};

export default CodeInput;