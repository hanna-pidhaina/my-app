import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud, faSearch,
} from "@fortawesome/free-solid-svg-icons";
import cloud from "./cloud.jpg";
import ForecastDay from "./ForecastDay";


export default function WeatherInfo(props){

    
    return (
      <div className="WeatherInfo">
        <div className="CurrentWeatherSection text-center">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-3">
              <div className="weather-icon">
                <FontAwesomeIcon icon={faCloud} />
              </div>
            </div>
            <div className="col-md-3">
              <h3>{props.data.city}</h3>
              <h1>
                <span>{props.data.temperature} °C</span>
              </h1>
              <ul className="current-day-list">
                <li>{props.data.description}</li>
                <li>
                  <i className="fa-solid fa-wind"></i> {props.data.wind}m/s
                </li>
                <li>
                  <i className="fa-solid fa-droplet"></i> {props.data.humidity}%
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  src={cloud}
                  className="weather-img img-fluid"
                  alt="cloud"
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