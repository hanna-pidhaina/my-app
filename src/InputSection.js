import React from "react";
import "./InputSection.css";

export default function InputSection() {
  let currentTime = {
    day: "Thursday",
    date: 20,
    month: "October",
    hours: 12,
    minutes: 10,
  };
  return (
    <div className="InputSection row p-4 text-center">
      <div className="col-md-3 pb-2">
        <span className="current-time">
          {currentTime.day}, <br />
          {currentTime.month} {currentTime.date}, <br />
          {currentTime.hours}:{currentTime.minutes}
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
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
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
  );
}
