import React, { Component } from 'react';
import Hero from '../../components/Hero';
import Cave from '../../components/Cave'

class Home extends Component {
  constructor(props) {
    super();
 
    this.state = {
      isFull: false,
    };
  }
 
  render() {
    return (
      <div>
          <Hero />
          <Cave />
      </div>
    );
  }
}

export default Home;
