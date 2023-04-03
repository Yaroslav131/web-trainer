import "./SlideBlock.css"

interface Iprops
{
    text:string,
    slideImg:string
}

export default function SlideBlock(props: Iprops) {
    return (
        <div className="slide-block">
            <p className="slide-text">{props.text}</p>
            <img className="side-img" src={props.slideImg}/>
        </div>
    )
}