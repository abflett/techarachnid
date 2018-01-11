import React, { Component } from 'react';

function Welcome() {
    return <h2 style={{
        alignSelf: 'center',
        padding: 0,
        paddingRight: '2vw',
        margin: 'auto auto auto 1vw',
        fontSize: '4vmin'
    }}>Home - About - Services - Contact</h2>;
}

function Welcome2() {
    return <h2 style={{
        alignSelf: 'center',
        padding: 0,
        paddingRight: '2vw',
        margin: 'auto auto auto 1vw',
        fontSize: '4vmin'
    }}>Getting your <span
    style={{
        color: 'rgb(220, 167, 255'
    }}>product</span> out of the <span
    style={{
        color: 'orange'
    }}>cave</span></h2>;
}

function Welcome3() {
    return <h2 style={{
        alignSelf: 'center',
        padding: 0,
        paddingRight: '2vw',
        margin: 'auto auto auto 1vw',
        fontSize: '4vmin'
    }}>Giving <span
    style={{
        color: 'orange'
    }}>freedom</span> to <span
    style={{
        color: 'rgb(220, 167, 255'
    }}>still</span> images</h2>;
}

function Welcome4() {
    return <h2 style={{
        alignSelf: 'center',
        padding: 0,
        paddingRight: '2vw',
        margin: 'auto auto auto 1vw',
        fontSize: '4vmin'
    }}><span
    style={{
        color: 'rgb(220, 167, 255'
    }}>Email</span> me for <span
    style={{
        color: 'orange'
    }}>custom</span> work!</h2>;
}


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.calcPosition = this.calcPosition.bind(this);
      }
    
      calcPosition(thePosition) {
        const value = thePosition / this.props.height;
        if(value > 0.7 && value < 1.7){
            return <Welcome2 />;
        }else if(value >= 1.7 && value < 2.5){
            return <Welcome3 />
        }else if(value >= 2.5){
            return <Welcome4 />
        }else{
        return <Welcome />;
        }
    }

  render() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            position: 'fixed',
            width: '100%',
            minHeight: '5vh',
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          
          {this.calcPosition(this.props.scrollPos)}
        
        </div>
    );
  }
}

export default NavBar;
