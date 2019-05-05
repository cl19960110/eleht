//TodoApp组件
import React from 'react'
import TodoItem from './TodoItem.jsx'


class TodoApp extends React.Component{
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.fn1 = this.fn1.bind(this);
    // this.fn2 = this.fn2.bind(this);
    this.state = {
      todos: [],
      Val:''
    }
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.Val} onChange={this.fn1}/>
        <button onClick={this.addTodo}>添加</button>
        <ul>
          {/* <li>吃饭</li>
          <li>睡觉</li> */}
          {
            this.state.todos.map((item,index) => {
              return <TodoItem key={index} index={index} item={item} fn2={this.fn2.bind(this)}></TodoItem>
            })
          }
          {/* {
            this.state.todos.map((item,index) => {
              return <li key={index} onClick={this.fn2.bind(this,index)} index={index}>{item.name   }</li>
            })
          } */}
        </ul>
      </div>
    )
  }
  addTodo(event){
    console.log(event.target)
    this.setState({
      // todos:[{name:this.state.Val}]
      todos:this.state.todos.concat({name:this.state.Val}),
      Val:''
    })
  }
  fn1(e){
    console.log(e.target.value)
    this.setState({
      Val:e.target.value
    })
  }

  fn2(index){
    console.log(index)
    var a = [...this.state.todos]
    a.splice(index,1)
    this.setState({
      todos:a
      
    })
  }

}

export default TodoApp;
