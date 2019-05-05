import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//函数的组件
function Hello(props){
  console.log(props)//能得到组件使用时传递的参数
  return (
    <div>
    <div>{props.name}</div>
    <World name='张三' ></World>
    </div>
  )
}

//类的组件
class World extends React.Component{
  render(){
    return (
      <div>
        <h1>hhhhh</h1>
        <h1>{this.props.name}</h1>
        {this.props.child}

      </div>
    )
  }
}

//组件的props的校验(先安装 prop-types 模块)
World.propTypes = {//组件名.propTypes
  name:PropTypes.string, //prop-types模块.类型
  child:PropTypes.element
}

//组件的props默认值
World.defaultProps = {  //组件名.defaultProps
  child:<h1>6666666666</h1>,
  hhh:'kkkkk'
}



ReactDOM.render(
  <Hello name='展示' age={18}></Hello>,
  document.getElementById('root')
)
