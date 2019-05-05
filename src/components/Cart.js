import React from 'react'
import store from '../store/index'

class Cart extends React.Component{
  constructor(){
    super();
    this.state={
      carts:store.getState().carts
    }

    store.subscribe(() => {
      this.setState({
        carts:store.getState().carts
      })
    })
  }
  render(){
    return(
      <div>
        <h2>购物车</h2>
        <ul>
          {/* <li>香蕉</li>
          <li>苹果</li>
          <li>西瓜</li> */}
          {
            this.state.carts.map((item,index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Cart;
