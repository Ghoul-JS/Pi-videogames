import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../../redux/actions/index.js";
import style from "./Card.module.css";
import IndividualPrueba from "../card/IndividualPrueba.jsx";
import Nav from "../navigate/Nav.jsx";
import { getGenres } from "../../../redux/actions/index.js";

// import style from "./Nav.module.css";

export default function CardPrueba() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideoGames());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <div>
        <Nav />
      </div>

      <div className={style.containerCard}>
        {videogames && videogames.length > 0 ? (
          videogames?.map((game) => (
            <IndividualPrueba
              key={game.id}
              id={game.id}
              name={game.name}
              img={game.background_image}
              genres={game.genres}
              rating={game.rating}
            />
          ))
        ) : (
          <h1 className={style.loading}>Loading...</h1>
        )}
      </div>
    </>
  );
}
