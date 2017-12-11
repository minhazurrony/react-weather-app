import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";

class App extends Component {
  render() {
    return (
      <div>
        <h1> React Weather App</h1>
        <SearchBar />
        <WeatherDetails />
      </div>
    );
  }
}
export default App;
