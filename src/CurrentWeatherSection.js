import React from "react";
import cloud from "./cloud.jpg";
import "./CurrentWeatherSection.css";

export default function CurrentWeatherSection() {
  let weatherData = {
    temp: 10,
    description: "clouds",
    wind: 2,
    humidity: 80,
  };
  return (
    <div className="CurrentWeatherSection text-center">
      <div className="row align-items-center justify-content-around">
        <div className="col-md-3">
          <div className="weather-icon">
            <i className="fa-solid fa-cloud"></i>
          </div>
        </div>
        <div className="col-md-3">
          <h3>Kyiv</h3>
          <h1>
            <span>{weatherData.temp} °C</span>
          </h1>
          <ul className="current-day-list">
            <li>{weatherData.description}</li>
            <li>
              <i className="fa-solid fa-wind"></i> {weatherData.wind}m/s
            </li>
            <li>
              <i className="fa-solid fa-droplet"></i> {weatherData.humidity}%
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div>
            <img src={cloud} className="weather-img img-fluid" alt="cloud" />
          </div>
        </div>
      </div>
    </div>
  );
}
