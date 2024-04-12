import React, { useEffect, useState,useRef } from 'react'

export default function StateChange(props) {
  const [inputVal,setInputVal]=useState('')
  const previousValue =useRef('')
  useEffect(()=>{
    previousValue.current =inputVal;
  })
  return (
    <div className='App'>
      <input 
      type="text"
      value={inputVal}
      onChange={(e)=>setInputVal(e.target.value)}
      />
      <h2>currentvalue:{inputVal}</h2>
      <h2>Previous value:{previousValue.current}</h2> 
    </div>
  )
}

