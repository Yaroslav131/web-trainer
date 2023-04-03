import React from "react";
import '../../../reset.css'
import './Header.css'
import home from '../../../imgs/icons/home-page.png'
import menu from '../../../imgs/icons/humburger-menu.png'
import { Link } from "react-router-dom"

interface Iprops {
    isSidebarOpen: boolean
    onOpenSidebar: () => void
    headerTitle:string
}

export default function Header(props: Iprops) {
    return (
        <header className="header">
            <Link to="/"><div className="header-icon-container tooltip" >
                <span className="tooltiptext right-bottom-tooltip">Главное меню</span>
                <img className="home" src={home} alt="Меню" />
            </div></Link>
            <div className="header-logo-container">
                <p className="logo">{props.headerTitle}</p>
            </div>

            <div onClick={props.onOpenSidebar} className={props.isSidebarOpen ? "none-icon tooltip" : "header-icon-container tooltip"}>
                <span className="tooltiptext left-bottom-tooltip">Меню</span>
                <img className="menu" src={menu} alt="Меню" />
            </div>
        </header >
    )
}