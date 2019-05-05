//组件的state（状态） （相当于vue中的data）

import React from 'react'
import ReactDOM from 'react-dom'


class Hello extends React.Component{
  constructor(){  //类可以定义构造函数，但是，如果你要定义的话 就必须在构造函数中的第一行就调用父类的构造函数，也就是使用 super()
    super();

    this.state = {
      name:'hello'
    }
    this.fn = this.fn.bind(this)
  }
  render(){
    return (
      <div>{this.state.name}
        <button onClick={this.fn}>点我</button>
      
      </div>
    )
  }

  fn(){ //修改 state 要使用 setState({xxx：xxx})这个方法来设置
    this.setState({ 
      name:'jjjjjjjjjjj'
    })
  }
}


ReactDOM.render(
  <div>
    <Hello></Hello>
  </div>,
  document.getElementById('root')
)
