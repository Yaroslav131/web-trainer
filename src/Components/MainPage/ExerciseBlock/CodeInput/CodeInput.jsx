import React, { useEffect, useRef, useState } from "react";
import './CodeInput.css'
import { IFrame } from "./IFrame";
import "./IFrame.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CodeInput = (props) => {

    const inputEl = useRef(null);
    const [reactCode, SetReactCode] = useState(<></>);
    const htmlBlock = <div className="code-constainer">
        <pre className="code-text" id="html-code" >{syntaxHighlighting(props.inputHTMLValue, "html")}</pre>
    </div>;
    const cssBlock = <div className="code-constainer">
        <textarea ref={inputEl} placeholder="Write code..." className={props.userAnswer == "" ? "user-answer-empty" : ""} value={props.userAnswer} onInput={props.onInputAnswer} onKeyUp={runCompeletion} id="user-answer" ></textarea>
        <pre className="code-text" id="css-code" disabled>{syntaxHighlighting(props.inputCSSValue, "css")}</pre>
    </div>;

    useEffect(() => {
        runCompeletion();
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

        let braceBracketStopComp = false;

        for (let index = 0; index < splitUserAnswerString.length; index++) {
            if (splitUserAnswerString[index] == "{") {
                braceBracketStopComp = true;
            }

            if (splitUserAnswerString[index] == "}") {
                braceBracketStopComp = false;
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

        return slashStopComp || braceBracketStopComp || squareBracketStopComp || roundBracketStopComp || !singleQuoteStopComp || !doubleQuoteStopComp
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
                    <img key={counter++} src={require(`../../../../assets/imgs/exercise-imgs/${x.name}.png`)} alt={x.alt} className={x.class} id={x.id}></img>
                ))
            }
        }

        return resoult;
    }

    function syntaxHighlighting(arr, type) {
        if (type == "html") {
            return arr.map((x, index) => <SyntaxHighlighter key={index} language="html" style={okaidia}>{x}</SyntaxHighlighter>)
        }
        else {
            return arr.map((x, index) => <SyntaxHighlighter key={index} language="css" style={okaidia}>{x}</SyntaxHighlighter>)
        }
    }

    return (
        <div className={"blocks-container"}>
            <div className="left">
                <div className="block-container">
                    <label className="type-head">CSS</label>
                    {cssBlock}
                </div>
                <div className="block-container">
                    <label className="type-head">HTML</label>
                    {htmlBlock}
                </div>

            </div>
            <div className="right">
                <label className="type-head">Output</label>
                <IFrame className={props.iFrameClassName}>
                    {reactCode}
                </IFrame>
            </div>
        </div >
    );
};

export default CodeInput;