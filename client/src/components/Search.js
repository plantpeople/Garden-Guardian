import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import API from "../util/API";
import "../index.css"

class Search extends Component {
 constructor(props) {
   super(props)

  this.state = {
    searchQuery: "",
    searchResults: [],
    savePlant: props.savePlant
  }; 
}
  handleSearch = () => {
    API.queryApi(this.state.searchQuery)
      .then((response) => {
        const resultsArray = response.data.map((e) => {
          return {
            name: e.common_name,
            image: e.image_url,
            notes: []
          }
        });
        this.setState({ searchResults: resultsArray });
      })
      .catch((error) => console.log(error));
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
          handleSearch={this.handleSearch}
        />
        <SearchResults
          plants={this.state.searchResults}
          savePlant={this.state.savePlant}
        />
      </div>
    );
  }
}

export default Search;
