import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          onChange={this.props.onChangeHandler}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default SearchBox;
