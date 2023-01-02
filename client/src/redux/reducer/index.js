const initialState = {
    videogames: [],
    gamesBackUp: [],
    detailGame: {},
    genres: [],
    error: {},
    videogame_post: {}
}

export default function rootReducer(state=initialState, action) {
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return {
                ...state, 
                videogames: action.payload,
                gamesBackUp: action.payload,
            }
        case 'GET_VIDEOGAME_ID':
            return {
                ...state,
                detailGame: action.payload
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        case 'API_OR_DB':
            const apiOrDb = state.gamesBackUp;
            const createdFilter = action.payload === "DB" ? apiOrDb.filter(e => e.dbCreated) : apiOrDb.filter( e => !e.dbCreated)
            return{
                ...state,
                videogames: action.payload === "Videogames" ? state.gamesBackUp : createdFilter
            }

        case 'FILTER_BY_GENRE':
            const allVideoGames = state.gamesBackUp;
            let genresFiltered;
            if(action.payload === "Genres") {
                genresFiltered = allVideoGames
            } else {
                genresFiltered = allVideoGames.filter(e => {
                    if(typeof e.genres === "string") return e.genres.includes(action.payload) 
                    else if(Array.isArray(e.genres) && e.genres.some(ev => ev.name === action.payload)) {
                        return e.genres.map(el => el.name === action.payload)
                    }
                })
            }
            return {
                ...state, 
                videogames: genresFiltered 
            }

        case 'ALPHABETICAL_ORDER':
            const alphabeticSort = action.payload === 'alphabetic' || action.payload === 'upward'
            ? state.videogames.sort((a,b) => {
                if(a.name.toUpperCase() > b.name.toUpperCase()) return 1
                if(a.name.toUpperCase() < b.name.toUpperCase()) return -1
                return 0
            } )
            : state.videogames.sort((a,b) => {
                if(a.name.toUpperCase() > b.name.toUpperCase()) return -1
                if(a.name.toUpperCase() < b.name.toUpperCase()) return 1
                return 0
            })
            return {
                ...state,
                videogames:alphabeticSort
            } 
        case "FILTER_VIDEOGAME_NAME": 
            return {
               ...state,
               videogames: action.payload
            }

        case "ORDER_BY_RATING":
            
            let sortByRating = action.payload === "Hight"
            ? state.videogames.sort((a,b)=>{
                if(a.rating > b.rating)return -1;
                if(a.rating < b.rating)return 1;
                return 0;
            }): state.videogames.sort((a,b)=>{
                if(a.rating > b.rating)return 1;
                if(a.rating < b.rating)return -1;
                return 0;
            })
            return{
                ...state,
                videogames: sortByRating
            }
        case 'POST_VIDEOGAMES':
            return {
               ...state,
                videogame_post: action.payload
            }
        
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return {...state}
    }
}