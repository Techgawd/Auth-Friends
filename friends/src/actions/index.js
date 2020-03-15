import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        localStorage.setItem('userToken', res.data.payload);
        return true;
    })
    .catch(err => {
        console.error(err.response);
    })
};

export const getFriends = () => {
    dispatch({ type: FETCHING_FRIENDS });
    axiosWithAuth()
      .get('/friends')
      .then(res => {
          console.log(res);
      })
};