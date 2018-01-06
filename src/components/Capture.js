import React, { Component } from 'react';
import FullScrDiv from '../components/FullScrDiv'
import './capture/capture.css'

class Capture extends Component {
  render() {
    return (
      <FullScrDiv>
              <div style={{
                width: '100%',
                height: '100%',
                transform: this.props.divScale
              }}>
                <div className="soon">
                  <h1>Next section<br />
                  coming soon...</h1>
                  <p>If you need work done<br />
                  you can e-mail me @<br />
                  <span className="email">atecharachnid@gmail.com</span>
                  
                  </p>

                  <p className="margins">
                  All the code for this site<br />
                  is available on <a href="https://github.com/abflett/techarachnid.com">GitHub</a>
                  </p>

                  <h3 className="margins">
                  I also have a <a href="https://youtu.be/1D4is2ybrks">YouTube</a> video
                  </h3>

                  <p>
                  I go over the first steps of<br />
                  game design.
                  </p>
                </div>
              </div>
        </FullScrDiv>
    );
  }
}

export default Capture;