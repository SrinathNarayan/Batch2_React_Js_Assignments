import React, { useState } from "react";
import "./Weathers.css";
import Axios from "axios";
import Styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherInfoComponet from "./modules/WeatherInfoComponet";

export const WeatherIcons = {
  "01d": "/Icons/sunny.svg",
  "01n": "/Icons/night.svg",
  "02d": "/Icons/day.svg",
  "02n": "/Icons/cloudy-night.svg",
  "03d": "/Icons/cloudy.svg",
  "03n": "/Icons/cloudy.svg",
  "04d": "/Icons/perfect-day.svg",
  "04n": "/Icons/cloudy-night.svg",
  "09d": "/Icons/rain.svg",
  "09n": "/Icons/rain-night.svg",
  "10d": "/Icons/rain.svg",
  "10n": "/Icons/rain-night.svg",
  "11d": "/Icons/storm.svg",
  "11n": "/Icons/storm.svg",
};

const Container = Styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 520px;
    justify-content: center;
    padding: 20px 10px;
    margin: auto;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 #555;
    background: white;
    font-family: Montserrat;
    `;

const AppLabel = Styled.span`
    color: black;
    margin: 20px auto;
    font-size: 18px;
    font-weight: bold;
    `;

const Waethers = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updateWeather(response.data);
  };

  return (
    <div>
      {/* Styled Component */}

      <div className="section">
        <Container>
          <AppLabel>React Weather App</AppLabel>
          {city && weather ? (
            <WeatherInfoComponet weather={weather} city={city} />
          ) : (
            <CityComponent
              updateCity={updateCity}
              fetchWeather={fetchWeather}
            />
          )}
        </Container>
      </div>
    </div>
  );
};
export default Waethers;
