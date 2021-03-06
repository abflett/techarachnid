import React, { Component } from 'react';
import './navbar.css'

function Welcome() {
    return <div className="theNavSelection">
                    <div className="homebox">
                        <div>Home</div>
                        <div className="homebar selected"></div>
                    </div>
                    <div className="homebox">
                        <div>About</div>
                        <div className="aboutbar"></div>
                    </div>
                    <div className="homebox">
                        <div>Services</div>
                        <div className="servicesbar"></div>
                    </div>
                    <div className="homebox">
                        <div>Contact</div>
                        <div className="contactbar"></div>
                    </div>
            </div>;
}

function Welcome2() {
    return <div className="theNavSelection">
                    <div className="homebox">
                        <div>Home</div>
                        <div className="homebar"></div>
                    </div>
                    <div className="homebox">
                        <div>About</div>
                        <div className="aboutbar selected2"></div>
                    </div>
                    <div className="homebox">
                        <div>Services</div>
                        <div className="servicesbar"></div>
                    </div>
                    <div className="homebox">
                        <div>Contact</div>
                        <div className="contactbar"></div>
                    </div>
            </div>;
}

function Welcome3() {
    return <div className="theNavSelection">
                    <div className="homebox">
                        <div>Home</div>
                        <div className="homebar"></div>
                    </div>
                    <div className="homebox">
                        <div>About</div>
                        <div className="aboutbar"></div>
                    </div>
                    <div className="homebox">
                        <div>Services</div>
                        <div className="servicesbar selected3"></div>
                    </div>
                    <div className="homebox">
                        <div>Contact</div>
                        <div className="contactbar"></div>
                    </div>
            </div>;
}

function Welcome4() {
    return <div className="theNavSelection">
                    <div className="homebox">
                        <div>Home</div>
                        <div className="homebar"></div>
                    </div>
                    <div className="homebox">
                        <div>About</div>
                        <div className="aboutbar"></div>
                    </div>
                    <div className="homebox">
                        <div>Services</div>
                        <div className="servicesbar"></div>
                    </div>
                    <div className="homebox">
                        <div>Contact</div>
                        <div className="contactbar selected4"></div>
                    </div>
            </div>;
}


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.calcPosition = this.calcPosition.bind(this);
      }
    
      calcPosition(thePosition) {
        const value = thePosition / this.props.height;
        if(value > 0.8 && value < 2.8){
            return <Welcome2 />;
        }else if(value >= 2.8 && value < 4.3){
            return <Welcome3 />
        }else if(value >= 4.3){
            return <Welcome4 />
        }else{
        return <Welcome />;
        }
    }

  render() {
    return (
        <div className="navBar">
          {this.calcPosition(this.props.scrollPos)}
        </div>
    );
  }
}

export default NavBar;
