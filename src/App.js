import React from 'react';
import logo from './logo.svg';
//webpack 的图片，都需要将图片使用 模块的方式引入进来（仅限项目中的图片）
import './App.css';

//函数的方式定义组件，return 出去的就是组件内容
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ？？？？？？？？？？？？？？？？？
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//暴露组件
export default App;
