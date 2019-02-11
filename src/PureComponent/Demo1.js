// Modify props/state vs PureComponent

// import React, { Component } from "react";
import React, { Component, PureComponent } from "react";
import isEqual from "lodash.isequal";

// class List extends PureComponent {
//   render() {
//     return (
//       <div>
//         <div>
//           {this.props.list.map((item, index) => (
//             <p key={index}>
//               item{index}: {item}
//             </p>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

class List extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps.list, this.props.list);
    // 深比较，如果props.list不变，则不rerender
    if (isEqual(nextProps.list, this.props.list)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <div>
          {this.props.list.map((item, index) => (
            <p key={index}>
              item{index}: {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default class Demo extends Component {
  state = {
    list: [1, 2, 3, 4, 5]
  };

  add = e => {
    let list = this.state.list;
    list.push(1);
    this.setState({
      list
    });
  };

  delete = e => {
    let list = this.state.list;
    list.splice(0, 1);
    this.setState({
      list
    });
  };

  render() {
    return (
      <div>
        <List list={this.state.list} />
        <button onClick={this.add}>add</button>
        <button onClick={this.delete}>delete</button>
      </div>
    );
  }
}
