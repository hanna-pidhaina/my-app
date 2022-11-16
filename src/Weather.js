import React from "react";
import axios from "axios";
import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

export default function Weather(props) {
    function showWeather(response){
        alert (`The weather in ${response.data.name} is ${response.data.main.temp}`)
    }
     let apiKey = `a3a670287c6f4b3ee8710439a67cc382`;
     let units = `metric`;
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
     axios.get(apiUrl).then(showWeather);
    return (
      <CircleLoader
        color="yellow"
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
}