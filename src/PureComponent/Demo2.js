// renderProps vs PureComponent

import React, { Component, PureComponent } from "react";

// 公共组件Select
class Select extends PureComponent {
  render() {
    const { datasource, itemRender } = this.props;
    return (
      <select>{datasource.map((item, index) => itemRender({ item }))}</select>
    );
  }
}

// 公共组件Select的demo，也用于单测
// export default class Demo extends Component {
//   state = {
//     datasource: ["111", "222", "333"]
//   };

//   itemRender = ({ item }) => {
//     return <option key={item}>{item} >></option>;
//   };

//   render() {
//     return (
//       <div>
//         <Select
//           datasource={this.state.datasource}
//           itemRender={this.itemRender}
//         />
//       </div>
//     );
//   }
// }

export default class Demo extends Component {
  state = {
    datasource: ["111", "222", "333"],
    enableDelete: false
  };

  handleClick = () => {
    this.setState({
      enableDelete: !this.state.enableDelete
    });
  };

  itemRender = ({ item }) => {
    return (
      <option key={item}>
        {item}
        {this.state.enableDelete ? " x" : ""}
      </option>
    );
  };

  render() {
    return (
      <div>
        <Select
          datasource={this.state.datasource}
          itemRender={this.itemRender}
        />
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
