import React, { useEffect } from "react";
import '../../../reset.css'
import './JobBlock.css'
import TextAnimation from "./TextAnimation";

export default function JobBlock(props: any) {
    
    useEffect(() => {
        TextAnimation(props.text);
    },[props.text]);

    return (
        <div className="job-block">
            <div id="content" className="job-text">
            </div>
        </div>
    )
}
