import React, { Component } from "react";
import Hog from './Hog.js'
class HogsContainer extends Component {  
  renderHogs()  {
    // set counter for hog component key={id}.
    let hogId = 0  
   return this.props.hogs.map(hog => {
    // increment value of id by 1
    hogId++
    // require a pig image and generate the image dynamically
    const hogName = hog.name.toLowerCase()
    const joinedHogName = hogName.split(" ").join("_")
    const pigImage = require(`../hog-imgs/${joinedHogName}.jpg`)    
    // assigne property to a variable 
    const medal_achieved = hog['highest medal achieved']
     return <Hog 
      key={hogId}
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog.weight}
      highest_medal_achieved={medal_achieved}
      pigImage={pigImage}
     />
    });
  }
    render() {
      console.log("IN HogsContainer: ", this.props.hogs)
      return (
        <div className="ui grid container">
          {this.renderHogs()}
        </div>
      );
    }
  }
  export default HogsContainer