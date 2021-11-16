import axios from "axios";

const apiClient = axios.create({
  // create promise
  baseURL:
    "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=598c9201ad9683693cc307f933216ba0",
  withCredentials: false, // CORS
  headers: {
    // some HTTP headers
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getWeather() {
    // function that is used in store.js 👆
    return apiClient.get();
  },
};
