import React, { Component } from 'react';

// slightly modified code from the Vanilla.js example
const getPosition = (elapsedTime, h, k) => {
  const a = (4 * k) / Math.pow(h * 2, 2); // coefficient: -.000483932

  // Position as a function of time, using the vertex form
  // of the quadratic formula:  f(x) = a(x - h)^2 + k,
  // (where [h, k] is the vertex). See it graphically at:
  //    https://www.desmos.com/calculator/i6yunccp7v
  const ypos = a * Math.pow((((elapsedTime + h) % (h * 2)) - h), 2);

  return ypos;
};

// performs a Quadratic Ease in and Ease out repeatedly
class QuadBounce extends Component {
  state = {
    beginning: Date.now(),
  }

  componentWillMount() {
    this.setState({ interval: setInterval(this.updateValue, 20) });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  updateValue = () => {
    const {
      props: {
        duration,
        start,
        end,
      },
      state: {
        beginning,
      },
    } = this;

    const time = Date.now() - beginning;
    const value = start + getPosition(time, duration / 2, end - start);
    this.setState({ value });
  };

  render() {
    const renderedChildren = this.props.children(this.state.value);
    return renderedChildren && React.Children.only(renderedChildren);
  }
}

export default QuadBounce;

