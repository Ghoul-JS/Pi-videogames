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
      dispatch({
        type: 'ERROR',
        payload: error
      })
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
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  }
}

export const filterGameByName = (payload) => {
  return async function(dispatch) {
    try{
      const response = await fetch(`http://localhost:3001/videogames?name=${payload}`);
      const data = await response.json();
      console.log("by name:",data)
      dispatch({
        type: "FILTER_VIDEOGAME_NAME",
        payload: data
      })
    }catch(error){
      dispatch({
        type: 'ERROR',
        payload: error
      })
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
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const postNewVideoGame = (videogame) => {
  return async function (dispatch) {
    try {

      const options = {
        method: 'POST',
        body: JSON.stringify(videogame),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch("http://localhost:3001/videogames", options)
      console.log(response);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "POST_VIDEOGAMES",
        payload: data, 
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
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

export const apiOrDb = (payload) => {
  return {
      type: 'API_OR_DB',
      payload: payload
    }
}


