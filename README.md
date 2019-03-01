## 启动

`yarn && yarn start`

## PureComponent

- Demo1: 直接操作引用对象/数组带来问题，记住 Immutable 数据，直接操作改变 props/state 数据是危险的。
[官方有相似的例子说明](https://reactjs.org/docs/optimizing-performance.html#examples)


- Demo2: 父组件重渲染、纯子组件不渲染
  [Be careful when using Render Props with React.PureComponent](https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent) In cases where you cannot define the prop statically (e.g. because you need to close over the component’s props and/or state) <Mouse> should extend React.Component instead.

- Demo3 vs Demo4: 旧 context 的会不更新，新 context 没问题。
![image](https://user-images.githubusercontent.com/8243326/53578596-e729bb00-3bb2-11e9-9637-04db10f54e26.png)
![image](https://user-images.githubusercontent.com/8243326/53578627-f577d700-3bb2-11e9-8a5e-ce248636d8e3.png)
![image](https://user-images.githubusercontent.com/8243326/53578637-fc064e80-3bb2-11e9-952b-b05e4c0ae15f.png)

  16.3 推出 new Context API，解决 HOC 的 context 传递问题（主要是 SCU 作崇），新 api 里，render 不执行，但 consumer 内的函数执行了！

- Demo5: [wrong use] 频繁更新不需要 Pure —— 大家知道，对于纯子组件来说，父组件 render 时传入的 props 为实时生成的对象/数组（如`<Box x={{y: 1}} />`或`<Box x={array.map(f)} />`中的`x`），那 shouldComponentUpdate 浅比较这个 props，每次返回 true，就没必要用 PureComponent 了。但未必注意到，props 如果传入的是 jsx，浅比较也是每次返回 true。

```jsx
    <Box1>
      <span>嘿嘿嘿你好呀</span>
    </Box1>
    <Box2 content={<span>嘿嘿嘿你好呀</span>} />
```

- Extra:
  - [Children are all pure](https://reactjs.org/docs/react-api.html#reactpurecomponent)
    Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.
  - 自己写了 shouldComponentUpdate 的组件，一般不需要 Pure


## Reference

- https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e
- [不一样的Context](https://zhuanlan.zhihu.com/p/42654080)
- [React 源码解析](https://react.jokcy.me/book/update/expiration-time.html)
