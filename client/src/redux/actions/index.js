export const getVideoGames = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/videogames");
      const data = await response.json();
      console.log(data.game)
      dispatch({
        type: "GET_VIDEOGAMES",
        payload: data.game, 
      });
    } catch (error) {
      //MANEJAR ERRORES POR ACTION: PENDING...
      console.log(error);
    }
  };
};

export const getVideogameId = (id) => {
  return async function(dispatch) {
    try{
      const response = await fetch(`http://localhost:3001/videogames/${id}`);
      const data = await response.json();
      console.log("data:",data)
      dispatch({
        type: "GET_VIDEOGAME_ID",
        payload: data
      })
    }catch(error){
      //MANEJAR ERRORES POR ACTION: PENDING...
      console.log(error)
    }
  }
}

export const getGenres = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/genres");
      const data = await response.json();
      dispatch({
        type: "GET_GENRES",
        payload: data, 
      });
    } catch (error) {
      //MANEJAR ERRORES POR ACTION: PENDING...
      console.log(error);
    }
  };
};

export const filterByGenre = (payload) => {
  return {
    type: 'FILTER_BY_GENRE',
    payload:payload
  }
}

export const orderByRating = (payload) => {
  return {
      type: "ORDER_BY_RATING",
      payload:payload
  }
}

export const alphabeticalOrder = (payload) => {
  return {
    type: 'ALPHABETICAL_ORDER',
    payload: payload
  }
}
