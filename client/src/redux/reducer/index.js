const initialState = {
    videogames: [],
    gamesBackUp: [],
    detailGame: {},
    genres: []
}

export default function rootReducer(state=initialState, action) {
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return {
                ...state, 
                videogames: action.payload,
                gamesBackUp: action.payload
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
        case 'FILTER_BY_GENRE':
            const allVideoGames = state.gamesBackUp;
            const genresFiltered = action.payload === "Genres" ? allVideoGames : allVideoGames.filter(e => e.genres?.includes(action.payload))
            return{
                ...state,
                videogames: genresFiltered,
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

        case "ORDER_BY_RATING":
            
            let sortByRating = action.payload === "Hight"
            ? state.videogames.sort((a,b)=>{
                
                if(a.rating > b.rating){
                    return -1;
                }
                if(a.rating < b.rating){
                    return 1;
                }
                return 0;

            }): state.videogames.sort((a,b)=>{

                if(a.rating > b.rating){
                    return 1;
                }
                if(a.rating < b.rating){
                    return -1;
                }
                return 0;
            })
            return{
                ...state,
                videogames: sortByRating
            }
            
        default:
            return {...state}
    }
}