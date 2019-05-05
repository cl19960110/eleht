//setState 是异步函数

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      num: 1
    }
  }

  render(){
    return (
      <div>
        {this.state.num}
        <button onClick={this.fn1.bind(this)}>加1</button>
      </div>
    )
  }
  fn1(){
    this.setState({ 
      num:this.state.num+1
    },() =>{//当数据修改完成后触发
      console.log(this.state.num)

    })
    /* this.setState((prevState) => ({
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
      
    }),() =>{
      console.log(this.state.num)
    })
    console.log(this.state.num) */
    /* this.setState({
      num : this.state.num + 1
    })
    this.setState({
      num : this.state.num + 1
    })
    this.setState({
      num : this.state.num + 1
    })
    console.log(this.state.num) */
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
)
