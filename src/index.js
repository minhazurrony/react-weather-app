import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/SearchBar";
import WeatherDetails from "./Components/WeatherDetails";

const App = () => (
  <div>
    <div>
      <h1> React Weather App</h1>
      <SearchBar />
      <WeatherDetails />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
