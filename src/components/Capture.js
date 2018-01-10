import React, { Component } from 'react';
import './capture/capture.css'

class Capture extends Component {
  render() {
    return (
      <div className="capture">
        <h1>New Section<br />
          Coming Soon</h1>
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
        <svg>
              <path className="arrow"
                    d="M 0,270.54166 50.003906,303.99665 100,270.54166 v 0 l -49.996094,100 z" />
            </svg>
      </div>
    );
  }
}

export default Capture;