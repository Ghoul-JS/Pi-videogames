import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./form.module.css";
import { getGenres, postNewVideoGame } from "../../redux/actions";
import validation from "./validation";

export default function Form() {

    const platforms = ['PC', 'PlayStation 5', 'Xbox One', 'PlayStation 4', 'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android', 'Nintendo 3DS', 'Nintendo DS', 'Nintendo DSi', 'macOS'];
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);

    const [gameInfo, setGameInfo] = useState({
        name: '',
        description: '',
        released: '',
        background_image: '',
        rating: 0,
        genres: [],
        platforms: []
    })

    const [error, setError] = useState({
        name: '',
        description: '',
        released: '',
        background_image: '',
        rating: 0,
        genres: [],
        platforms: []
    })

    const handleInputChange = (e) => {
        setGameInfo({
            ...gameInfo,
            [e.target.name]:e.target.value
        })

        setError(
            validation({
                ...gameInfo,
                [e.target.name]:e.target.value
            })
        )
    }

    const handleSelectForGenres = (e) =>{
        setGameInfo({
            ...gameInfo,
            genres: [...new Set([...gameInfo.genres, e.target.value])]//set funciona para que no se repitan los elementos que estoy agregando al array de genres
        })

        setError(
            validation({
                ...gameInfo,
                [e.target.name]:e.target.value
            })
        )  
    }

    const handleSelectForPlatforms = (e) =>{
        setGameInfo({
            ...gameInfo,
            platforms: [...new Set([...gameInfo.platforms, e.target.value])]
            
        })

        setError(
            validation({
                ...gameInfo,
                [e.target.name]:e.target.value
            })
        )  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Object.keys(error).length) {
            console.log(gameInfo);
            dispatch(postNewVideoGame(gameInfo))
            setGameInfo({
                name: '',
                description: '',
                released: '',
                background_image: '',
                rating: 0,
                genres: [],
                platforms: []
            })

            setError(
                validation({
                    ...gameInfo,
                    [e.target.name]:e.target.value
                })
            )
            alert("Game created successfully")
        } else {
            alert('You must comple the form')
        }   
    }

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch])

    return (
        <>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <h1>Create a New VideoGame</h1>
                    <label htmlFor="name">Name:</label>
                    <input className={error.name && style.warning} value={gameInfo.name} onChange={handleInputChange} type="text" id="name" name="name" placeholder="ej: League of Legends"/>
                    <p className={style.danger}>{error.name}</p>
                    <br />
                    
                    <label htmlFor="released">Release Date:</label>
                    <input className={error.released && style.warning} value={gameInfo.released} onChange={handleInputChange} type="date" id="released" name="released" placeholder="ej: 29/10/2009"/>
                    <p className={style.danger}>{error.released}</p>
                    <br />

                    <label htmlFor="rating">Rating:</label>
                    <input className={error.rating && style.warning} value={gameInfo.rating} onChange={handleInputChange} type="number" id="rating" name="rating" placeholder="ej: 4.5"/>
                    <p className={style.danger}>{error.rating}</p>
                    <br />
                    
                    <label htmlFor="description">Description:</label>
                    <textarea className={error.description && style.warning} value={gameInfo.description} onChange={handleInputChange} id="description" name="description" placeholder="ej: Created by Riot Games"/>
                    <p className={style.danger}>{error.description}</p>
                    <br />

                    <label htmlFor="background_image">Image:</label>
                    <input className={error.background_image && style.warning} value={gameInfo.background_image} onChange={handleInputChange} type="text" id="background_image" name="background_image" placeholder="URL background_image"/>
                    <p className={style.danger}>{error.background_image}</p>
                    <br />

                    <div>
                        <div>
                        <select className={style.select} onChange={handleSelectForGenres}>
                            <option value="genres" disabled>Genres</option> 
                            {
                                genres?.map(genre => (
                                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                                )) 
                            }
                        </select>
                         <p className={style.danger}>{error.genres}</p>
                        </div>
                            <div>
                                <select className={style.select} onChange={handleSelectForPlatforms}>
                                <option value="platforms" disabled>Platforms</option>
                                {
                                    platforms?.map((platform, i) => (
                                        <option key={i} value={platform}>{platform}</option>
                                    ))
                                }
                                </select>
                                <p className={style.danger}>{error.platforms}</p>
                            </div>
                    </div>

                    <div>
                        <button type="submit" className={style.createButton}>
                            Create
                        </button>
                        <button type="button" className={style.backButton}>
                            <Link to='/videogames'>Back</Link>
                        </button>
                    </div>
                    
                </form>
            </div>
        </>
    );
}
