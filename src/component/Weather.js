import React, { useState } from "react";
import { createCity } from "../feature/slice";
import Weather2 from "./Weather2";
import { useDispatch, useSelector } from "react-redux";

function Weather() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const select = useSelector((c) => {
    return c.app.value;
  });
  console.log(select, "finally");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value, "input data");
  };
  const getData = () => {
    dispatch(createCity(input));
  };
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
            0<sup>0c</sup>
          </h1>
          <p className="para">Sunday,10:35</p>
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
        <Weather2 />
      </div>
      <div className="footer">
        <i class="fa fa-map-marker map" aria-hidden="true"></i>
        <p>location</p>
      </div>
    </div>
  );
}

export default Weather;
