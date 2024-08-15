import axios from "axios";
const apiEndPoint =process.env.NEXT_APP_MODERATE_MICROSERVICE_ENDPOINT + "auth/"

const headers = {
    'Content-Type': 'application/json'
};
export const userLogin = async (data) => {

    return await axios.post(apiEndPoint + "login",data,{headers})
    
}
