import React, { Component } from 'react';
import './location.css'
import Map from '../Map'



class Location extends Component {
  render() {
    return (
        <div className="location" id="about">

          <div className="div2">
            <div className="abouttext">
              <p>Tech Arachnid was founded by Adam Flett. We are located in the heart of Canada. Our goal is to capture your audience's attention and get your product noticed. We achieve it through great user experience and visual design.</p>
              <p>Our passion is to strive for excellence while making product creation effortless. We look forward to establish an exciting partnership.</p>
              <p>We get stills out of the cave!</p>
            </div>
          </div>
          
          <div className="div1">
            <Map isMarkerShown />
          </div>
          
        </div>
    );
  }
}

export default Location;
