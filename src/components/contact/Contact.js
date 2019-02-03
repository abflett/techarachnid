import React, { Component } from 'react';
import './contact.css'

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
      </div>
    );
  }
}

export default Contact;