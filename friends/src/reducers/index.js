import {
    LOGIN_START,
    FETCHING_FRIENDS,
    FETCH_FRIENDS_SUCCESS
    } from '../actions/index';
    
    const initialState = () =>{
        return {
            friends: [],
            loggingIn: false,
            fetching: false
        }
    };
    
    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case LOGIN_START:
              return {
                  ...state,
                  loggingIn: true,
              };
            case FETCHING_FRIENDS:
              return {
                  ...state,
                  fetching: true,
              };
            case FETCH_FRIENDS_SUCCESS:
              return {
                  ...state,
              };
            default:
              return state;
        }
    };