import React from "react";
import "./ForecastSection.css";
import ForecastDay from "./ForecastDay";
export default function ForecastSection() {
  return (
    <div className="ForecastSection row">
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
    </div>
  );
}
