import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
class App extends Component {
  state= {
   hogs: hogs,
   selectedOption: 'all'
  }
  // compare function will be passed into sort() 
  // to sort hogs.name in alphabetical order
  compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  // will receive the option from the clicked buttons
  // on the nav
  handleSelectedOption = (option) => {
    // declare chosenOption variable
    let chosenOption;
    if (option === 'grease') {

      chosenOption = this.state.hogs.filter(hog => hog.greased === true)
    } else if (option === 'weight') {
      chosenOption = hogs
      chosenOption.sort(function(a, b) {
        return a.weight - b.weight
      })
    } else if (option === 'alphabetical') {
      chosenOption = hogs
      chosenOption.sort(this.compare);
    } else if (option === 'all') {
      chosenOption = hogs
    } 
    this.setState({
      hogs: chosenOption,
      selectedOption: option
    })
  }
  render() {
    console.log(this.hogs)    
    console.log(this.state)    
    return (
      <div className="App">
        <Nav 
          handleSelectedOption={this.handleSelectedOption} 
          />
        <HogsContainer
          hogs={this.state.hogs} 
          />
      </div>
    );
  }
}
export default App;