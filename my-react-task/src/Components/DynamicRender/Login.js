import React, { useState } from 'react';
import DynamicRender from './DynamicRender';

export default function Login() {
    const [username, setUserName ] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState('welcome');
    

    const handleSubmit =(event) =>{
        event.preventDefault();
        if(username == "helloreact" && password== "12345"){
            setUser("home") // check dynamic render.js
            console.log(user)
        }
        else{
            setUser("invalidCred")
            console.log(user)
        }
    }

    return (
        <div>
            <h1>Login Details</h1>
            <label>UserName</label>
            <input type ="text" value ={username} placeholder ="enter userName"
            onChange ={(event)=>setUserName(event.target.value)}/><br></br>
            <br></br>
            
            <label>Password</label>
            <input type ="text" value ={password}  placeholder ="enter Password"
            onChange ={(event) => setPassword(event.target.value)}/><br></br>
            <br></br>  
            <button onClick={handleSubmit}>Login</button>
            
        <DynamicRender  User = {user} />
        
    </div>
    )
}


