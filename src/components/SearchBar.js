import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value });
    this.props.runSearch(e.target.value);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label htmlFor="searchTerm" hidden>
            Search
          </Label>
          <Input
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Search here..."
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBar;
