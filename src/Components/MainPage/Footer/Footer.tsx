import React from "react";
import { Link } from "react-router-dom"
import vk from '../../../imgs/vk.png'
import inst from '../../../imgs/instagram.png'
import git from '../../../imgs/github.png'
import linked from '../../../imgs/linkedin.png'
import "../../../reset.css"
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="creator-text-container">
                <p className="creator-text">Created by Yaroslav Bubnov and Maksim ...</p>
            </div>
            <div className="icons-container">
                <div className="icon-container">
                    <Link to="https://vk.com/id587915139" >
                        <img className="icon" src={vk} alt="" />
                    </Link>
                </div>
                <div className="icon-container">
                    <Link to="https://www.instagram.com/___yarch_ek___/" >
                        <img className="icon" src={inst} alt="" />
                    </Link>
                </div>
                <div className="icon-container">
                    <Link to="https://github.com/Yaroslav131" >
                        <img className="icon" src={git} alt="" />
                    </Link>
                </div>
                <div className="icon-container">
                    <Link to="https://www.linkedin.com/feed/" >
                        <img className="icon" src={linked} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}