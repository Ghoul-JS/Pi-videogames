import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameId } from "../../redux/actions/index.js";

export default function DetailGame() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "---");
  const detailGame = useSelector((state) => state.detailGame);
  console.log(detailGame, "-");

  useEffect(() => {
    dispatch(getVideogameId(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        {detailGame.name ? (
          <div key={detailGame.id}>
            <img src={detailGame.background_image} alt={detailGame.name} />
            <h1>{detailGame.name}</h1>
            <p>Genres: {
              typeof detailGame.genres[0] === 'object' 
                ? (detailGame.genres?.map(e => e.name).join(' | '))
                : (detailGame.genres?.map(g => g).join(' | '))
            }</p>

            <p>Description: {detailGame.description}</p>
            <p>Released date: {detailGame.released}</p>
            <p>Rating: {detailGame.rating}</p>
            <p>Platforms: {detailGame.platforms}</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
        <Link to="/videogames">Back</Link>
      </div>
    </>
  );
}

//SOLUCIONAR LA DESCRIPTION Y LOS GENEROS DE LA BD
