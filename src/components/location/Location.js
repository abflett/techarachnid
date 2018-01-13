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
            <p className="locText">Tech Arachnid was founded by Adam Flett. Located in the heart of Canada. Our mission is to create fun interactive pieces</p>
            <p className="locText2">We believe in freedom, and we create products to express that.</p>
          </div>
        </div>
    );
  }
}

export default Location;
