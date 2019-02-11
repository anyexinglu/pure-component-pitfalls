## PureComponent

- Demo1: 直接操作引用对象/数组带来问题，记住 Immutable 数据，直接操作改变 props/state 数据是危险的。

- Demo2: 父组件重渲染、纯子组件不渲染
  [Be careful when using Render Props with React.PureComponent](https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent) In cases where you cannot define the prop statically (e.g. because you need to close over the component’s props and/or state) <Mouse> should extend React.Component instead.

- Demo3 vs Demo4: 旧 context 的会不更新，新 context 没问题。


16.3 推出 new Context API，解决 HOC 的 context 传递问题（主要是 SCU 作崇）
新 api 里，render 不执行，但 consumer 内的函数执行了！

- Extra:
  - [Children are all pure](https://reactjs.org/docs/react-api.html#reactpurecomponent)
    Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.
  - [Wrong use]
  ```jsx
    <Box x={{y: 1}} />
    <Box x={array.map(f)} />
    <Box>
      <span>Hello, world!</span>
    </Box>
  ```
  频繁更新不需要 Pure
  - shouldComponentUpdate 一般不需要 Pure


## Reference

- https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e
- [不一样的Context](https://zhuanlan.zhihu.com/p/42654080)
- [React 源码解析](https://react.jokcy.me/book/update/expiration-time.html)
