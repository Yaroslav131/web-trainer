import "./Button.css"

export default function Button(props:any)
{
    return(
        <button onClick={props.onClick} className="reset">{props.buttonText}</button>
    )
}