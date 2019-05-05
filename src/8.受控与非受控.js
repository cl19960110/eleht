import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      Val : '',
      pVal : '',
      selectInfo:"",
      radioChecked:'男',
     
      isOK:[],
      okok:false

    }
    
  }
  render(){
    return (
      <div>
        <input type="text" placeholder='用户名' value={this.state.Val} onChange={this.fn1.bind(this)}/>
        <input type="text" placeholder='密码' value={this.state.pVal} onChange={this.fn2.bind(this)}/>
        <hr/>
        <input type="text" ref='aa' defaultValue='啊哈哈哈'/>
        <input type="text" ref={(el) => {this.hhhh=el}}/>
        <hr/>
        <select value={this.state.selectInfo} onChange={this.selectChange.bind(this)}>
          <option disabled value=''>请选择</option>
          <option value='AA'>A</option>
          <option value='BB'>B</option>
          <option value='CC'>C</option>
        </select>
        <hr/>
        <select defaultValue='' ref='ll'>
          <option disabled value=''>请选择</option>
          <option value='AA'>A</option>
          <option value='BB'>B</option>
          <option value='CC'>C</option>
        </select>
        <hr/>
        {/* 单选框通过 checked 决定是否被选中 */}
        <input type="radio" name='sex' value='男' checked={this.state.radioChecked === '男'} onChange={this.radioChange.bind(this)}/>男
        <input type="radio" name='sex' value='女' checked={this.state.radioChecked === '女'} onChange={this.radioChange.bind(this)}/>女
        <hr/>
        <input type="radio" name='666' value='男' ref='nan' />男
        <input type="radio" name='666' value='女' defaultChecked={true} ref={(el) => {this.nv=el}}/>女
        <hr/>
        <input type="checkbox" value='吃饭' checked={this.state.isOK.indexOf("吃饭") > -1} onChange={this.checkboxChg.bind(this)}/>吃饭
        <input type="checkbox" value='睡觉' checked={this.state.isOK.indexOf("睡觉") > -1} onChange={this.checkboxChg.bind(this)}/>睡觉
        <hr/>
        <textarea></textarea>
        <hr/>
        <input type="checkbox" checked={this.okok} onChange={this.okokChg.bind(this)}/>同意用户协议
        <br/><button onClick={this.fn3.bind(this) } disabled={!this.state.okok}>登录</button>
      </div>
    )
  }


  okokChg(){
    this.setState({
      okok:!this.state.okok
    })
  }

 
  checkboxChg(e){ //被点击后会将 value 保存到数组
    var a = e.target.value
    var b = [...this.state.isOK]
    console.log(e.target.checked)
    
    if(this.state.isOK.indexOf(a)>-1){ //表示该框已选中，再次点击就是让他不选中，所以把数组中的这个 value 删掉
      var index = this.state.isOK.findIndex(item => item ===a)
      console.log(index)
      b.splice(index,1)
      this.setState({
        isOK:b
      })
    }else{
      this.setState(() => ({  //表示该框没有被选中，点击就是想让他被选中，所以把 value 加到数组中
        isOK:b.concat(a)
      }))

    }


   

  }

 
 radioChange(e){
   console.log(e.target.value)
  var a = e.target.value
  this.setState(() => ({
    radioChecked:a
  }))

 }
  fn1(e){
    var a = e.target.value;
    this.setState({
      Val:a
    })

  }

  fn2(e){
    var a = e.target.value;
    this.setState({
      pVal:a
    })
  }

  fn3(){
    console.log(this.nv.checked)
    if(this.nv.checked){

      console.log(this.nv.value)
    }else if(this.refs.nan.checked){
      console.log(this.refs.nan.value)
    }

  }

  selectChange(e){
    console.log(e.target.value)
    var a = e.target.value
    this.setState(() =>{
      return {
        selectInfo:a
      }
    })
  }
}


ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
