// props.children?
// 频繁更新，就不要用 PureComponent 了

import React, { Component, PureComponent } from "react";

class Box1 extends PureComponent {
  render() {
    console.log("Box1 render");
    return (
      <div>
        <p>Box1的children是：{this.props.children}</p>
      </div>
    );
  }
}

class Box2 extends PureComponent {
  render() {
    console.log("Box2 render");
    return (
      <div>
        <p>Box2的content是：{this.props.content}</p>
      </div>
    );
  }
}

// Box3：其实与Box2 一毛一样
class Box3 extends PureComponent {
  render() {
    console.log("Box3 render");
    return (
      <div>
        <p>Box3的content是：{this.props.content}</p>
      </div>
    );
  }
}

export default class Demo extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  };

  // box3content是个常量，每次render不会变，所以box3不会re-render
  // 当然，与组件state props无关的常量，也可以放到组件外面
  box3content = <span>嘿嘿嘿你好呀</span>;

  render() {
    console.log("父组件render", this.state.count);
    return (
      <div>
        <button onClick={this.handleClick}>
          click me, count: {this.state.count}
        </button>
        <Box1>
          <span>嘿嘿嘿你好呀</span>
        </Box1>
        <Box2 content={<span>嘿嘿嘿你好呀</span>} />
        /** Box3 表现不同于Box2 */
        <Box3 content={this.box3content} />
      </div>
    );
  }
}
