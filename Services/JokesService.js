import axios from "axios";
import Cookies from "js-cookie";
const deliveryJokesBaseUrl = process.env.NEXT_PUBLIC_DELIVERY_JOKES_API_BASE_URL 
const submitJokesBaseUrl = process.env.NEXT_PUBLIC_SUBMIT_JOKES_API_BASE_URL
const moderateJokesUrl = process.env.NEXT_PUBLIC_MODERATE_JOKES_API_BASE_URL

const adminHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTcyMzc1OTc5OCwiZXhwIjoxNzIzNzYzMzk4fQ.6W-jHxTIA9749dtO_0xMNXWRcFhsC_1cxPMdvV4382o'
};

const userHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.NEXT_APP_API_TOKEN
};

/////////////////////////////////////////////////////////////////////////////////

export const getUniqueTypes = async () => {
    return await axios.get(deliveryJokesBaseUrl + "types");
}

export const submitJoke = async (data) => {
    return await axios.post(submitJokesBaseUrl + "create",data,{headers:userHeaders})
    
}

export const getAllApprovedJokes = async () => {
    return await axios.get(deliveryJokesBaseUrl);
}

/////////////////////////////////////////////////////////////////////////////////

export const getAllNewJokesForAdmin = async () => {
    return await axios.get(moderateJokesUrl + "jokes",{headers:adminHeaders});
}

export const acceptJoke = async (data) => {
    return await axios.post(apiEndPoint + "submitToDeliver",data,{headers:adminHeaders}) 
}

export const editJoke = async (jokeId) => {
    return await axios.put(apiEndPoint +"joke/"+ jokeId,data,{headers:adminHeaders})
}

export const deleteJoke= async (jokeId) => {
    return await axios.delete(apiEndPoint + "joke/" + jokeId,{headers:adminHeaders})
    
}



