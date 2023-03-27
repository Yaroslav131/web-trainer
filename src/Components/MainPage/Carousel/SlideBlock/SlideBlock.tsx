import "./SlideBlock.css"

export default function SlideBlock(props: any) {
    return (
        <div className="slide-block">
            <p className="slide-text">{props.text}</p>
            <img className="side-img" src={props.slideImg}/>
        
         
        </div>
    )
}