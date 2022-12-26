import React from 'react'
import { useSelector } from "react-redux";
import style from './Individual.module.css'
import { Link } from "react-router-dom";

export default function IndividualPrueba ({img, name, id, genres, rating}) {
    console.log(genres);
    //arreglar los generos de la DB en las card
    return (
        <div className={style.containerInd}>
            <Link to={`/videogames/${id}`}>
                <img className={style.img} src={img} alt={name} />
                <h2 className={style.txtColor}>{name}</h2>
                <p className={style.txtColor}>{
                //  genres
                typeof genres === 'string' 
                ? genres
                : (genres?.map(g => g).join(' | '))
                }
                </p>
            </Link>
            <p className={style.txtColor}>{rating}</p>
            {/* <button onClick={() => alert(id)}>X</button> */}
        </div>
    )
}