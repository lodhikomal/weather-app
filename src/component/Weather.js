import React, { useState, useEffect } from "react";
import { createCity } from "../feature/slice";
import Weather2 from "./Weather2";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

function Weather() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => {
    return state.app;
  });
  console.log(weatherData, "finally");
  // console.log(weatherData?.sys?.timezone, "get");

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value, "input data");
  };
  const getData = () => {
    dispatch(createCity(input));
  };

  const date = new Date();
  useEffect(() => {
    if (weatherData.status !== "loading") {
      toast.success(weatherData.status);
    }
  }, [weatherData.status]);

  return (
    <div className="main">
      <div className="main-left">
        <div className="title-input">
          <input
            type="text"
            className="text-input"
            value={input}
            onChange={handleChange}
            placeholder="Search..."
          />
          <i className="fa fa-search icon" onClick={getData}></i>

          {/* <i className="fa-solid fa-user"></i> */}
          {/* <button type="button" className="btn">
            Search
          </button> */}
        </div>
        <div className="image">
          <img
            src="https://freepngimg.com/download/weather/23793-9-weather-photos.png"
            alt="img"
          />
        </div>
        <div className="heading">
          <h1>
            {weatherData?.weather?.main?.temp}
            <sup>0c</sup>
          </h1>
          <p className="para"></p>
        </div>
        <hr></hr>
        <div className="head-style">
          <div className="heading-text">
            <i class="fa fa-cloud cloud" aria-hidden="true"></i>
            <p>condition</p>
          </div>
          <div className="percentage ">
            <i class="fa fa-tint drop" aria-hidden="true"></i>
            <p>perc-0%</p>
          </div>
        </div>
      </div>
      {/* end of div main left */}
      <div className="main-right">
        <div className="nav-item">
          {/* <ul className="unordered-list">
            <li>Today</li>
            <li>Week</li>
            <li>cc</li>
            <li>0f</li>
          </ul> */}
        </div>
        <Weather2 value={weatherData} />
      </div>
      <div className="footer">
        <i class="fa fa-map-marker map" aria-hidden="true"></i>
        <p>{weatherData?.weather?.name}</p>
      </div>
    </div>
  );
}

export default Weather;
