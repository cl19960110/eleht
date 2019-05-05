import React from 'react'
import ReactDOM from 'react-dom'


class Hsd extends React.Component{
  render(){
    return(
      <>
      华氏度：<input name='华氏度' type="text" value={this.props.Val} onChange={this.props.fn}/>
      </>
    )
  }
}


class Ssd extends React.Component{
  render(){
    return(
      <>
      摄氏度：<input name='摄氏度' type="text" value={this.props.Val} onChange={this.props.fn1}/>
      </>
    )
  }
}

class App extends React.Component{
  constructor(){
    super()
    this.state={
      hVal:'',
      sVal:''
    }
    this.fn=this.fn.bind(this)
    this.fn1=this.fn1.bind(this)
  }
  render(){
    return(
      <div >
        <Hsd Val={this.state.hVal} fn={this.fn}></Hsd>
        <br/>
        <Ssd Val={this.state.sVal} fn1={this.fn1}></Ssd>
      </div>
    )
  }

  fn(e){
    var v = Number(e.target.value)
    if(isNaN(v)){
      v=''
    }
    console.log(e.target.name)
    this.setState({
      sVal:(v - 32) * 5 / 9,
      hVal:e.target.value
    })
   
  }

  fn1(e){
    var v = Number(e.target.value)
    if(isNaN(v)){
      v=''
    }
    console.log(e.target.name)
    this.setState({
      sVal:e.target.value,
      hVal:(v * 9 / 5) + 32
    })
   
  }

  

}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
