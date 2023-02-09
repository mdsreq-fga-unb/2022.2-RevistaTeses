import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api-portal-teses.onrender.com",
    headers: {
        Accept: 'application/json',
        'Authorization': 'application/json',
        Cache: "no-cache",
      },
    withCredentials: true,
}) 