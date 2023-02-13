import React from "react";
import '../../../reset.css'
import './Header.css'
import home from '../../../imgs/home-page.png'

export default function Header() {
    return (
        <header>
            <div  className="home-container">
            <img className="home" src={home} alt="Меню" />
            </div>
            <div className="logo-container">
                <p className="logo"> Web Trainer</p>
            </div>
        </header >
    )
}