import React, { Component } from 'react';
import NavBar from '../../components/NavBar'
import Hero from '../../components/hero/Hero';
import Cave from '../../components/cave/Cave';
import Contact from '../../components/contact/Contact'
import Freedom from '../../components/freedom/Freedom'
import Who from '../../components/who/Who'
import Location from '../../components/location/Location'

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
          <Who />
          <Cave height={this.state.height}
                scrollPos={this.state.scrollPos} />
          <Location />
          <Freedom height={this.state.height}
                scrollPos={this.state.scrollPos} />
          <Contact />
      </div>
    );
  }
}

export default Home;
