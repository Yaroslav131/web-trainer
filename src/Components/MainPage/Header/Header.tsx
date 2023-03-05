import React from "react";
import '../../../reset.css'
import './Header.css'
import home from '../../../imgs/home-page.png'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <Link to="/"><div className="home-container">
                <img className="home" src={home} alt="Меню" />
            </div></Link>
            <div className="logo-container">
                <p className="logo"> Web Trainer</p>
            </div>
        </header >
    )
}