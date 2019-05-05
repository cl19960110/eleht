import React from 'react';
import ReactDOM from 'react-dom';//只有这里才需要引入react-dom
/* import './index.css';
import App from './App'; */

/* //使用 jsx
ReactDOM.render(
  <div>
    <h1>Hello React</h1>
    <p>屁</p>
  </div>, 
  document.getElementById('root'));
 */

 //使用 createElement
 ReactDOM.render(
   React.createElement('div',null,[
    React.createElement('h1',{key:'100',id:'box'},'h1'),
    React.createElement('p',{key:'101'},'屁')
   ]
   ),
   document.getElementById('root')
 )
