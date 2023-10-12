import React from "react";
import "./Weather2Style.css";
function Weather2() {
  return (
    <div>
      <div className="wrapper">
        <div className="heading">
          <h3>Today's Highlights</h3>
        </div>
        <div className="container">
          <div>
            <span>uv Index</span>
            <p>0</p>
            <span>low</span>
          </div>
          <div>
            <span>wind status</span>
            <p>0</p>
            <span>km/h</span>
          </div>
          <div>
            <span>Sunrise & Sunset</span>
            <p>0</p>
            <span>0</span>
          </div>
          <div>
            <span>Humidity</span>
            <p>0</p>
            <span>Normal</span>
          </div>
          <div>
            <span>visibility</span>
            <p>0</p>
            <span>Normal</span>
          </div>
          <div>
            <span>Air Quality</span>
            <p>0</p>
            <span>Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather2;
