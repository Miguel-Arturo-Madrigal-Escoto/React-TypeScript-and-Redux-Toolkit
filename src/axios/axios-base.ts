import axios from "axios";

// localhost:4000/api/users/create
// localhost:4000/api/users/login

export const axiosBase = axios.create({
    baseURL: 'http://localhost:4000/api/'
});