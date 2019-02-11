// New context api vs PureComponent

import React, { Component, PureComponent } from "react";

const Cxt = React.createContext({
  color: "red"
});

class Box extends PureComponent {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log("Render outside");
    return (
      <div>
        color:
        <Cxt.Consumer>
          {({ color }) => {
            console.log("Render within Consumer");
            return <span style={{ color }}>{color}</span>;
          }}
        </Cxt.Consumer>
      </div>
    );
  }
}

export default class Demo extends Component {
  state = {
    color: "red"
  };

  handleClick = () => {
    this.setState({
      color: "green"
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击变绿色</button>
        <Cxt.Provider value={{ color: this.state.color }}>
          <Box />
        </Cxt.Provider>
      </div>
    );
  }
}
