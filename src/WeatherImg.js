import React from "react";

import cloud from "./cloud.jpg";
import cloudBolt from "./cloudBolt.jpg";
import cloudMoon from "./cloudMoon.jpg";
import cloudMoonRain from "./cloudMoonRain.jpg";
import cloudRain from "./cloudRain.jpg";
import cloudSun from "./cloudSun.jpg";
import cloudSunRain from "./cloudSunRain.jpg";
import moon from "./moon.jpg";
import smog from "./smog.jpg";
import snowflake from "./snowflake.jpg";
import sun from "./sun.jpg";

export default function WeatherImg(props) {
  let imgMapping = {
    "01d": sun,
    "01n": moon,
    "02d": cloudSun,
    "02n": cloudMoon,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": cloudRain,
    "09n": cloudRain,
    "10d": cloudSunRain,
    "10n": cloudMoonRain,
    "11d": cloudBolt,
    "11n": cloudBolt,
    "13d": snowflake,
    "13n": snowflake,
    "50d": smog,
    "50n": smog,
  };
  let imgName = imgMapping[props.icon];

  return (
    <div>
      <img src={imgName} className="weather-img img-fluid" alt={imgName} />
    </div>
  );
}
