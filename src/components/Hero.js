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

          <div className="layer4">
            <svg  viewBox="0 270 100 100" className="arrow">
              <path d="M 0,270.54166 50.003906,303.99665 100,270.54166 v 0 l -49.996094,100 z" />
            </svg>
          </div>
      </div>
    );
  }
}

export default Hero;