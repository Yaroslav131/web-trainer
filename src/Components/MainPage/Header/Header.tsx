import React from "react";
import '../../../reset.css'
import './Header.css'
import home from '../../../imgs/home-page.png'
import menu from '../../../imgs/humburger-menu.png'
import { Link } from "react-router-dom"

export default function Header(props:any) {
    return (
        <header className="header">
            <Link to="/"><div className="home-container">
                <img className="home" src={home} alt="Меню" />
            </div></Link>
            <div className="logo-container">
                <p className="logo"> Web Trainer</p>
            </div>

            <div onClick={props.onOpenSidebar} className={props.isSidebarOpen? "menu-open"  : "home-container"}>
                <img  className="menu" src={menu} alt="Меню" />
            </div>
        </header >
    )
}