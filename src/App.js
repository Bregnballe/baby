import React, { Component } from "react";
import NamesList from "./components/NamesList"
import Credit from "./components/Credit"
import Search from "./components/Search"

class App extends Component {
  render() {
//passing the data into the NamesList
    return (
      <div>
        <Search />
        <main>
          <NamesList data={this.props.data} />
          <Credit />
        </main>
      </div>
    )

  }
}

export default App;
