import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSnowflake,
  faMoon,
  faSun,
  faCloudSun,
  faCloudMoon,
  faCloudRain,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";


export default function ForecastDay (props) {
    let maxTemp = Math.round(props.data.temp.max);
    let minTemp = Math.round(props.data.temp.min);
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    let weekDay = days[day];
    let icon = props.data.weather[0].icon;
    let iconMapping = {
      "01d": faSun,
      "01n": faMoon,
      "02d": faCloudSun,
      "02n": faCloudMoon,
      "03d": faCloud,
      "03n": faCloud,
      "04d": faCloud,
      "04n": faCloud,
      "09d": faCloudRain,
      "09n": faCloudRain,
      "10d": faCloudSunRain,
      "10n": faCloudMoonRain,
      "11d": faCloudBolt,
      "11n": faCloudBolt,
      "13d": faSnowflake,
      "13n": faSnowflake,
      "50d": faSmog,
      "50n": faSmog,
    };
    let iconName = iconMapping[icon];
    let weatherIcon = <FontAwesomeIcon icon={iconName} />;
    return (
      <div className="ForecastDay">
        <ul className="forecast-list">
          <li className="forecast-day">{weekDay}</li>
          <li className="day-weather-icon">{weatherIcon}</li>
          <li className="day">
            <span>{maxTemp}</span>
            <span>°C</span>
          </li>
          <li className="night">
            <span>{minTemp}</span>
            <span>°C</span>
          </li>
        </ul>
      </div>
    );
}