import { useRouteError } from "react-router-dom";
import './NotFound.css'

import worker from "../../assets/imgs/icons/worker.png"

export default function InProgressPage() {
    return (
        <div id="error-page">
            <div className="error-text-container">
             <img src={worker}  className="worker-img"/>
                <p className="error-text">Мы работаем над эти расделом.</p>
            </div>
        </div>
    );
}