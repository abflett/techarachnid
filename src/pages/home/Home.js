import React, { Component } from 'react';
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
                  scale: window.innerHeight / window.innerWidth,
                  divScale: 'scale(1)',
                  scrollPos: 0};
    
  }

  scrResize(){
    const height = window.innerHeight,
          width = window.innerWidth;
    const scale = height / width;

    this.setState({height, width, scale});

    if(this.state.scale >= 1.0){
      this.setState({divScale: "scale(" + this.state.scale * 1.1 + ")"});
    }else if(this.state.scale <= 1.0){
      this.setState({divScale: "scale(" + 1.0 / this.state.scale + ")"});
    }else{
      this.setState({divScale: 'scale(1)'});
    }
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
      <div>
          <Hero {...this.state} />
          <Cave {...this.state} />
          <Capture {...this.state} />
      </div>
    );
  }
}

export default Home;
