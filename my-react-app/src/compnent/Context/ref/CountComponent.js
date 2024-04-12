import React,{useEffect, useRef, useState} from "react"
export default function CountComponent (props){
  const[inputVal,setInput]= useState('')
  const count=useRef(0)
  useEffect(()=>{
    count.current= count.current+1
  })
    return (
<div className="App"> 
<input type="text" value ={inputVal} onChange={(e)=>setInput(e.target.value)}/>
<h1>Render count :{count.current}</h1>

</div>    )//if we use useRef we can see the count and stop infinire loop.if we just use usestate it will go to infine loop .. check counter program anfd compare it
  }

