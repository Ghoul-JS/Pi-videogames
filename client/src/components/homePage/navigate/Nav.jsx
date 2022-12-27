import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, getGenres, filterByGenre, orderByRating, alphabeticalOrder, apiOrDb } from "../../../redux/actions/index.js";
import OptionAllGenres from "../AllGenres.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import img from './logo2.jpeg'

export default function Nav({setCurrentPage, setOrder}) {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleFilterByGenre = (e) => {
    e.preventDefault();
    dispatch(filterByGenre(e.target.value));
    setCurrentPage(1)
  }

  const habldeFilterByRate = (e) => {
    e.target.value === "Rating"
    ? dispatch(getVideoGames)
    :dispatch(orderByRating(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(1)

  }

  const handleAlphabeticalOrder = (e) => {
    dispatch(alphabeticalOrder(e.target.value))
    setOrder(e.target.value)
    setCurrentPage(1)
  }

  const handleApiOrDBFilter = (e) => {
    e.preventDefault()
    dispatch(apiOrDb(e.target.value))
    setCurrentPage(1)
  }

  return (
    <>
      <div className={style.container}>
        <div>
          {/* <h1 className={style.title}>Khada J</h1> */}
          <img className={style.logo} src={img} alt="logo" />
        </div>

        <div>

          <select className={style.select} onChange={handleApiOrDBFilter}>
              <option className={style.optionsDisabled} value="Videogames">Videogames</option>
              <option value="API">API</option>
              <option value="DB">DB</option>
          </select>

          <select className={style.select} name="Genres" onChange={handleFilterByGenre}>
            <option className={style.optionsDisabled} value="Genres">
              All Games
            </option>
            <OptionAllGenres allGenres={allGenres} />
          </select>

          <select className={style.select} name="alphabetic" onChange={handleAlphabeticalOrder}>
            <option className={style.optionsDisabled} value="alphabetic">
              Alphabetic
            </option>
            <option className={style.options} value="upward">
              A-Z
            </option>
            <option className={style.options} value="downward">
              Z-A
            </option>
          </select>

          <select className={style.select} onChange={habldeFilterByRate}>
            <option className={style.optionsDisabled} value="Rating">
              Rating
            </option>
            <option className={style.options} value="Hight">
              Hight Rating
            </option>
            <option className={style.options} value="Low">
              Low Rating
            </option>
          </select>
        </div>

        <div>
          <SearchBar />
        </div>

        <div>
          <button className={style.create} href="/videogames/form">
             <Link to='/videogames/form'>Create</Link> 
          </button>
        </div>
      </div>
    </>
  );
}

