import React from 'react'

export default function Child2({setMessage}) {

    const onButtonClick =(changeMsg)=>{
     
     if (changeMsg==='Message from child2') {
      setMessage(`${changeMsg} ======= matched`)
      } 
      else{
        setMessage(`${changeMsg} ======= sorry mismatched`)
      }
      } 
      
  
  return (
    <div>
        <button onClick={()=>onButtonClick('Message2 from child2')}>Child 2</button>
    </div>
  )

  }