import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

function Temperature({ weatherData, setWeatherData, enteredCity, setApiCity, apiCity }) {
	const [isLoading, setIsLoading] = useState(true);
	const apiUrl = `http://api.weatherstack.com/current?access_key=b750cd292034cb7634c1ac4df820105b&query=${enteredCity}`;

	// Calling Api Handler
	async function apiHandler() {
		try {
			const response = await axios.get(apiUrl);
			setWeatherData(response.data.current);
			setApiCity(response.data.location.name);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		apiHandler();
		const delayTimer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		return () => clearTimeout(delayTimer);
	}, []);

	return (
		<div>
			<div>
				<h1>
					{apiCity} Temperature: {weatherData.temperature}
				</h1>
				<Link to='/detail'>
					<button>More Information</button>
				</Link>
			</div>
		</div>
	);
}

export default Temperature;
