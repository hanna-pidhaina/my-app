import React from "react";

export default function ForecastDay() {
  return (
    <div className="col">
      <ul className="forecast-list">
        <li className="forecast-day">day</li>
        <li className="day-weather-icon">
          <i className="fa-solid fa-sun"></i>
        </li>
        <li className="day">
          <span>temp</span>
          <span>°C</span>
        </li>
        <li className="night">
          <span>temp</span>
          <span>°C</span>
        </li>
      </ul>
    </div>
  );
}
