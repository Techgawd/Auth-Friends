import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            'content-type': 'application/json',
            Authorization: `${token}`
        },
        baseURL: 'http://localhost:5000/api'
    })
};