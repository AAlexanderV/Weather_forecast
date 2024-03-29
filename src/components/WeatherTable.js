import TabsDays from "./TabsDays";
import WeatherContent from "./WeatherContent";

function WeatherTable({ currentConditions, days, activeTabDay, setActiveTabDay }) {
  return (
    <div className="weather-table">
      <TabsDays
        days={days}
        activeTabDay={activeTabDay}
        setActiveTabDay={setActiveTabDay}
      />

      <WeatherContent
        currentConditions={currentConditions}
        days={days}
        activeTabDay={activeTabDay}
      />
    </div>
  );
}

export default WeatherTable;
