import React from "react";
import { Card, Input } from "semantic-ui-react";
import "./AirQuality.css";
import "semantic-ui-css/semantic.min.css";

// Internal Style
const location = {
  width: "65%",
  maxWidth: "100%",
  paddingRight: "50px",
};

const heading1 = {
  fontSize: "35px",
  textTransform: "uppercase",
};

const para = {
  fontSize: "16px",
  color: "gray",
};

const box = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "DodgerBlue",
  padding: "20px 50px",
  borderRadius: "15px",
};

const innerBox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "50px",
};

const innerBoxAqi = {
  padding: "25px",
  fontSize: "50px",
  fontWeight: "bold",
  backgroundColor: "yellow",
  borderRadius: "15px",
  marginRight: "25px",
};

const liveAqi = {
  textTransform: "uppercase",
  color: "white",
  padding: "5px 0",
  lineHeight: "0",
};

const AqiResult = {
  fontSize: "45px",
  color: "white",
  fontWeight: "bolder",
  lineHeight: "0",
};

const AqiType = {
  textAlign: "center",
  color: "gray",
};

const card = {
  width: "35%",
  maxWidth: "100%",
  paddingLeft: "50px",
};

const latLong = {
  fontWeight: "bold",
  padding: "0 20px",
};

const cardHeader = {
  fontWeight: "bolder",
  fontSize: "18px",
};

const AirQuality = ({ wheatherData, lat, long }) => {
  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <div style={(location, { maxWidth: "100%" })} className="location">
        <div style={{ padding: "40px 0" }}>
          <h1 style={heading1}>Air Quality in Peshawar</h1>
          <span style={para}>
            Air Quality Index (AQI) and PM2.5 Air Pollution in Peshawar
          </span>
        </div>
        <div style={box}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wsv9ipp5OuESHAaCIdUO-X8rTSdOkEFBUQ&usqp=CAU"
              width="120px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div style={innerBox}>
            <span id="innerBoxAqi" style={innerBoxAqi}>
              {/* This id will show Aqi */}
              <span style={{ fontSize: "16px" }}>(AQI)</span>
            </span>
            <div>
              <span className="liveAqi" style={liveAqi}>
                Live AQI Index
              </span>{" "}
              <br />
              <h1 id="AqiResult" style={AqiResult}>
                {/* Aqi state */}
              </h1>
            </div>
          </div>
        </div>
        <h3 id="AqiType" style={AqiType}></h3>
      </div>
      <div className="card" style={(card, { maxWidth: "100%" })}>
        <div>
          <span style={latLong}>Latitude</span>{" "}
          <Input type="text" value={lat} /> <br />
          <span style={latLong}>Longitude</span>
          <Input type="text" value={long} />
        </div>

        {/* used map method to get all data from wheatherData array */}
        {wheatherData.map((component, index) => {
          const { co, nh3, no, no2, o3, pm2_5, pm10, so2 } =
            component.components;
          const { aqi } = component.main;

          // condition on how AQI is:
          if (aqi == 1) {
            document.getElementById("AqiResult").innerText = "Good";
            document.getElementById("AqiType").innerText =
              "You have good Quality Index";
            document.getElementById("innerBoxAqi").innerText = "1";
          } else if (aqi === 2) {
            document.getElementById("AqiResult").innerText = "Fair";
            document.getElementById("AqiType").innerText =
              "You have Fair Quality Index";
            document.getElementById("innerBoxAqi").innerText = "2";
          } else if (aqi === 3) {
            document.getElementById("AqiResult").innerText = "Moderate";
            document.getElementById("AqiType").innerText =
              "You have Moderate Quality Index";
            document.getElementById("innerBoxAqi").innerText = "3";
          } else if (aqi === 4) {
            document.getElementById("AqiResult").innerText = "Poor";
            document.getElementById("AqiType").innerText =
              "You have Poor Quality Index";
            document.getElementById("innerBoxAqi").innerText = "4";
          } else {
            document.getElementById("AqiResult").innerText = "Very Poor";
            document.getElementById("AqiType").innerText =
              "You have Very Poor Quality Index";
            document.getElementById("innerBoxAqi").innerText = "5";
          }
          return (
            <Card key={index}>
              <Card.Content style={cardHeader}>
                Air Quality Index (AQI) : <strong>{aqi}</strong>
              </Card.Content>
              <Card.Content>
                Carbon Monoxide: <strong>{co.toFixed()}</strong> ug/m3
              </Card.Content>
              <Card.Content>
                Nitrogen Monoxide : <strong>{no.toFixed()}</strong> ug/m3
              </Card.Content>
              <Card.Content>
                Ozone : <strong>{o3.toFixed()}</strong> ug/m3
              </Card.Content>
              <Card.Content>
                Fine particles matter :<strong>{pm2_5.toFixed()}</strong> ug/m3
              </Card.Content>
              <Card.Content>
                Ammonia : <strong>{nh3.toFixed()}</strong> ug/m3
              </Card.Content>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AirQuality;
