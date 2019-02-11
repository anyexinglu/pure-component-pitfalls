// Old context api vs PureComponent

import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

class Box extends PureComponent {
  render() {
    const color = this.context.color;
    return (
      <div>
        color: <span style={{ color }}>{color}</span>
      </div>
    );
  }
}

Box.contextTypes = {
  color: PropTypes.string
};

export default class Demo extends Component {
  state = {
    color: "red"
  };

  getChildContext() {
    return { color: this.state.color };
  }

  handleClick = () => {
    this.setState({
      color: "green"
    });
  };

  render() {
    console.log("render", this.context);
    return (
      <div>
        <button onClick={this.handleClick}>点击变绿色</button>
        <Box />
      </div>
    );
  }
}

Demo.childContextTypes = {
  color: PropTypes.string
};
