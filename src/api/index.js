import axios from "axios";

const API_KEY = "4409b9fe74475c12f088a7450cede4b7"

const api = axios.create({
   baseURL: 'https://api.openweathermap.org/data/2.5'
})

api.interceptors.response.use((response) => {
   return response.data;
 }, (error) => {
   
   return Promise.reject(error);
 });

export const getCurrentWeather = (city) => {
   return api.get('/weather', {params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
   }})
}

export const getTempForecast = (data) => {

   return api.get('/onecall', {params: {
      lat: data.coord.lat,
      lon: data.coord.lon,
      exclude: 'minutely,daily',
      appid: API_KEY,
      units: 'metric',
   }})
}