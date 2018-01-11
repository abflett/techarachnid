import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>New Section<br />
          Coming Soon</h1>
        <p>If you need work done<br />
          you can e-mail me @<br />
          <span className="email"><a href="mailto:atecharachnid@gmail.com">atecharachnid@gmail.com</a></span>   
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

export default Contact;