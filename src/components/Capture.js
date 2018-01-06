import React, { Component } from 'react';
import FullScrDiv from '../components/FullScrDiv'
import './capture/capture.css'

class Capture extends Component {
  render() {
    return (
        <FullScrDiv {...this.props}>
              <div style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'top',
                transform: this.props.divScale
              }}>
                <div className="soon">
                  <h1>Next section<br />
                  comming soon...</h1>
                  <p>If you need work done<br />
                  you can e-mail me @<br />
                  atecharachnid@gmail.com
                  
                  </p>
                </div>
              </div>
        </FullScrDiv>
    );
  }
}

export default Capture;