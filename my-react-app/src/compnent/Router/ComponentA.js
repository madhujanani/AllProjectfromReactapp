import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
    let navigate=useNavigate()
    function handleClick(){
        navigate('/')
    }
  return (
    <div className='App'>
        <h1> This is Component A</h1>
        <buttton onClick={handleClick}>go home</buttton>
    </div>
  )
}
// use navigate should be used only inside a component that is part of the route