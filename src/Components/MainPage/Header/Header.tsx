import React from "react";
import '../../../reset.css'
import './Header.css'
import home from '../../../imgs/icons/home-page.png'
import menu from '../../../imgs/icons/humburger-menu.png'
import { Link } from "react-router-dom"

export default function Header(props: any) {
    return (
        <header className="header">
            <Link to="/"><div className="home-container tooltip" >
                <span className="tooltiptext right-bottom-tooltip">Главное меню</span>
                <img className="home" src={home} alt="Меню" />
            </div></Link>
            <div className="logo-container">
                <p className="logo"> Web Trainer</p>
            </div>

            <div onClick={props.onOpenSidebar} className={props.isSidebarOpen ? "menu-open tooltip" : "home-container tooltip"}>
                <span className="tooltiptext left-bottom-tooltip">Меню</span>
                <img className="menu" src={menu} alt="Меню" />
            </div>
        </header >
    )
}