import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        localStorage.setItem('userToken', res.data.payload);
        return true;
    })
    .catch(err => {
        console.error(err.response);
    })
};

// export const login = creds => dispatch => {
//     dispatch({ type: LOGIN_START });
//     return axios
//     .post('http://localhost:5000/api/login', creds)
//     .then(res => {
//         localStorage.setItem('userToken', res.data.payload);
//         return true;
//     })
//     .catch(err => {
//         console.error(err.response);
//     })
// };

// export const userLogin = (userCredentials) => dispatch => { 
        
//     dispatch({type: USER_LOGIN_START})

//     axiosWithAuth()
//     .post('/auth/login', userCredentials)
//     .then(res => {
//       localStorage.setItem('token', JSON.stringify(res.data.payload))
//       dispatch({type: USER_LOGIN_SUCCESS, payload: res})
//     })
//     .catch(err => {
//         console.log("Login Error", err.response)
//         dispatch({type: USER_LOGIN_FAILURE, payload: err})
//     })
//   }




export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axiosWithAuth()
      .get('/friends')
      .then(res => {
          console.log(res);
      })
};