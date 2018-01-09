import React, { Component } from 'react';
import './capture/capture.css'

class Capture extends Component {
  render() {
    return (
      <div className="capture">
        <h1>Next section<br />
          coming soon...</h1>
        <p>If you need work done<br />
          you can e-mail me @<br />
          <span className="email">atecharachnid@gmail.com
          </span>   
        </p>

        <p>All the code for this site<br />
          is available on <a href="https://github.com/abflett/techarachnid.com">GitHub</a>
        </p>

        <h3>I also have a <a href="https://youtu.be/1D4is2ybrks">YouTube</a> video
        </h3>

        <p>I go over the first steps of<br />
          game design.
        </p>
      </div>
    );
  }
}

export default Capture;