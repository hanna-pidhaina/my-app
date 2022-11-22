import React from "react";

import cloud from "./cloud.jpg";
import cloudBolt from "./cloudBolt.jpg";
import cloudMoon from "./cloudMoon.jpg";
import cloudMoonRain from "./cloudMoonRain.jpg";
import cloudRain from "./cloudRain.jpg";
import cloudSun from "./cloudSun.jpg";
import cloudSunRain from "./cloudSunRain.jpg";
import moon from "./moon.jpg";
import smog from "./smog.jpg";
import snowflake from "./snowflake.jpg";
import sun from "./sun.jpg";
import ForecastDay from "./ForecastDay";

import ReactDOM from "react-dom";
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
  faWind,
  faDroplet
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function WeatherInfo(props) {
  let iconNum = props.data.icon;
  let iconMapping = {
    "01d": "faSun",
    "01n": "faMoon",
    "02d": "faCloudSun",
    "02n": "faCloudMoon",
    "03d": "faCloud",
    "03n": "faCloud",
    "04d": "faCloud",
    "04n": "faCloud",
    "09d": "faCloudRain",
    "09n": "faCloudRain",
    "10d": "faCloudSunRain",
    "10n": "faCloudMoonRain",
    "11d": "faCloudBolt",
    "11n": "faCloudBolt",
    "13d": "faSnowflake",
    "13n": "faSnowflake",
    "50d": "faSmog",
    "50n": "faSmog",
  };
  let imgMapping = {
    "faSun": "sun",
    "faMoon": "moon",
    "faCloudSun": "cloudSun",
    "faCloudMoon": "cloudMoon",
    "faCloud": "cloud",
    "faCloud": "cloud",
    "faCloud": "cloud",
    "faCloud": "cloud",
    "faCloudRain": "cloudRain",
    "faCloudRain": "cloudRain",
    "faCloudSunRain": "cloudSunRain",
    "faCloudMoonRain": "cloudSunRain",
    "faCloudBolt": "cloudBolt",
    "faCloudBolt": "cloudBolt",
    "faSnowflake": "snowflake",
    "faSnowflake": "snowflake",
    "faSmog": "smog",
    "faSmog": "smog",
  };
  let iconName = iconMapping[iconNum];
  let imgName = imgMapping[iconName];
  let weatherIcon = <FontAwesomeIcon icon={iconName} />;
  console.log (iconName);
  console.log (imgName);

  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherSection text-center">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-3">
            <div className="weather-icon">{weatherIcon} </div>
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
                src={imgName}
                className="weather-img img-fluid"
                alt={imgName}
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
