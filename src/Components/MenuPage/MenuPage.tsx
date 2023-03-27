import React, { useState } from "react";
import {  Link } from "react-router-dom"
import './MenuPage.css'


export default function MenuPage(props: any) {
    return (
        <body>
            <header className="mainPage-header">
                <h1>Web Trainer</h1>
            </header>

            <div className="buttons">
                <div className="button__container">
                <Link to="/exercises/html-exersises"><input type="submit" value="HTML Trainer" /></Link>
                </div>
                <div className="button__container">
                <Link to="/exercises/css-exersises"><input type="submit" value="CSS Trainer" /></Link>
                </div>
            </div>

        </body>
    )
}