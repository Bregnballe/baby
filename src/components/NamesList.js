import React, { Component } from "react";

class NamesList extends Component {

  render() {
    const data = this.props.data
    const namesList = data.map(nameObject => {
      return (
        <li key={nameObject.id} className={nameObject.sex}>{nameObject.name}</li>
      )
    })

  // for hvery object in the json-file, a li-item is created and added to the unordered list below
  //  console.log(this.props.data[0].name)

    return (
        <ul>
          {namesList}
        </ul>
    );
  }

  }

export default NamesList;
