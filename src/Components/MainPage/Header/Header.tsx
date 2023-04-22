import React from "react";
import '../../../reset.css'
import './Header.css'
import home from '../../../assets/imgs/icons/home-page.png'
import menu from '../../../assets/imgs/icons/humburger-menu.png'
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks";
import { openAsidebar, closeAsidebar } from '../Sidebar/asidebarSlice'

interface Iprops {
    headerTitle:string
}

export default function Header(props: Iprops) {
    const dispatch = useAppDispatch()
    return (
        <header className="header">
            <Link to="/"><div className="header-icon-container tooltip" >
                <span className="tooltiptext right-bottom-tooltip">Главное меню</span>
                <img className="home" src={home} alt="Меню" />
            </div></Link>
            <div className="header-logo-container">
                <p className="logo">{props.headerTitle}</p>
            </div>

            <div onClick={()=>{dispatch(openAsidebar())}} className={ "header-icon-container list-icon tooltip"}>
                <span className="tooltiptext left-bottom-tooltip">Меню</span>
                <img className="menu" src={menu} alt="Меню" />
            </div>
        </header >
    )
}