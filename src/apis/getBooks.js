import axios from "axios";

export const getBooks = (params = {}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const urlParams = new URLSearchParams(params);
  return axios
    .get(`${baseUrl}/search.json?${urlParams}`)
    .then((res) => res.data);
};

export const getBooksBySubject = (subject, params = {}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const urlParams = new URLSearchParams(params);
  return axios
    .get(`${baseUrl}/subjects/${subject}.json?${urlParams}`)
    .then((res) => res.data);
};
