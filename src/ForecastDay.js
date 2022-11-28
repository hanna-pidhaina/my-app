import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSnowflake,
  faMoon,
  faSun,
  faCloudSun,
  faCloudMoon,
  faCloudRain,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";



export default function ForecastDay(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    let maxTemp = Math.round(forecast[0].temp.max);
    let minTemp = Math.round(forecast[0].temp.min);
    let date = new Date(forecast[0].dt*1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    let weekDay = days[day];
    let icon = forecast[0].weather[0].icon;
    let iconMapping = {
      "01d": faSun,
      "01n": faMoon,
      "02d": faCloudSun,
      "02n": faCloudMoon,
      "03d": faCloud,
      "03n": faCloud,
      "04d": faCloud,
      "04n": faCloud,
      "09d": faCloudRain,
      "09n": faCloudRain,
      "10d": faCloudSunRain,
      "10n": faCloudMoonRain,
      "11d": faCloudBolt,
      "11n": faCloudBolt,
      "13d": faSnowflake,
      "13n": faSnowflake,
      "50d": faSmog,
      "50n": faSmog,
    };
    let iconName = iconMapping[icon];
    let weatherIcon = <FontAwesomeIcon icon={iconName} />;

     return (
       <div className="col">
         <ul className="forecast-list">
           <li className="forecast-day">{weekDay}</li>
           <li className="day-weather-icon">
             {weatherIcon}
           </li>
           <li className="day">
             <span>{maxTemp}</span>
             <span>°C</span>
           </li>
           <li className="night">
             <span>{minTemp}</span>
             <span>°C</span>
           </li>
         </ul>
       </div>
     );
    
  } else {
  let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
   let lat = props.lat;
   let lon = props.lon;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   console.log(apiUrl);
   return null;
  }
}
