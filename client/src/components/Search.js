import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import API from "../util/API";

class Search extends Component {
  state = {
    searchQuery: "",
    searchResults: [],
  };
  componentDidMount() {
    console.log("mount");
    API.queryApi().then((response) => console.log(response));
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  };

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.searchQuery}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults />
      </div>
    );
  }
}

export default Search;
