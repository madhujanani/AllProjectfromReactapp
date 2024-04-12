import React from 'react'
const myStyle={
  color:'black',
  backgroundColor:' lightblue',padding:'20px',
  fontFamily:'Arial',boxSizing:'20px', textAlign:'Center',width:'30%',height:'40%' 
}

export default function () {
  return (
    <div className ='App' style={myStyle}>
        <h3>Valid Credentials<br></br>
        <h4>===================</h4>
      username  :   helloreact<br></br>
      password  :  12345</h3>
    </div>
  )
}
