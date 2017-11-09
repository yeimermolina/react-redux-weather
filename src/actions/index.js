import axios from 'axios';
const API_KEY = '9087c48d533df81fa461f7a071516e3f';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city="NEW YORK"){
  const url = `${ROOT_URL}&q=${city},us`;
  
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}