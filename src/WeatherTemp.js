import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="TempValue">{props.celsius} </span>
        <span className="units"> °C</span> |
        <span className="units">
          {" "}
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F{" "}
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius*1.8) + 32;
    return (
      <div className="WeatherTemp">
        <span className="TempValue">{Math.round(fahrenheit)} </span>
        <span className="units">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            {" "}
            °C{" "}
          </a>
        </span>{" "}
        |<span className="units"> °F </span>
      </div>
    );
  }
}
