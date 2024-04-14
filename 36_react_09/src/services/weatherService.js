const API_KEY = `b2448927f000760c0e17e90310c9b95c`;
const API = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const getWeatherByCity = (city) =>
  fetch(API + `&q=${city}`).then((data) => data.json());
