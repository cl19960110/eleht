//app 相关的数据
const defaultState = ['吃饭','睡觉','打豆豆']
export default (state=defaultState,action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'ADDTODO':
    newState.push(action.text)
      break;
  
    default:
      break;
  }
  return newState
}
