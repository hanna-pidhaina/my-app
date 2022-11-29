import React from "react";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";
import WeatherImg from "./WeatherImg";
import Forecast from "./Forecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";




export default function WeatherInfo(props) {
  let wind = Math.round(props.data.wind);
  let humidity = props.data.humidity;
  

  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherSection text-center">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-3">
            <WeatherIcon icon={props.data.icon} />
          </div>
          <div className="col-md-3">
            <h3>{props.data.city}</h3>
            <h1>
              <WeatherTemp celsius={props.data.temperature} />
            </h1>
            <ul className="current-day-list">
              <li>{props.data.description}</li>
              <li>
                <FontAwesomeIcon icon={faWind} /> {wind}m/s
              </li>
              <li>
                <FontAwesomeIcon icon={faDroplet} /> {humidity}%
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <WeatherImg icon={props.data.icon} />
          </div>
        </div>
      </div>
        <Forecast lon={props.data.longitude} lat={props.data.latitude} />
    </div>
  );
}
