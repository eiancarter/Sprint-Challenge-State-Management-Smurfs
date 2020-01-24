//yarn add axios - done
import axios from 'axios';

//get smurfs from database
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
//post to database
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
//edit & delete smurfs
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';
export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FETCH_SMURF_FAILURE, payload: error.response})
        })
}

export const addSmurfMember = smurf => {
    return dispatch => {
        dispatch({ type: ADD_SMURF_START });
        axios
            .post(`http://localhost:3333/smurfs`, smurf)
            .then(response => {
                dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: ADD_SMURF_FAILURE, payload: error })
            })
    };
};

export const deleteSmurf = smurf => {
    return dispatch => {
      dispatch({ type: DELETE_SMURF_START });
      axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(response => dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: DELETE_SMURF_FAILURE, payload: error }));
    };
  };
  
  export const updateSmurf = smurf => {
    return dispatch => {
      dispatch({ type: UPDATE_SMURF_START });
      axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(response => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: UPDATE_SMURF_FAILURE, payload: error }));
    };
  };