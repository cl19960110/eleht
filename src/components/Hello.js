import React from 'react'

import store from '../store/index'
console.log(store.getState().todos)

class Hello extends React.Component{
  constructor(){
    super();
    this.state={
      lists:store.getState().todos
    }

    //redux 仓库发生变化时，lists 并不会跟着改变
    //如果需要跟随变化，需要监听仓库的改变
    store.subscribe(() => {
      this.setState({
        lists:store.getState().todos,
      })
    })



  }

  render(){
    return(
      <div>
        <h1>Hello Redux</h1>

        <ul>
          {
            this.state.lists.map((item,index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
        
      </div>
    )
  }
}



export default Hello
