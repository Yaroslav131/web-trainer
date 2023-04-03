import React, { useEffect, useState } from "react";
import './CodeInput.css'
import { IFrame } from "./IFrame";
import "./IFrame.css"

const CodeInput = (props) => {

    const [reactCode, SetReactCode] = useState(<></>);

    let htmlBlock = <></>

    let cssBlock = <></>

    useEffect(() => {

        runCompeletion();

        document.getElementById("user-answer").focus();

        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/979140767a.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [props]);

    function getHTMLString(array) {
        return array.join("");
    }


    function runCompeletion() {
        //  let htmlCode = props.inputHTMLValue;

        let cssCode = props.cssCompelateCode;

        if (props.exerciseType == "CSS") {

            let answer = props.userAnswer;

            let splitUserAnswerString = answer.split('');

            let stopBracketCompeletion = false;

            for (let index = 0; index < splitUserAnswerString.length; index++) {
                if (splitUserAnswerString[index] == "[") {
                    stopBracketCompeletion = true;
                }

                if (splitUserAnswerString[index] == "]") {
                    stopBracketCompeletion = false;
                }
            }

            if (stopBracketCompeletion) {
                answer = "";
            }

            let stopCompeletion = splitUserAnswerString.includes("'");

            if (stopCompeletion) {
                answer = "";
            }

            if (answer == "*") {
                answer = "body *";
            }
            else if (answer == "'" || answer == "body") {
                answer = "";
            }

            cssCode = answer + cssCode;
        }


        let reactCode = <>
            <style>{cssCode}</style>
            {getContainer(props.reactObj)}
        </>

        SetReactCode(reactCode)
    }

    function getContainer(reactObj) {

        let counter = 0;

        let resoult = [];

        for (let i = 1; i < reactObj.length; i++) {

            if (reactObj[0] != "imgs") {

                if (typeof (reactObj[0]) == "object") {
                    resoult.push(
                        reactObj.map(x => getContainer(x)))
                }
                else {
                    resoult.push(<div key={counter++} className={reactObj[0]}>
                        {getContainer(reactObj[i])}
                    </div>)
                }
            }
            else {
                return reactObj[i].map(x => (
                    <img key={counter++} src={require(`../../../../imgs/exercise-imgs/${x.name}.png`)} className={x.class} id={x.id}></img>
                ))
            }
        }

        return resoult;
    }

    if (props.exerciseType == "CSS") {
        cssBlock = <div className="code-constainer">
            <textarea placeholder="Write code..." className={props.userAnswer == "" ? "user-answer-empty" : ""} value={props.userAnswer} onInput={props.onInputAnswer} onKeyUp={runCompeletion} id="user-answer" ></textarea>
            <pre className="code-text" id="css-code" disabled>{props.inputCSSValue}</pre>
        </div>

        htmlBlock = <div className="code-constainer">
            <pre className="code-text" id="html-code" >{getHTMLString(props.inputHTMLValue)}</pre>
        </div>
    }
    // else if (props.exerciseType == "HTML") {
    //     htmlBlock = <div className="code-constainer">
    //         <textarea placeholder="Вводите код..." value={props.userAnswer} onInput={props.onInputAnswer} id="user-answer" onKeyUp={runCompeletion}></textarea>
    //         <div id="html-code" className="code-text" disabled>{props.inputHTMLValue}</div>
    //     </div>

    //     cssBlock = <div className="code-constainer">
    //         <div className="code-text" id="css-code" disabled>{props.inputCSSValue}</div>
    //     </div>
    // }

    return (
        <div className="textarea-container">
            <div className="left">
                <label className="type-head"><i className="fa-brands fa-css3-alt"></i>CSS</label>
                {cssBlock}
                <label className="type-head"><i className="fa-brands fa-html5"></i>HTML</label>
                {htmlBlock}
            </div>
            <div className="right">
                <label className="type-head"><i className="fa-solid fa-play"></i>Output</label>
                <IFrame iFrameClassName={props.iFrameClassName}>
                    {reactCode}
                </IFrame>
            </div>
        </div >
    );
};

export default CodeInput;