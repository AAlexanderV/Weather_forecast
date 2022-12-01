import DayLayout from "./DayLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "./sliderSettings";

function TabsDays({ days, activeTabDay, setActiveTabDay }) {
    return (
        <div className="tabs_days">
            <Slider {...sliderSettings}>
                {days.map((day, index) => {
                    return (
                        <DayLayout
                            index={index}
                            day={day}
                            activeTabDay={activeTabDay}
                            setActiveTabDay={setActiveTabDay}
                            key={index}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}

export default TabsDays;
