const axios = require('axios');
 
const apiKey = 'your_api_key';
const city = Ahmedabad;
 
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => {
	console.log('Weather data:', response.data);
  })
  .catch(error => {
	console.error('Error fetching weather data:', error);
  });
