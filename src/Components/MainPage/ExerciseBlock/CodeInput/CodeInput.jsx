import React, { useEffect, useState } from "react";
import './CodeInput.css'
import { IFrame } from "./IFrame";
import "./IFrame.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeInput = (props) => {

    const [reactCode, SetReactCode] = useState(<></>);
    const [htmlBlock, SetHtmlBlock] = useState(<></>);
    const [cssBlock, SetCssBlock] = useState(<></>);

    useEffect(() => {

        setCodeBlocks();

        runCompeletion();

        // document.getElementById("user-answer").focus();

        // const script = document.createElement('script');

        // script.src = "https://kit.fontawesome.com/979140767a.js";
        // script.async = true;

        // document.body.appendChild(script);

        // return () => {
        //     document.body.removeChild(script);
        // }
    }, [props]);

    function IsicludeExeptionElement(answer) {
        let splitUserAnswerString = answer.split('');

        let squareBracketStopComp = false;

        for (let index = 0; index < splitUserAnswerString.length; index++) {
            if (splitUserAnswerString[index] == "[") {
                squareBracketStopComp = true;
            }

            if (splitUserAnswerString[index] == "]") {
                squareBracketStopComp = false;
            }
        }

        let roundBracketStopComp = false;

        for (let index = 0; index < splitUserAnswerString.length; index++) {
            if (splitUserAnswerString[index] == "(") {
                roundBracketStopComp = true;
            }

            if (splitUserAnswerString[index] == ")") {
                roundBracketStopComp = false;
            }
        }



        let slashStopComp = splitUserAnswerString.includes('\\')

        let singleQuoteStopComp = splitUserAnswerString.filter(x => x == "'").length % 2 === 0;
        let doubleQuoteStopComp = splitUserAnswerString.filter(x => x == '"').length % 2 === 0;

        return slashStopComp || squareBracketStopComp || roundBracketStopComp || !singleQuoteStopComp || !doubleQuoteStopComp
    }

    function runCompeletion() {
        let cssCode = props.cssCompelateCode;

        if (props.exerciseType == "CSS") {

            let answer = props.userAnswer;

            if (IsicludeExeptionElement(answer)) {
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

    function setCodeBlocks() {
        if (props.exerciseType == "CSS") {
            SetCssBlock(<div className="code-constainer">
                <textarea placeholder="Write code..." className={props.userAnswer == "" ? "user-answer-empty" : ""} value={props.userAnswer} onInput={props.onInputAnswer} onKeyUp={runCompeletion} id="user-answer" ></textarea>
                <pre className="code-text" id="css-code" disabled>{syntaxHighlighting(props.inputCSSValue,"css")}</pre>
            </div>)

            SetHtmlBlock(<div className="code-constainer">
                <pre className="code-text" id="html-code" >{syntaxHighlighting(props.inputHTMLValue,"html")}</pre>
            </div>)
        }
    }


    function syntaxHighlighting(arr, type) {
        if (type == "html") {
            return arr.map(x => <SyntaxHighlighter language="html" style={okaidia}>{x}</SyntaxHighlighter>)
        }
        else {
            return arr.map(x => <SyntaxHighlighter language="css" style={okaidia}>{x}</SyntaxHighlighter>)
        }
    }

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