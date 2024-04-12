import axios from "axios";

const REST_API_BASE_URL_GET ='http://localhost:8081/user1/users';
export const listUsers=()=>{
    return axios.get(REST_API_BASE_URL_GET);
}
//export const listUsers=()=> axios.get(REST_API_BASE_URL);//we can simplyfy ln 4-6 like this.

const REST_API_BASE_URL_POST ='http://localhost:8081/user1/user';
export const createUser=(user)=>{
    return axios.post(REST_API_BASE_URL_POST,user);
}

export const getUser=(userId)=>{
    return axios.get( REST_API_BASE_URL_POST+ '/'+userId);
}
