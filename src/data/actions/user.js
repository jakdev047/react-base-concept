import axios from 'axios';
import { 
    ADD_USER_REQUEST, 
    DELETE_USER_REQUEST, 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    UPDATE_USER_REQUEST
} from './types';

// loadUsers
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// get users
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error=>{
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}

// delete user
export const deleteUser = id => dispatch => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response=>{
                    dispatch({
                        type: DELETE_USER_REQUEST,
                        payload: id
                    })
                })
                .catch(error=>{
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg));
                    console.log(error)
                });
};

// add user
export const addUserRequest = user => dispatch => {
    return axios.post(`https://jsonplaceholder.typicode.com/users`,user)
                .then(response=>{
                    dispatch({
                        type: ADD_USER_REQUEST,
                        payload: user
                    });
                })
                .catch(error=>{
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg));
                    console.log(error)
                });
};

// update
export const updateUserRequest = (id,user) => dispatch => {
    return axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,user)
                .then(response=>{
                    const user = response.data;
                    dispatch({
                        type: UPDATE_USER_REQUEST,
                        payload: user
                    });
                })
                .catch(error=>{
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg));
                    console.log(error)
                });
};