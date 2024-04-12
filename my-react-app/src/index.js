import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './compnent/Counter';
import MyComponent123 from './compnent/MyComponent';
import MyClassComponent123 from './compnent/MyClassComponent'
import Main123 from './compnent/Main'
import  Component1  from './compnent/Context/Component1';
import CountComponent123 from './compnent/Context/ref/CountComponent'
import Header123 from './compnent/Header'
import InputRef from './compnent/Context/ref/InputRef'
import Statechange from './compnent/Context/ref/StateChange'
import Memotest from './compnent/memo/MemoTest'
import FirstComponent from './compnent/costomHook/FirstComponent';
import Parent from './compnent/passingData/Parent';
import child from './compnent/passingData/Parent'
import TwoWayBind from './compnent/siblings/TwoWay/TwoWayBind'
import SecondComponent from './compnent/costomHook/SecondComponent';
import Parentt1 from './compnent/siblings/Parentt1'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './compnent/Router/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
       
       <Home/>

    {/*remove react.strict mode to stop counter <></>*/}
     {/* < Component1/>
     <Parentt1/>
    
      <FirstComponent/>
        <SecondComponent/>
       <App /> 
       <Counter />

        <Parent/>
        <TwoWayBind/>
       <Counter />
      <Main123/>    
      <Memotest/>
      <twoWayBind/>   
      <Component1/>
      <Header123/>
       
      <parent/>
      <FirstComponent/>
        <Memotest/>
        <Statechange/>
    
    <CountComponent123/>
    <InputRef />     
      <Counter /> 
    <Header123/>
    <MyComponent123/> 
    <MyClassComponent123/>
    */}
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
