import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, getGenres} from "../../../redux/actions/index.js";
import style from "./Card.module.css";
import IndividualPrueba from "../card/IndividualPrueba.jsx";
import Nav from "../navigate/Nav.jsx";
import Paginated from "../../paginated/Paginated.jsx";
import Loader from "../../loader/Loader.jsx";

export default function CardPrueba() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1)
  const [gamePerPage, setGamePerPage] = useState(15)
  const lastIndex = currentPage * gamePerPage
  const firstIndex = lastIndex - gamePerPage
  const currentGames = videogames.slice(firstIndex, lastIndex)

  const changedPage = (page) => {
    setCurrentPage(page)
  }

  const prevPage = () => {
    let firstPage = firstIndex + 1
    if(currentPage === firstPage) return
    const prev = currentPage -1
    setCurrentPage(prev)
  }

  const nextPage = () => {
    const next = currentPage + 1
    setCurrentPage(next)

    if(!currentGames.length) {
      setCurrentPage(currentPage-1)
    }
  }

  useEffect(() => {
    dispatch(getVideoGames());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <div>
        <Nav setCurrentPage={setCurrentPage} setOrder={setOrder}/>
      </div>

      <div className={style.containerCard}>
        {currentGames && currentGames.length > 0 ? (
          currentGames?.map((game) => (
            <>
              <IndividualPrueba
                key={game.id}
                id={game.id}
                name={game.name}
                img={game.background_image}
                genres={game.genres}
                rating={game.rating}
              />
              {console.log(game.genres)}
            </>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div>
        <Paginated 
        videogames={videogames.length} 
        changedPage={changedPage} 
        gamesPerPage={gamePerPage}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        />
      </div>
    </>
  );
}
