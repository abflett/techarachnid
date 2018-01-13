import React, { Component } from 'react';
import './contact.css'
import Iframe from '../Iframe'

class Contact extends Component {
  constructor() {
    super();
    this.state = {theDiv: 'none', toggleDiv: true};
    
  }

  showDiv = () => {
    if(this.state.toggleDiv){
      this.setState({theDiv: 'block', toggleDiv: false});
    }else{
      this.setState({theDiv: 'none', toggleDiv: true});
    }
    
  }

  render() {
    return (
      <div className="contact">
        <h1>New Section<br />
          Coming Soon</h1>
        <p>If you need work done</p>
          
          <button onClick={this.showDiv}>Contact us</button>
          <div style={{
          width: '100%',
          height: '1000px',
          display: this.state.theDiv
        }}>       
          <Iframe title="Contact us" src="https://docs.google.com/forms/d/e/1FAIpQLSe5dk9dHL_YlcPDEh-tkpVh98xor-UDhSb5U8-Ei1eeYfvTtQ/viewform?embedded=true" height="100%" width="100%" />
        
        </div>
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