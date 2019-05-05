import React from 'react'

class TodoItem extends React.Component{
  render(){
    return (
      <li onClick={this.fn.bind(this)} index={this.props.index}>{this.props.item.name   }</li>
    )
  }
  fn(){
    this.props.fn2(this.props.index)
  }
}

export default TodoItem;
