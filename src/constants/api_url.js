const location = "Buenos Aires,ar";
const api_key = "b6b1125383df7195a4df361789c39110";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;