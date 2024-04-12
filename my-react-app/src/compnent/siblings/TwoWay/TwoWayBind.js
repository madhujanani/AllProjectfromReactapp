import React ,{useState}from 'react'

export default function TwoWayBind(props) {
    const [name,setname]=useState('');

    const handleChange =(e)=>{
        setname(e.target.value)
    }
  return (

    <div>
        <input type ='text'placeholder='Input name' onChange={handleChange} value={name}/>
        <h2>Name:{name}</h2>
    </div>
  )
}
