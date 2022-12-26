import React, {useState} from "react";
import { useDispatch } from "react-redux";
import style from './SearchBar.module.css';
import { filterGameByName } from "../../../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()

    const [name, setName] = useState("")

    const handleName = (e) => {
        // e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(filterGameByName(name))
        setName("")
    }

    return(
        <>
            <input className={style.searchInput} type="search" placeholder='Search...' onChange={handleName}/>
            <button className={style.searchButton} type="submit" onClick={handleSubmit}>Search</button>
        </>
    )
}