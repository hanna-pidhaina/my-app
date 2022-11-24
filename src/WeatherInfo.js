import React from "react";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";
import WeatherImg from "./WeatherImg";
import ForecastDay from "./ForecastDay";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";




export default function WeatherInfo(props) {
  

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
                <FontAwesomeIcon icon={faWind} /> {props.data.wind}m/s
              </li>
              <li>
                <FontAwesomeIcon icon={faDroplet} /> {props.data.humidity}%
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <WeatherImg icon={props.data.icon} />
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
