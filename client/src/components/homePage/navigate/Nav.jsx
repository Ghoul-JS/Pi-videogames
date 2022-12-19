import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenre, orderByRating, alphabeticalOrder } from "../../../redux/actions/index.js";
import OptionAllGenres from "../AllGenres.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";
import style from "./Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleFilterByGenre = (e) => {
    dispatch(filterByGenre(e.target.value));
  }

  const habldeFilterByRate = (e) => {
    dispatch(orderByRating(e.target.value))
  }

  const handleAlphabeticalOrder = (e) => {
    dispatch(alphabeticalOrder(e.target.value))
  }

  return (
    <>
      <div className={style.container}>
        <div>
          <h1 className={style.title}>Khada J</h1>
        </div>

        <div>
          <select
            className={style.select}
            name="Genres"
            onChange={handleFilterByGenre}
          >
            <option className={style.optionsDisabled} value="Genres">
              All Games
            </option>
            <OptionAllGenres allGenres={allGenres} />
          </select>

          <select className={style.select} name="Alphabetic" onChange={handleAlphabeticalOrder}>
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
          <button className={style.create}>Create</button>
        </div>
      </div>
    </>
  );
}

