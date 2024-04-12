import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { styles } from './Style';

const Button = styled.button`
background-color:green;
color:white;
font-size:20px;
font-family:Arial;
`;

export default function Login() {
 
const [username, setUserName ] = useState("");
const [password,setPassword] = useState("");
const [user,setUser] = useState('');

let navigate=useNavigate()

const handleSubmit =(event) =>{
    event.preventDefault();
    if(username == "helloreact" && password== "12345"){
        setUser("home")
        navigate('/')
        console.log(user)
    }
    else{
        setUser("invalidCred")
        console.log(user)
        navigate('/compB')

    }
}
return (
  
    <div style={styles.TodoComponent} className='App'>
      <form onSubmit={handleSubmit}>
        <h1>Login Details</h1>
        <label>UserName</label>
        <input  style={styles.Header}  type ="text" value ={username} placeholder ="enter userName"
        onChange ={(event)=>setUserName(event.target.value)}/><br></br>
        <br></br>
        
        <label>Password</label>
        <input  style={styles.Header} type ="text" value ={password}  placeholder ="enter Password"
        onChange ={(event) => setPassword(event.target.value)}/><br></br>
        <br></br>            
        <Button>Login</Button>
        </form>
</div>

)
}
