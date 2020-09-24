import axios from 'axios';


export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://used-tech.herokuapp.com/api',
        headers: {
            token: token,
        },
    });
};
