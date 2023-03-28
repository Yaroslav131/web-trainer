import React, { useEffect, useState } from "react";
import './CodeInput.css'
import { IFrame } from "./IFrame";
import "./IFrame.css"

const CodeInput = (props) => {

    const [reactCode, SetReactCode] = useState(<></>);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/979140767a.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        runCompeletion();
        sendAnswer();
    }, [props]);

    function runCompeletion() {
        //  let htmlCode = props.inputHTMLValue;

        let cssCode = props.cssCompelateCode;

        let containerList = [];


        if (props.exerciseType == "CSS") {
            cssCode = props.userAnswer + cssCode;
        }
        // else {
        //     htmlCode = props.userAnswer + htmlCode;
        // }

        for (let value of props.reactObj) {
            let counter = 0;

            containerList.push(<div className={value.class}>
                {value.imgs.map(x => (
                    <img key={counter++} src={require(`../../../../imgs/exercise-imgs/${x.name}.png`)} className={x.class} id={x.id}></img>
                ))}
            </div>)
        }

        let reactCode = <>
            <style>{cssCode}</style>
            {containerList}
        </>

        SetReactCode(reactCode)


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
                    {reactCode}
                </IFrame>
            </div>
        </div >
    );
};

export default CodeInput;