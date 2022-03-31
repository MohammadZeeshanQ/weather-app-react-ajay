import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component
import Home from "./routes/Home";
import Detail from "./routes/Details";
import Temperature from "./routes/Temperature";

function App() {
	const [enteredCity, setEnteredCity] = useState("");
	const [apiCity, setApiCity] = useState("");
	const [weatherData, setWeatherData] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home enteredCity={enteredCity} setEnteredCity={setEnteredCity} />} />
				<Route path='detail' element={<Detail weatherData={weatherData} apiCity={apiCity} />} />
				<Route
					path='/weather'
					element={
						<Temperature
							apiCity={apiCity}
							setApiCity={setApiCity}
							enteredCity={enteredCity}
							weatherData={weatherData}
							setWeatherData={setWeatherData}
						/>
					}
				/>
				<Route path='*' element={<div>Error Page</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
