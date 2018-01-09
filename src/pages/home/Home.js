import React, { Component } from 'react';
import NavBar from '../../components/NavBar'
import Hero from '../../components/Hero';
import Cave from '../../components/Cave';
import Capture from '../../components/Capture'

class Home extends Component {
  constructor() {
    super();
    this.scrResize = this.scrResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {height: window.innerHeight,
                  width: window.innerWidth,
                  scrollPos: 0};
    
  }

  scrResize(){
    const height = window.innerHeight,
          width = window.innerWidth;

    this.setState({height, width});
  }

  handleScroll() {
    const scrolls = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({scrollPos: scrolls});
  }

  componentDidMount() {
    window.addEventListener('resize', this.scrResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.scrResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.scrResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
 
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
          <NavBar height={this.state.height}
                  scrollPos={this.state.scrollPos} />
          <Hero />
          <Cave height={this.state.height}
                scrollPos={this.state.scrollPos} />
          <Capture />
      </div>
    );
  }
}

export default Home;
