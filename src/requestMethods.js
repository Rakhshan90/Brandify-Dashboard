import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjNjNTFhMDI4YWM3MWUxYWNjMGZiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgxMjYzOCwiZXhwIjoxNjgwMDcxODM4fQ.f9q1qbs8QTq6_BNCNeyHCXTeK3iCVxkjb8ocX6Wggt0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers : {token : `Bearer ${TOKEN}`},
})
