import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCloud,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import cloud from "./cloud.jpg";
import ForecastDay from "./ForecastDay";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function showWeather(response) {
    console.log(response.data);

    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      date: new Date (response.data.dt*1000),
    });
    setReady(true);
  }
  let currentTime = {
    day: "Thursday",
    date: 20,
    month: "October",
    hours: 12,
    minutes: 10,
  };

  if (ready) {
    return (
      <div className="Weather">
        <div className="InputSection row p-4 text-center">
          <div className="col-md-3 pb-2">
            <span className="current-time">
             <CurrentDate date={weatherData.date} />
            </span>
          </div>
          <div className="col-md-6 pb-2">
            <form>
              <input
                type="text"
                className="city-input mb-1"
                placeholder="Enter city name"
                autocomplete="off"
              />
              <button type="submit" className="submit-button">
                <FontAwesomeIcon icon="magnifyin-glass" />{" "}
              </button>
            </form>
          </div>
          <div className="col-md-3">
            <button className="current-location-button">
              My <i className="fa-solid fa-location-dot"></i>
              <br />
              weather
            </button>
          </div>
        </div>
        <div className="CurrentWeatherSection text-center">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-3">
              <div className="weather-icon">
                <FontAwesomeIcon icon={faCloud} />
              </div>
            </div>
            <div className="col-md-3">
              <h3>{weatherData.city}</h3>
              <h1>
                <span>{weatherData.temperature} °C</span>
              </h1>
              <ul className="current-day-list">
                <li>{weatherData.description}</li>
                <li>
                  <i className="fa-solid fa-wind"></i> {weatherData.wind}m/s
                </li>
                <li>
                  <i className="fa-solid fa-droplet"></i> {weatherData.humidity}
                  %
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
  } else {
    let apiKey = `a3a670287c6f4b3ee8710439a67cc382`;
    let units = `metric`;
    let city = `Kyiv`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
