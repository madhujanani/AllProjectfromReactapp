//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import MyComponent from './compnent/MyComponent';
import MyClassComponent321 from './compnent/MyClassComponent'
import Dynamicrender from './compnent/DynamicRender/Dynamicrender'
import {styles} from './compnent/Style'
import styled from "styled-components"


const StyledButton =styled.button`
color: white;
background-color:red;
font-size:15px;
padding:10px;
margin:10px;
fontFamily:Arial`;

function App() {
  const[user,setUser]=useState('usera')
  const myStyle ={
    color: 'white',
    backgroundColor:'blue',
    padding:"20px",
    fontFamily:'Arial'
  }
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
          <h1  style={{backgroundColor:'yellowgreen'}}>This is my main component through inline</h1> //inline


    
     <MyComponent MyName="Madhu" LastName ="janani" id="4567"/> {/*inherited  function 
      <MyClassComponent321 MyCity="Milwaukee" id="7777"/>  inherited class */}
      <h1  style={myStyle}>This is my main component through internal</h1>//{/* internal*/}

       <h1  style={styles.Header}>This is my main component through external</h1> {/* external*/}
       <div style={styles.TodoComponent}>
      <Dynamicrender user={user}/>
      < StyledButton onClick={()=>setUser('usera')}>Switch to User A</ StyledButton>{/*styled component */}
      < StyledButton onClick={()=>setUser('userb')}>Switch to User B</ StyledButton>
      </div>

        </div>
  );
}

export default App;
