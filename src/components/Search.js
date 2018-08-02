import React, { Component } from "react";

class Search extends Component {

  filterUpdate() {
    const val = this.searchInput.value
    console.log(val)

  }

  render() {

    return (
      <header>
        <form>
          <input
            type="text"
            ref={ (value) => {this.searchInput = value}}
            placeholder="Search for names"
            onChange={this.filterUpdate.bind(this)}
          />
        </form>
      </header>
    )
  }

  }

export default Search;
