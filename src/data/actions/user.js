import axios from 'axios';
import { DELETE_USER_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './types';

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
                    // const errorMsg = error.message;
                    // dispatch(fetchUsersFailure(errorMsg));
                    console.log(error)
                });
};