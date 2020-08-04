import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import API from "../util/API";

class Search extends Component {
 constructor(props) {
   super(props)
   console.log(props)

  this.state = {
    searchQuery: "",
    searchResults: [],
    savePlant: props.savePlant
  }; 
}
  handleSearch = () => {
    console.log("mount");
    API.queryApi(this.state.searchQuery)
      .then((response) => {
        const resultsArray = response.data.map((e) => {
          return {
            name: e.common_name,
            image: e.image_url
          }
        });
        console.log(response);
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
          savePlant={this.state.savePlant}
        />
      </div>
    );
  }
}

export default Search;
