import axios from "axios";
import Cookies from "js-cookie";
const deliveryJokesBaseUrl = process.env.NEXT_PUBLIC_DELIVERY_JOKES_API_BASE_URL 
const submitJokesBaseUrl = process.env.NEXT_PUBLIC_SUBMIT_JOKES_API_BASE_URL


const adminHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + Cookies.get('access_token')
};

const userHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.NEXT_APP_API_TOKEN
};

export const submitJoke = async (data) => {
    return await axios.post(submitJokesBaseUrl + "create",data,{userHeaders})
    
}

export const getAllApprovedJokes = async () => {
    return await axios.get(deliveryJokesBaseUrl + "jokes");
}

export const getAllNewJokesForAdmin = async () => {
    return await axios.get(apiEndPoint,{adminHeaders});
}

export const acceptJoke = async (data) => {
    return await axios.post(apiEndPoint,data,{adminHeaders})
    
}

export const editJoke = async (data) => {
    return await axios.put(apiEndPoint +"update/"+ data.id,data,{adminHeaders})
}

export const deleteJoke= async (jokeId) => {
    return await axios.delete(apiEndPoint + "delete/" + jokeId,{adminHeaders})
    
}


