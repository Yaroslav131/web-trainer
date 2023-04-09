import { useRouteError } from "react-router-dom";
import './NotFound.css'

export default function ErrorPage() {
    return (
        <div id="error-page">
            <div className="error-text-container">
                <h1 className="error-headine">Oops!</h1>
                <h2 className="error-404-text">404</h2>
                <p className="error-text">Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    );
}