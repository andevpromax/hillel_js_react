export const regions = ['Africa', 'Europe', 'America', 'Asia'];

const API = `https://restcountries.com/v3.1/region/`;

export const getCountriesRegion = (region) =>
  fetch(API + `/${region}`).then((data) => data.json());
