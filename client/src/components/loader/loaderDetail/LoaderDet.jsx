import React from "react";
import style from './LoaderDet.module.css'

export default function LoaderDet() {
    return(
        <>
            <div className={style.loader} >
                <img className={style.img} src={'https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'} alt="loader" />
            </div>
        </>
    )
}