import { useState, useEffect } from "react";
import "./App.css";
import WeatherTable from "./components/WeatherTable";
import HeaderTop from "./components/HeaderTop";

function App() {
    const [city, setCity] = useState("London");
    // const [days, setDays] = useState(7);
    const [activeTabDay, setActiveTabDay] = useState(0);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherData, setweatherData] = useState([]);

    // const API = `https://api.weatherapi.com/v1/forecast.json?key=999cbaecd5a64a33985171242223011&q=${city}&days=${7}&aqi=no&alerts=no`;
    const API = `https://api.weatherapi.com/v1/forecast.json?key=c7ee0cc80be146ca8a4182556222412&q=${city}&days=${7}&aqi=no&alerts=no`;

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (!result.error) {
                        setError("");
                        setweatherData(result);
                    }
                    if (result.error) {
                        setError(result);
                    }
                },
                (e) => {
                    console.log("result ERROR");
                    setIsLoaded(true);
                    setError(e);
                }
            );
    }, [city, API]);

    console.log("weatherData", weatherData);

    if (error) {
        return (
            <>
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <div className="header_bottom">
                        <p>{error.message} Possible reasons:</p>
                        <p>1. Incorrect city name.</p>
                        <p>2. API keys expired.</p>
                    </div>
                </div>
            </>
        );
    } else if (!isLoaded) {
        return (
            <>
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <div className="header_bottom">
                        <p>Loading...</p>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="header">
                    <HeaderTop
                        setCity={setCity}
                        setIsLoaded={setIsLoaded}
                    />
                    <div className="header_bottom">
                        <p>
                            Weather in{" "}
                            <strong>
                                {isLoaded && weatherData.location.name}
                            </strong>
                        </p>
                    </div>
                </div>

                <WeatherTable
                    currentConditions={weatherData.current}
                    days={weatherData.forecast.forecastday}
                    activeTabDay={activeTabDay}
                    setActiveTabDay={setActiveTabDay}
                />
            </>
        );
    }
}

export default App;
