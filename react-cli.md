#yarn
- 安装模块(生产)
yarn add xxxx
- 安装模块（开发）
yarn add xxxx -D
- 全局安装
yarn global add xxxx
- 自动根据package.json来安装
yarn
- 初始化
yarn init
- 运行脚本
yarn xxxx


# create-react-app
 react 官方提供的脚手架
1. 全局安装脚手架
 yarn global add create-react-app || npm install -g create-react-app
2. 通过 create-react-app 这个命令来创建项目
 create-react-app xxxx
3. 脚本
- start 开发
- build 打包上线
- test 测试
- eject 解除封印


# 目录结构
- node-modules
- public

# 不使用 jsx 语法
- jsx 语法形式
  ReactDOM.render(
    <div>
      Hello World
    </div>, 
    document.getElementById('root'));
通过babel其实会转换成下面的形式

-  ReactDOM.render(
    React.createElement('div',null,'Hello World'),
    document.getElementById('root')
  )

  React.createElement（）这个方法可以理解为 vue 中的 render()函数

# ?? 为什么 index.js 中并没有使用 React 这个模块，但还是要引入呢
  因为 react 需要使用 React.createElement() 来处理我们的 jsx 语法

# JSX 的基本语法
1. 单个根元素
2. 单标签要闭合
3. 标签都是小写字母，组件首字母必须大写
4. class -> className
5. for -> htmlFor

# React 中的插值表达式
- {1+1}
  PS：在插值表达式中{""}|{false}|{null}|{undefined} 都不会渲染任何内容

# html内容转义，需要使用 dangerousslySetlnnerHTML 属性 ??????????????????
  const tem = '<h1>登录</h1>'
  <div dangerouslySetInnerHTML={{__html:tem}}></div>

# 组件&props
- 组件从概念上看就像是函数，他可以接收任意的输入值（props），并返回一个需要在页面上展示的React（DOM）元素

- 定义组件
1. 函数定义（无状态组件）
2. 类定义（有状态组件）

- 注意事项
1. 组件的首字母必须大写
2. 类的组件必须继承继承组件  class World extends React.Component
3. 函数组件获取 props 只需要在形参上接收即可；类的组件中获取 props 要使用实例对象 this.props.xxx
4. 类可以定义构造函数，但是，如果你要定义的话 就必须在构造函数中的第一行就调用父类的构造函数，也就是使用 super()
5. state 不允许直接修改 要使用 setState（）
6. 事件使用时，用驼峰写法，如 onClick ，且事件处理函数不能加括号，要注意事件处理函数的 this 的指向问题


- props 的校验
1. 安装prop-types模块（yarn add prop-types）
2. 引入该模块 import PropTypes from 'prop-types'
3. World.propTypes = {//组件名.propTypes
   name:PropTypes.string //prop-types模块.类型
   }

- props 的默认值
  World.defaultProps = {  //组件名.defaultProps
    child:<h1>6666666666</h1>,
    hhh:'kkkkk'
  }

- 纯函数
1. 不会改变参数
2. 相同的输入一点产生相同的输出


# steState() 的处理情况
1. setState 是异步的
2. react 底层代码会将 多个 setState 中的对象 合并为一个去执行 (setState()中为一个对象时)
-假设 num 初始值为 1   代码运行后 num 会变成 2 打印出来的 会是 1 
    fn1(){
      this.setState({
        num : this.state.num + 1
      })
      this.setState({
        num : this.state.num + 1
      })
      this.setState({
        num : this.state.num + 1
      })
      console.log(this.state.num)
    }
3. react 底层代码会将 多个 setState 中的函数 合并为一个执行栈依次执行 (setState()中为一个函数时！！！！要使用prevState来计算才行！！！！) 
-假设 num 初始值为 1   代码运行后 num 会变成 6 打印出来的 还会是 1 
    fn1(){
      this.setState((prevState) => ({
        num:prevState.num+1
      }))
      this.setState((prevState) => ({
        num:prevState.num+1
      }))
      this.setState((prevState) => ({
        num:prevState.num+1
      }))
      this.setState((prevState) => ({
        num:prevState.num+1
      }))
      this.setState((prevState) => ({
        num:prevState.num+1
      }))
      console.log(this.state.num)
    }
