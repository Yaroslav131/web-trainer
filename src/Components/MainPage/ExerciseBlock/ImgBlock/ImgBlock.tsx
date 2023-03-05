import React, { useEffect } from "react";
import '../../../../reset.css'
import './ImgBlock.css'

export default function ImgBlock(props: any) {

    let img = "";
    let body;
    try {
        img = require(`../../../../imgs/${props.imgURL}`);
    }
    catch (e) {
        console.log(e);
        body = <> </>;
    }

    if (img != "") {
        body = <div className="img-contaiter">
            <div className="task-img">
                <img src={img} alt="Задание" />
            </div>
        </div>
    }

    return (
        <div>
            {body}
        </div>
    )
}