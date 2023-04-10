import { useRouteError } from "react-router-dom";
import './NotFound.css'

export default function ErrorPage() {
    return (
        <div id="error-page">
            <div className="error-text-container">
                <h1 className="error-headine">Упсс!</h1>
                <h2 className="error-404-text">404</h2>
                <p className="error-text">Извените, страница не найдена.</p>
            </div>
        </div>
    );
}