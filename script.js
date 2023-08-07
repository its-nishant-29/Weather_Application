function getApiResponse(city){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '56c04ea89emsh0a818394a76606dp10d62djsn0a67591d344d',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			console.log(city)
			cityName.innerHTML = city;
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));

}
function handleCitySearch(e){
	e.preventDefault(); // Prevent the default form submission behavior

    // Fetch the value of the city input field
    const cityInput = document.getElementById('city');
    const city = cityInput.value;
	getApiResponse(city);
}
getApiResponse("Indore")

