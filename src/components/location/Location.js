import React, { Component } from 'react';
import './location.css'
import Map from '../Map'



class Location extends Component {
  render() {
    return (
        <div className="location">
          <div className="div1">
            <Map isMarkerShown />
          </div>
          <div className="div2">
            <p className="locText">Tech Arachnid was founded by Adam Flett. We are located in the heart of Canada.</p>
          </div>
        </div>
    );
  }
}

export default Location;
