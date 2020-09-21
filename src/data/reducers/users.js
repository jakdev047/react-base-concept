import { 
    ADD_USER_REQUEST, 
    DELETE_USER_REQUEST, 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS,
    UPDATE_USER_REQUEST
} from "../actions/types";

const initialState = {
    users: [],
    currentUser: null,
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

        case ADD_USER_REQUEST:
            return {
                ...state,
                users: [action.payload,...state.users],
                loading: false
            };

        case UPDATE_USER_REQUEST:
            return {
                ...state,
                users: state.users.map(user =>  user.id === action.payload.id ? action.payload : user ),
                loading: false
            };

        default:
            return state;
    };
};

export default reducers;