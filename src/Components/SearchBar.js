import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="City Name" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
