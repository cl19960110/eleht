import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg' //图片需要用模块引入后使用

const isShow = true
const tem = '<h1>登录</h1>'
ReactDOM.render(
  <div>
    {/* <img src={logo} alt="111"/> */}
    <label htmlFor="hhh">点我啊</label>
    <input id='hhh' type="text"/>
    {
      isShow ? <button>登录</button> : ''
    }
    <div dangerouslySetInnerHTML={{__html:tem}}></div>
  </div>,
  document.getElementById('root')

)
