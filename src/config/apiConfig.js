import axios from "axios";

const LOCALHOST='http://localhost:5454'

const jwt = localStorage.getItem('jwt')

export const API_BASE_URL = LOCALHOST;

export const api = axios.create({
    baseURL:LOCALHOST,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})