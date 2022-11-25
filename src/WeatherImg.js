import React from "react";

import cloud from "./images/cloud.jpg";
import cloudBolt from "./images/cloudBolt.jpg";
import cloudMoon from "./images/cloudMoon.jpg";
import cloudMoonRain from "./images/cloudMoonRain.jpg";
import cloudRain from "./images/cloudRain.jpg";
import cloudSun from "./images/cloudSun.jpg";
import cloudSunRain from "./images/cloudSunRain.jpg";
import moon from "./images/moon.jpg";
import smog from "./images/smog.jpg";
import snowflake from "./images/snowflake.jpg";
import sun from "./images/sun.jpg";

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
