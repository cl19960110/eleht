import React from 'react'

class Zj extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.aa?this.props.aa:666}</h1>
      </div>
    )
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps);
    if(nextProps.aa!==''){
      return true
    }else{
      
    }
    return false
  }
}

export default Zj
