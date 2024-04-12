import React from 'react'
import useCounterHook from './useCounterHook'

export default function SecondComponent(props) {
    const clickedbtnCounter=useCounterHook(0,"SecondComponent")

  return (
    <div> <h1>This is Second Component</h1>
    <button onClick={clickedbtnCounter}>click here</button></div>
  )
}
