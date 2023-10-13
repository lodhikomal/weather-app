import React from "react";
import "./Weather2Style.css";
import moment from "moment";

function Weather2(props) {
  // console.log(props.value?.weather?.wind, "check");
  const timeStamp = props.value?.weather?.sys?.sunrise;
  const timeStamp1 = props.value?.weather?.sys?.sunset;
  const date = timeStamp * 1000;
  const date1 = timeStamp1 * 1000;
  console.log(new Date(date1), "test date");
  // if (weatherData.status == "loading") {
  // } else {
  //   return;
  // }

  if (props.value.status == "loading") return <h1>Loading...</h1>;
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
            <p>{moment(date).calendar()}</p>

            <p>{moment(date1).calendar()}</p>
            <br></br>
            <span>{date}</span>
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
