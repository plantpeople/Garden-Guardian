import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import API from "../util/API";


class Search extends Component {
  state = {
    searchQuery: "",
    searchResults: [],
  };
  handleSearch = () => {
    console.log("mount");
    API.queryApi(this.state.searchQuery)
      .then((response) => {
        const resultsArray = response.data.map((e) => e.common_name);

        this.setState({ searchResults: resultsArray });
      })
      .catch((error) => console.log(error));
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
    console.log(this.state.searchQuery)
  };

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.searchQuery}
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
        />
        <SearchResults 
          plants={this.state.searchResults}
        />
      </div>
    );
  }
}

export default Search;
