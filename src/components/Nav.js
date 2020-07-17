// import React from "react";
import React, { Component } from "react";
import piggy from "../porco.png";
// const Nav = () => {
class Nav extends Component {
  render() {
    // const { handleSelectedOption } = this.props.handleSelectedOption
    // console.log(this.props)
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <div className="navWrapper">
          <button onClick={() => this.props.handleSelectedOption("all")}>All</button>
          <button onClick={() => this.props.handleSelectedOption("grease")}>Grease</button>
          <button onClick={() => this.props.handleSelectedOption("weight")}>Weight</button>
          <button onClick={() => this.props.handleSelectedOption("alphabetical")}>Alphabetical</button>
        </div>
      </div>
    );
  }
};
export default Nav;
