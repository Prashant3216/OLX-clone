import axios from "axios";

export function postSignup(data) {
  return axios
    .post(`https://pv3216-json-mock.herokuapp.com/posts`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
export function getRequest(type) {
  return axios
    .get(`https://pv3216-json-mock.herokuapp.com/${type}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
