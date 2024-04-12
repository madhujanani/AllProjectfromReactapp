import React ,{useRef}from 'react'

export default function InputRef(props) {
    const inputElement =useRef();
  return (
    <div>
      <input type="text" ref={inputElement} value=""/>
      <button onClick={(()=>{
        inputElement.current.focus();

      })}>Focus Input</button>
    </div>
  )
}

