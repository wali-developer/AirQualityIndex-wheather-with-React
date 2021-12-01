import React, { useEffect, useState } from "react";
import axios from "axios";
import AirQuality from "./air_quality/AirQuality";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "../App.css";

const App = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      // get location from browser
      window.navigator.geolocation.getCurrentPosition((location) => {
        setLat(location.coords.latitude);
        setLong(location.coords.longitude);
      });
      // axios call to get data from api
      try {
        await axios
          .get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=e5a880baf60f4bc9cfc30aedc74a7fb0`
          )
          .then((response) => {
            setData(response.data.list);
          });
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    // call to getLocation function in useEffect
    getLocation();
  }, [long, lat]);
  console.log(data);

  return (
    <Container className="App">
      <AirQuality wheatherData={data} lat={lat} long={long} />
    </Container>
  );
};

export default App;
