import React from 'react'
import {Link} from "react-router-dom"
import style from './LadingPage.module.css'
 
export default function LadingPage() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>¡Welcome USER 1!</h1>
            <button className={style.startButton}>
                <Link to='/videogames'>PRESS START</Link>
            </button>
        </div>
    )
}