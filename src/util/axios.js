import axios from "axios";

const { REACT_APP_SEAT_JSON_PATH } = process.env;

axios.defaults.baseURL = REACT_APP_SEAT_JSON_PATH
axios.defaults.headers.common["Content-Type"] = "application/json";

export const _axios = axios.create({
    baseURL: REACT_APP_SEAT_JSON_PATH,
});

console.log(
  "process.env, REACT_APP_SEAT_JSON_PATH:: ",
  process.env,
  REACT_APP_SEAT_JSON_PATH,
  axios.defaults
);
