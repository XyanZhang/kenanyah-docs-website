---
slug: Why use react hooks
title: Why use react hooks
authors: kenanyah
tags: [study, react]
---

> hooks api 此处就不进行解释说明了，只说明对应hooks 在什么情况下使用

## useState

`const [xxx, setXxx] = useState(initValue)` 创建状态，修改状态

state 中不要保存可以通过其他状态计算出来的值

+ 从 props 传递过来的值，例如排序，过滤等，应该重新排序，或者利用 缓存机制，而不是直接放在state
+ 从 url 读取的值，需要用的时候直接从URL中读取，而不是直接放在state
+ 从 cookie storage 中读取的值同样如此

组件的状态应该尽可能简单，尽量拆分组件
> 场景：一个组件从服务器获取列表数据，获取后存放到 state 中，如果每个需要这个组件的地方都需要重新获取一次
>
> 解决：使用状态管理框架，例如redux，mobx 管理组件state，组件自身只负责展示，没有太多业务逻辑，表现层和业务层分离

## useEffect

`useEffect(callbacl, dependencied)`

> 副作用：函数组件的当次渲染执行过程中，useEffect 中的代码执行是不影响渲染出来的 UI 的
>
> useEffect 是每次组件 render 完后判断依赖并执行

### 使用

+ 没有依赖项：每次render 后重新执行
+ 空数组，只在首次执行时触发，对应 componentDidMount
+ 返回一个函数，用于组件销毁时做一些清除操作，比如定时器，事件取消绑定等

### notice

+ useEffect 中的函数是异步执行的，如果需要同步执行，需要使用同步函数，例如`useLayoutEffect`
+ React 会使用浅比较来对比依赖项是否发生变化

## hooks 使用规则

只有在函数组件的顶级作用于使用，只能在函数组建或者其他 Hooks 中使用
> 顶层作用域：hooks 不能在循环，条件判断，嵌套函数中使用
> 在组件多次渲染之间，必须按顺序被执行

### hooks 封装，被类组件使用

```jsx
import { useWindowSize } from '../hooks/userWindowSize'
export const withWindowSize = (Comp) => {
  return (props) => {
    const windowSize = useWindowSize();
    return <Comp windowSize={windowSize} {...props} />;
  }
}

// use
import { withWindowSize } from '../components/withWindowSize';
class MyComp {
  render() {
    const { windowSize} = this.props;
  }
}

export default withWindowSize(MyComp)
```
