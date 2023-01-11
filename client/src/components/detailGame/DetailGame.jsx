import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from './DetailGame.module.css'
import { getVideogameId } from "../../redux/actions/index.js";
import LoaderDet from "../loader/loaderDetail/LoaderDet";


export default function DetailGame() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailGame = useSelector((state) => state.detailGame); 

  useEffect(() => {
    dispatch(getVideogameId(id));
  }, [dispatch, id]);

  return (
    <>
      <div className={style.bg}>
        {detailGame.name ? (
          
          <div key={detailGame.id} className={style.container}>
            <div className={style.details}>
              <img src={detailGame.background_image} alt={detailGame.name} className={style.img}/>
              <p>Rating: {detailGame.rating}</p>
              <p>Genres: {
                typeof detailGame.genres[0] === 'object' 
                  ? (detailGame.genres?.map(e => e.name).join(' | '))
                  : (detailGame.genres?.map(g => g).join(' | '))
              }</p>
              <p>Platforms: {
                Array.isArray(detailGame.platforms)  
                ? detailGame.platforms?.map(g => g).join(' | ')
                : detailGame.platforms
              }</p>
              <p>Released date: {detailGame.released}</p>

              <div className={style.backLink}>
                <Link to="/videogames">Back</Link>
              </div>
            </div>

            <div className={style.detailsTxt}>
              <h1>{detailGame.name}</h1>
              <p>{detailGame.description}</p>  
            </div>

          </div>
        ) : (
          <LoaderDet /> 
        )}
      </div>
    </>
  );
}

