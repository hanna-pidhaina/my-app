import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import CurrentDate from "./CurrentDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  let searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  let locationIcon = <FontAwesomeIcon icon={faLocationDot} />;

  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function search() {
    let apiKey = `a3a670287c6f4b3ee8710439a67cc382`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "a3a670287c6f4b3ee8710439a67cc382";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=${latitude}&lon=${longitude}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showMyLocation() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="InputSection row p-4 text-center">
          <div className="col-md-3 pb-2">
            <span className="current-time">
              <CurrentDate date={weatherData.date} />
            </span>
          </div>
          <div className="SearchForm col-md-6 pb-2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="city-input mb-1"
                placeholder="Enter city name"
                autocomplete="off"
                onChange={handleCityChange}
              />
              <button type="submit" className="submit-button">
                {searchIcon}
              </button>
            </form>
          </div>
          <div className="col-md-3">
            <button
              className="current-location-button"
              onClick={showMyLocation}
            >
              My {locationIcon}
              <br />
              weather
            </button>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