4. setState()第二个参数 是一个回调函数
   假设 num 初始值为 1   代码运行后 num 会变成 2 打印出来也会是 2 
-  fn1(){
    this.setState({ 
      num:this.state.num+1
    },() =>{//当数据修改完成后触发
      console.log(this.state.num)
    })}

# 空标签 不影响页面结构布局
- <React.Fragment> </React.Fragment> && <> </> 

# 生命周期函数  （render必须有）
1. 挂载
- componentWillMount  组件挂载前
- render              组件渲染  默认初始化会触发一次 state 或者 props 发生改变时，会再次触发
- componentDidMount   组件挂载后
2. 更新
- state更新后依次触发
  shouldComponentUpdate     组件更新吗？（需要返回一个 布尔类型 的值 true 会继续向下执行 false 将不执行下面的生命周期）
    componentWillUpdate     组件更新
      render                组件渲染
        componentDidUpdate  组件更新完成
 
- props更新
- props更新后依次触发
  componentWillReceiveProps 最先触发这个什么周期再进行下面的(需要该组件已被渲染完成后，且父组件再次 render 后 才会触发该生命周期 )
    shouldComponentUpdate     组件更新吗？（需要返回一个 布尔类型 的值 true 会继续向下执行 false 将不执行下面的生命周期）
    componentWillUpdate     组件将要更新
      render                组件渲染
        componentDidUpdate  组件更新完成

# 卸载
- componentWillUnmount  组件将要销毁

# 使用 shouldComponentUpdate 来解决一些性能问题
1. 性能问题
-  父组件 render 子组件一定 render （有时候我们并不希望这样）
-  shouldComponentUpdate()可以接受到两个参数 nextProps和nextState （将要变成的props和state）
-  可以通过这两个参数和已有的 props 和 state 做比较来决定返回 true 还是 false

2. 组件传递的props如果是个函数 不推荐在传递到时候用 bind 来解决this指向问题 
因为bind每次都会返回一个新的函数，导致不方便进行性能优化

3. 可以在注册组件的时候直接继承 PureComponent 会自动处理一些小性能问题（不能与shouldComponentUpdate（）共同使用）


# 受控组件和非受控组件 （表单相关的内容）
- 其值由state控制的输入表单元素称为“受控组件”
<input type="text" />   文本输入框  通过value绑定
<input type="select" />  下拉选择框  通过value绑定
<textarea></textarea>  多行文本框  通过value绑定
<input type="checkbox" />  多选框  通过checked绑定
<input type="radio" />  单选框  通过checked绑定

- 不受控的使用 defaultValue defaultChecked来设置默认值
针对 <input type="text" /> 、<select> 、<textarea> ，使用 defaultValue 属性。
针对 <input type="checkbox" /> 、<input type="radio" />，使用 defaultChecked 属性。



# ref
- 可以看似Id 直接取个名字
    <input type="text" ref='aa'/>  可以通过 this.refs.aa 来得到该表单的真实 DOM 元素
- 还可以 传一个箭头函数  el就是真实DOM 将他赋值给出来直接使用
     <input type="text" ref={(el) => {this.hh=el}}/>  可以通过this.hh来得到真实DOM

# 改变 this 指向的方式
    事件处理函数如果没有绑定this 默认的指向一个undefined
1. 直接在jsx代码中
    onChange={this.btn.bind(this)}  
2. 在构造函数中绑定
-   constructor(){
      super();
      this.btn = this.btn.bind(this)
  }

-   onChange={this.btn}
3. jsx代码中传递一个箭头函数
    onChange={(e) => {this.btn(e)}}  
# 事件传参
  bind(this) this后面的参数就是传的参数
  最后一个参数能得到事件对象
  箭头函数直接传在括号里


### Redux 
- javascript 状态管理器

#Redux的三大原则
1. 单一数据源 
  - 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

2. state 是只读的 
  - 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

3. 使用纯函数来执行修改 
  - 为了描述 action 如何改变 state tree ，你需要编写 reducers。

