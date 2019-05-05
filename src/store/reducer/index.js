//reducer 函数 暴露出去一个函数即可

//当项目引入仓库的时候，这个仓库的 reducer 函数会执行一次初始化

//还可以主动的在初始化的时候给仓库一些默认的状态
import {combineReducers} from 'redux'
import todo from './app'
import cart from './cart';
//使用 combineReducers

export default combineReducers({
  todos:todo,
  carts:cart
})



//原始方法
// export default (state={},action) => {
//   return {
//     todos:todo(state.todos,action),
//     carts:cart(state.carts,action)
//   }
// }
//设置仓库的默认状态，类型不限 一般是 字符串 数组 对象
// const defaultState = {
//   todos:['吃饭','睡觉','打豆豆'],
//   carts:['香蕉','苹果','西瓜','花蝴蝶']
// }
// export default (prevState = defaultState,action) => {//prevState上一次仓库的状态 action 当前的动作
//   //根据不同的 action.type 做相应的操作
//   console.log(prevState,action)

//   switch (action.type) {
//     case 'ADDTODO':
//     // prevState.todos.push(action.text); 不能直接修改prevState，需要 return 一份新的 state
//     var newState = {todos:[...prevState.todos,action.text]}
//     /* //也可以这样进行深拷贝再操作
//     var newState = JSON.parse(JSON.stringify(prevState));
//     newState.todos.push(action.text) */
//     return newState

//     case 'DELTODO':
//     var newStater = {todos:[...prevState.todos]}
//     newStater.todos.splice(action.index,1)
//     return newStater
  
//     default:
//     return prevState
//   }


//   //return 就是改变仓库
 
// }
