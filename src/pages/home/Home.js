import React, { Component } from 'react';
import Hero from '../../components/Hero';

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
      </div>
    );
  }
}

export default Home;
