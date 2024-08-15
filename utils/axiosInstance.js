import axios from 'axios';

// Axios instance for delivery jokes
export const deliveryJokesAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DELIVERY_JOKES_API_BASE_URL,
});

// Axios instance for submit jokes
export const submitJokesAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUBMIT_JOKES_API_BASE_URL,
  });