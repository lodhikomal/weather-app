import React from "react";
import "./Weather2Style.css";

function Weather2(props) {
  // console.log(props.value?.weather?.wind, "check");
  return (
    <div>
      <div className="wrapper">
        <div className="heading">
          <h3>Today's Highlights</h3>
        </div>
        <div className="container">
          <div>
            <span>uv Index</span>
            <p>N/A</p>
            <span>low</span>
          </div>
          <div>
            <span>wind</span>
            <p>{props.value?.weather?.wind?.speed}</p>
            <span>{props.value?.weather?.wind?.deg}</span>
          </div>
          <div>
            <span>Sunrise & Sunset</span>
            <p>0</p>
            <span>{props.value?.weather?.sys?.sunrise}</span>
            <span>{props.value?.weather?.sys?.sunset}</span>
          </div>
          <div>
            <span>Humidity</span>
            <p>N/A</p>
            <span>Normal</span>
          </div>
          <div>
            <span>visibility</span>
            <p>{props.value?.weather?.visibility}</p>
            <span>Normal</span>
          </div>
          <div>
            <span>Air Quality</span>
            <p>N/A</p>
            <span>Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather2;
