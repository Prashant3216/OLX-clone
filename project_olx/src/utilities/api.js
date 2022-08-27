import axios from "axios";

export function postSignup(data) {
  return axios
    .post(`https://pv3216-json-mock.herokuapp.com/posts`, data)
    
}
export function getRequest(type) {
  return axios
    .get(`https://pv3216-json-mock.herokuapp.com/${type}`)
    
}
