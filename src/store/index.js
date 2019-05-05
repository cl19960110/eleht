//仓库的主文件
import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer/index'


//createStore(reducer) 用来创建仓库 里面的参数就是 reducer
const store = createStore(reducer,applyMiddleware(thunk,logger))

export default store;

//哪个组件要使用仓库，就要在组件内引入仓库
