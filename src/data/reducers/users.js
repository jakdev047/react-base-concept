import { DELETE_USER_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../actions/types";

const initialState = {
    users: [],
    loading: true,
    error: ''
};

const reducers = (state=initialState,action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        };

        case FETCH_USERS_SUCCESS: {
            return {
                loading:false,
                users: action.payload
            }
        }

        case FETCH_USERS_FAILURE: {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }

        case DELETE_USER_REQUEST: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                loading: false
            }
        }

        default:
            return state;
    };
};

export default reducers;