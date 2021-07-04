import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '93c60d98ad571b6ec366e5f95fd1a835',
        language: 'en-US'
    }
});

export default movieDB;
