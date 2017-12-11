import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.onInputChange}
            type="text"
            placeholder="City Name"
          />
        </form>
      </div>
    );
  }
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
