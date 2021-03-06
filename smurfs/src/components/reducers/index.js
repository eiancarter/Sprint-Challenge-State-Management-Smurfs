import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    UPDATE_SMURF_START,
    UPDATE_SMURF_SUCCESS,
    UPDATE_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [...action.payload]
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...action.payload],
                error: '',
                isFetching: false
            };
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                error: "",
                isFetching: true
            };
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                smurfs: [...action.payload]
        };
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
        };
        case UPDATE_SMURF_START:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
          case UPDATE_SMURF_SUCCESS:
            return {
              ...state,
              isFetching: false,
              error: "",
              smurfs: [...action.payload]
            };
          case UPDATE_SMURF_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;
