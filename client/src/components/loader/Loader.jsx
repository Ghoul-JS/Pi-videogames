import React from "react";
import style from './Loader.module.css'

export default function Loader() {
    return(
        <>
            <div className={style.loader}>
                <img className={style.jhin} src={'https://i.pinimg.com/originals/ff/10/20/ff10203224533e717661e2dc2bf4b6b5.gif'} alt="loader" />
                <img className={style.loadBar} src={'https://i.gifer.com/origin/6a/6a2dfb96f278692f0900cc08975efe0e.gif'} alt="" />
            </div>
        </>
    )
}