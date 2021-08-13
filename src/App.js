import React, { useState, useEffect } from 'react'
import Weathercard from "./weathercard"
import "./index.css"


const App = () => {

  const [searchValue,setSearchValue] = useState("Delhi");
  const [tempInfo,setTempInfo] = useState({});

  const getWeatherInfo = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=20e07f0e5e2b2b82c184a7af116cc3ed`;

      const response = await fetch(url);
      const data = await response.json();

      const {temp,pressure,humidity} = data.main;
      const {main: weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country,sunset} = data.sys;
      console.log(temp);

      const newWeatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(newWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="wrap">
    <div className="apptitle">
      WeatherMaster
    </div>
      <div className="searchBar">
      <div className="search">
        <input type="search"
          placeholder="Search..."
          autoFocus
          id="search"
          className="searchTerm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="searchBtn" type="button" onClick={getWeatherInfo}>
        Search
        </button>
      </div>
      </div>
      
      <Weathercard tempInfo = {tempInfo}/>

    </div>
  )
}

export default App
