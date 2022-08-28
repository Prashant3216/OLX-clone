import axios from "axios";

export function postSignup(data) {
  return axios.post(`https://pv3216-json-mock.herokuapp.com/posts`, data);
}
export function getRequest(type) {
  return axios.get(`https://pv3216-json-mock.herokuapp.com/${type}`);
}
export function getData(page = 1) {
  return axios.get(
    `https://pv3216-json-mock.herokuapp.com/products?_page=${page}&_limit=4&_sort=title`
  );
}
