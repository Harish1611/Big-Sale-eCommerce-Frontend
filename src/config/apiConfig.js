import axios from "axios";

const CYCLIC_BACKEND = 'https://plum-chameleon-suit.cyclic.app/'

const LOCALHOST='http://localhost:5454'

const jwt = localStorage.getItem('jwt')

export const API_BASE_URL = CYCLIC_BACKEND;

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})