import React from "react";

import Cloud from "./Cloud.jpg";
import ForecastDay from "./ForecastDay";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSnowflake,
  faMoon,
  faSun,
  faSUnCloud,
  faCloudMoon,
  faCloudRain,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSmog,
  faWind,
  faDroplet
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function WeatherInfo(props) {
  let iconNum = props.data.icon;
  let iconMapping = {
    "01d": "Sun",
    "01n": "Moon",
    "02d": "CloudSun",
    "02n": "CloudMoon",
    "03d": "Cloud",
    "03n": "Cloud",
    "04d": "Cloud",
    "04n": "Cloud",
    "09d": "CloudRain",
    "09n": "CloudRain",
    "10d": "CloudSunRain",
    "10n": "CloudMoonRain",
    "11d": "CloudBolt",
    "11n": "CloudBolt",
    "13d": "Snowflake",
    "13n": "Snowflake",
    "50d": "Smog",
    "50n": "Smog",
  };
  let iconName = iconMapping[iconNum];
  let weatherIcon = <FontAwesomeIcon icon={`fa${iconName}`} />;
  let weatherIconCheck = <FontAwesomeIcon icon={faCloud} />;

  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherSection text-center">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-3">
            <div className="weather-icon">{weatherIcon} {weatherIconCheck}</div>
          </div>
          <div className="col-md-3">
            <h3>{props.data.city}</h3>
            <h1>
              <span>{props.data.temperature} °C</span>
            </h1>
            <ul className="current-day-list">
              <li>{props.data.description}</li>
              <li>
                <FontAwesomeIcon icon={faWind} /> {props.data.wind}m/s
              </li>
              <li>
                <FontAwesomeIcon icon={faDroplet} /> {props.data.humidity}%
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div>
              <img
                src={iconName}
                className="weather-img img-fluid"
                alt={iconName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ForecastSection row">
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
        <ForecastDay />
      </div>
    </div>
  );
}