#使用步骤
1. yarn add redux 安装
2. src 目录下面创建一个 store 文件夹，文件夹下面放一个 index.js 
3. store 文件夹下，创建一个 reducers 文件夹，里面也有一个 index.js
4. store 文件夹下，创建一个actions 文件夹，也有一个 index.js
-src
  -store
    -actions          放置很多的 create actions 函数的文件
      -index.js
    -reducer          放置很多的 reducer 文件
      -index.js
    -index.js         仓库的主js文件
#Redux 工作流程
- reducer 默认初始化，返回一个状态
  store 接收到这个状态 并暴露出去
  组件引入 store ，getState()获取仓库并使用它，通过 action 使用 dispatch()提交一个动作
  reducer 接收到这个动作并执行相应操作 返回新的 状态
  store 更新
  组件 通过 subScribe() 监听到store更新后，操作自身的state也进行更新

#概念
1. action 动作，他是一个一定要包含有一个 type 属性的 对象 
  （为了防止动作拼写出错导致的问题无法发现，还可以将 动作换成一个变量，这样一旦书写错误，浏览器将会主动报错，方便维护）
    {
      type:'addTodo'
      ...
    }
2. reducer 处理动作的函数,(要是纯函数)  最后一定要 return 一份新的 state
    (prevState，action) => {  //precState 上次仓库的状态  action 这次的动作

    }
3. store 仓库的实例对象
    getState()    获取当前仓库的数据
    subscribe(回调)  监听仓库的变化 当仓库有变化时，回调就会被执行（数据同步更新）
    dispatch(obj)  派发动作，obj就是动作（修改仓库）

# 一些建议的书写规范
  1. 为了便于管理和拓展功能，可以将派发动作中的对象都写成一个方法的返回值，这些方法统一放在 actions 文件夹下 的 index.js 中
  2. 这些动作中的 type 的值也可以不使用字符串直接书写 而是采用一个变量来代替 这样，一旦书写错误，由于是变量，浏览器会主动保存，方便查找错误

# Redux使用方法
- 谷歌安装 redux-devtools 插件
- 在createStore(创建仓库时)，将 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 这一段代码当成第二个参数

# redux 异步执行
- reducer 函数里的操作都是同步的
- action 默认情况下，动作都是一个对象，没法异步
- 最简单的是 可以在完成异步之后再派发动作
- 借助一些中间件能使 redux 支持异步

# redux 中间件
- redux-thunk   （重要！！能让 dispath 接收函数）
  默认情况下， store.dispatch()只能接收对象
  使用这个中间件后， store.dispatch() 除了对象外还能接收函数
- redux-logger  日志插件
  yarn add redux-logger
  import { applyMiddleware, createStore } from 'redux'; 
  import logger from 'redux-logger'
  const store = createStore(
    reducer,
    applyMiddleware(logger)
  )
当有多个中间件时，以逗号隔开，注意，日志插件最好放在最后

### reducer拆分
1. 原始方式
   在主 reducer 中引入拆分的小模块，并暴露出去
  import todo from './app'  //todo模块 是一个小reducer 得到的也是一个函数
  import cart from './cart';  //cart模块
  export default (state={},action) => {
    return {
      todos:todo(state.todos,action), //运行引入的函数，并传参，得到拆分出去的数据
      carts:cart(state.carts,action)  //运行引入的函数，并传参，得到拆分出去的数据
    } //返回这些数据
  }

2. 使用 combineReducers
  import {combineReducers} from 'redux' //引入 combineReducers
  import todo from './app'
  import cart from './cart';
  //使用 combineReducers

  export default combineReducers({  //使用combineReducers()里面传一个对象，对象里是要返回的值
    todos:todo, //直接写引入的模块，不需要运行，传参，combineReducers 都帮我们做好了
    carts:cart
  })
# 对象拷贝
  var obj1 = {name:'zs'}
  var obj2 = {age:'18'}
  var obj3 = Object.assign({},obj1,obj2)  //将所有对象都合并到第一个参数中，并返回
  //obj3将得到 obj1 和 obj2 中的内容合并成一个的对象{name: "zs", age: "18"}

# JSON.parse(JSON.stringify(person))   深拷贝
# 获取键码
- if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
         this.btn()
  }

  