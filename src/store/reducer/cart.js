//cart 相关的数据
const defaultState = ['香蕉','苹果','西瓜','花蝴蝶']
export default (state=defaultState,action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
  
    default:
      break;
  }
  return newState
}


