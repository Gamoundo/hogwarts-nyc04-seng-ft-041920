import React, { Component } from "react";
class Hog extends Component {
    state = {
      display: false,
      classShow: "info-disabled"  // initial state so the div is hidden on page load
    }
    // this callback function will be invoked onClick and 
    // check if display is true or false
    handleInfo = (display) => {
      if (display) {
        // if display is TRUE set it to FALSE
        // give the div a class of 'info-disabled'
        // (CHECK THE CLASSNAME ON DIV)
        this.setState({
          display: false,
          classShow: "info-disabled"
        })
      } else {
        this.setState({
          // if display is FALSE set it to TRUE
          // give the div a class of 'info-display'
          display: true,
          classShow: "info-display"
        })        
      }
    }
    render() {
      // useing destructuring to assign each props property to its own variable
      const { name, specialty, highest_medal_achieved, greased, weight, pigImage} = this.props
      return (
        <div className="ui eight wide column">
          <hr/>
          <h2>{name}</h2>
          <img src={pigImage} />
          <div>
            {/* onClick has a callback function within so the browset won't invoke the function infinitely */}
            <button onClick={() => this.handleInfo(this.state.display)}>Show Details</button>
          </div>        
          <div className={this.state.classShow}>
            <h3>{specialty}</h3>
            <h3>{highest_medal_achieved}</h3>
            <p>{greased}</p>
            <p>{weight}</p>
          </div>           
        </div>
      );
    }
  }
  export default Hog;