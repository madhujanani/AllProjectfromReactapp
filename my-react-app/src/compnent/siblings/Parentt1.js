import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
export default function Parentt1() {
  const [message,setMessage]=useState('');
  return (
    <div className='App'>
      <Child1 message={message}/>
      <Child2 setMessage={setMessage}/>
    </div>
  )
}
