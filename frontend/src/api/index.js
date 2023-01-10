import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        Accept: 'application/json',
        'Authorization': 'application/json',
        Cache: "no-cache",
      },
    withCredentials: true,
}) 