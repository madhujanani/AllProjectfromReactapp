import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyClassComponent from './Components/MyClassComponent';
import Main123 from './Components/Main'
import Budget123 from './Components/BudgetClass'
import Budgetfunction123 from './Components/BbudgetFunction'
import CheckboxChange from './Components/CheckboxChange'
import Login from './Components/DynamicRender/Login';
import Home from './Components/Router/Home'
import LoginTask from './LoginFuncs/loginTask';
import log1 from './LoginFuncs/log1';
import Forgotpassword from './LoginFuncs/Forgotpassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faLock,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {library } from '@fortawesome/fontawesome-svg-core';
library.add(faUser,faEnvelope,faLock,faEye,faEyeSlash )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  

  
  
  <App />
    {/*
    
       <Forgotpassword/>
  <LoginTask/>   

     <Home/>
    <Budget123/>
    <Budgetfunction123/>
    
       <Login/>
    <Main123/> 
    <CheckboxChange/>
    <MyClassComponent/>*/} 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
