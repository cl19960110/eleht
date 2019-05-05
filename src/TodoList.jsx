import React from 'react'
import Zj from './zj.jsx'


class TodeList extends React.Component{
  constructor(){
    super();
    this.state = {
      inputValue : '',
      list: []
    }
  }
  componentWillMount(){
    console.log('组件挂载前')
  }

  render(){
    console.log('组件渲染')
    return (
      <div>
        <div>
        <input type="text" value={this.state.inputValue} onChange={this.fn.bind(this)}/>
        <button onClick={this.AddClick.bind(this)}>ADD</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <li key={index} onClick={this.deleteLi.bind(this,index)}>{item}</li>
              )
            })
          }
         {/*  {this.state.list.map((item,index) => {
            return (<li key={index}>{item}</li>)
          })} */}
        </ul>
        <Zj aa={this.state.inputValue}/>
      </div>
    )
  }
   
  componentDidMount(){
    console.log('组件挂载完成')
  }

  componentWillReceiveProps(){
    console.log('组件将接收props')
  }

  shouldComponentUpdate(){
    console.log('更新吗你？？？？')
    return true
  }

  componentWillUpdate(){ //state 或 props 即将更新 需要 shouldComponentUpdate 返回 true 才能进入
    console.log('组件将更新')
  }

  componentDidUpdate(){ //state 或 props 完成更新
    console.log('组件完成更新')
  }

  fn(e){
    const value = e.target.value
    this.setState(() => ({
      inputValue : value
    }))
  }
  AddClick(){
    this.setState({
      list:this.state.list.concat(this.state.inputValue),
      inputValue:''
    })
  }

  deleteLi(index){
    var a = [...this.state.list]
    a.splice(index,1)
    this.setState({
      list:a
    })

  }
}

export default TodeList;
