import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/SearchBar";
import WeatherDetails from "./Components/WeatherDetails";

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

ReactDOM.render(<App />, document.getElementById("root"));
