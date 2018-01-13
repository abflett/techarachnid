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
      <div className="contact" id="contact">
        <h3>Are you looking for a new design?</h3>
        <p>We would love to talk to you. Whether it is an art piece, web application or just coffee. Whatever it is, we assure you that the conversation will be valuable to your business.</p>

        <div className="contactbtn" onClick={this.showDiv}><p className="contactbtntext">Contact us</p></div>
        
        <div style={{
          marginTop: '2vmin',
          width: '100%',
          height: '1000px',
          display: this.state.theDiv
        }}>       
          <Iframe title="Contact us" src="https://docs.google.com/forms/d/e/1FAIpQLSe5dk9dHL_YlcPDEh-tkpVh98xor-UDhSb5U8-Ei1eeYfvTtQ/viewform?embedded=true" height="100%" width="100%" />
        </div>
      </div>
    );
  }
}

export default Contact;