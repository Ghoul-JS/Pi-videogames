import React from 'react'
import { useSelector } from "react-redux";
import style from './Individual.module.css'
import { Link } from "react-router-dom";

export default function IndividualPrueba ({img, name, id, genres, rating}) {
    return (
        <div className={style.containerInd}>
            {console.log(genres)}
            <Link to={`/videogames/${id}`}>
                <img className={style.img} src={img} alt={name} />
                <h2 className={style.txtColor}>{name}</h2>
                <p className={style.txtColor}>{
                typeof genres === 'string' 
                ? genres
                : (genres?.map(g => g.name).join(' | '))
                }
                </p>
            </Link>
            <p className={style.txtColor}>{rating}</p>
        </div>
    )
}