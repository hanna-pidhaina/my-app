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


export default function WeatherIcon(props){
    let iconNum = props.icon;
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
    let iconName = iconMapping[iconNum];
  let weatherIcon = <FontAwesomeIcon icon={iconName} />;

    return <div className="weather-icon">{weatherIcon} </div>;
}