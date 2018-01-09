import React, { Component } from 'react';
import Logo from '../components/hero/logo'
import Webs from '../components/hero/webs'
import Lightning from '../components/hero/lightning'
import './hero/hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="main">
          <div className="herobg"></div>

          <div className="shock1">
          </div>

          <div className="shock2">
          </div>

          <div className="shock3">
          </div>

          <div className="layer1">
            <Webs />
          </div>

          <div className="layer2">
            <Lightning />
          </div>

          <div className="layer3">
          <Logo />
          </div>
      </div>
    );
  }
}

export default Hero;