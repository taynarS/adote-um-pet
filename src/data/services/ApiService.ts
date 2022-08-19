import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'https://localhost:8000/api',
    headers: {
      'Content-Type': 'application/json'        
    }
})

