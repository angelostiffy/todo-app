import axiosClass from 'axios';

const axios = axiosClass.create({
    baseURL: 'http://localhost:3000',
    timeout: 15000
});

export default axios;   