import React, { useEffect, useRef } from "react";
import '../../../../reset.css'
import './TaskBlock.css'


export default function JobBlock(props) {

    const outputEl = useRef(null);

    useEffect(() => {
        TextAnimation(props.text);
    }, [props.text]);

    function TextAnimation(text) {

        if (outputEl.current !== null) {
            outputEl.current.innerHTML = '';
        }

        for (let index = 0; index < text.length; index++) {

            let letter = document.createElement('span')

            letter.textContent = text[index];

            if (letter.textContent.match(/\s/)) {
                letter.style.margin = 'auto 5px'
            }
            letter.style.animationDelay = index / 50 + 's'

            outputEl.current?.appendChild(letter)
        }
    }

    return (
        <div className="job-block">
            <div  ref={outputEl} className="job-text">
            </div>
        </div>
    )
}
