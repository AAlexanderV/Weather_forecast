import CurrentConditions from "./CurrentConditions";
import PerHourTable from "./PerHourTable";
// import "./weather_content_box.css";

function WeatherContent({ currentConditions, days, activeTabDay }) {
    return (
        <div className="weather_content_box">
            <div className="left_weather_content_box">
                <CurrentConditions
                    currentConditions={currentConditions}
                    days={days}
                    activeTabDay={activeTabDay}
                />
            </div>

            <PerHourTable
                days={days}
                activeTabDay={activeTabDay}
            />
        </div>
    );
}

export default WeatherContent;
