import React from 'react'
//引入仓库
import store from '../store/index'



//引入动作派发的对象
import {addTODO , delTODO} from '../store/actions/index'

//通过 store.getState() 来获取仓库的状态

//console.log(store.getState().todos)

class App extends React.Component{
  constructor(){
    super();
    this.state={
      list:store.getState().todos,
      inputVal:''
    }

    store.subscribe(() => {
      this.setState({
        list:store.getState().todos,
      })
    })

    this.Del = this.Del.bind(this)
    this.onKey = this.onKey.bind(this)
    
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.inputVal} onChange={this.fnnn.bind(this)} onKeyDown={this.onKey}/>
        <button onClick={this.Add.bind(this)}>ADD</button>

        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <li key={index} onClick={this.Del.bind(null,index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  onKey(e){
    if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
      this.Add()
 }
  }
  Del(index){
    store.dispatch(delTODO(index))
  }
  fnnn(e){
    var a = e.target.value
    console.log(a)
    /* this.setState((prevState) => ({
      inputVal:a
    })) */
    this.setState({
      inputVal:a
    }) 
  }
  Add(){
    //想修改仓库的 数据，就得派发一个动作
    
      
      // store.dispatch(addTODO(this.state.inputVal))
      // this.setState({
      //   inputVal:''
      // })
      store.dispatch(addTODO(this.state.inputVal)) 
  }
}
export default App;
