import React, { Component } from "react";
import NamesList from "./components/NamesList"
import Credit from "./components/Credit"

class App extends Component {
  render() {
//passing the data into the NamesList
    return (
      <div>
        <NamesList data={this.props.data} />
        <Credit />
      </div>
    )

  }
}

export default App;
