import CurrentConditions from "./CurrentConditions";
import PerHourTable from "./PerHourTable";

function WeatherContent({ currentConditions, days, activeTabDay }) {
  return (
    <div className="weather_content_box">
      <CurrentConditions
        currentConditions={currentConditions}
        days={days}
        activeTabDay={activeTabDay}
      />

      <PerHourTable
        days={days}
        activeTabDay={activeTabDay}
      />
    </div>
  );
}

export default WeatherContent;
