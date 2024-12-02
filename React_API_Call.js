import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
 
  useEffect(() => {
	const apiKey = 'your_api_key';
	const city = Ahmedabad;
 
	axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  	.then(response => {
    	setWeather(response.data);
  	})
  	.catch(error => {
    	console.error('Error fetching weather data:', error);
  	});
  }, []);
 
  return (
	<div>
  	{weather ? (
    	<div>
      	<h1>Weather in {weather.name}</h1>
      	<p>{weather.weather[0].description}</p>
    	</div>
  	) : (
    	<p>Loading...</p>
  	)}
	</div>
  );
};
 
export default WeatherComponent;
