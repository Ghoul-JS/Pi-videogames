import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar() {

    return(
        <>
            <input className={style.searchInput} type="search" placeholder='Search...'/>
            <button className={style.searchButton}>Search</button>
        </>
    )
}