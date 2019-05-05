//引入action的动作  (可以避免字符串拼写错误引起的问题)
import { DELTODO,ADDTODO } from '../actionsType/index'

//返回派发动作的对象写在这  （为了方便管理，也可以不写在这）

export const addTODO = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type:ADDTODO,
        text
      })  
    }, 200);  
  }
}
export const delTODO = (index) => {
  return {
    type:DELTODO,
    index
  }
}
