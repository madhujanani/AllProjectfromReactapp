import React, { useState } from 'react'
const funcCount =as;
export default function CountCallback() {
    const[count,Setcount]=useState(0);
    const[number,setNumber]=useState(0);
    const incrementCount=()=>{
        Setcount(count+1)
    }
    const DecrementCount=()=>{
        Setcount(count-1)

    }
    const DecrementNumber=()=>{
        setNumber(count-1)
    }
    const IncrementNumber=()=>{
        setNumber(count-1)

    }
    funcCount.add()

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={IncrementNumber}>IncreaseNumber</button>
      <button onClick={DecrementCount}>DecrementCounter</button>

    </div>
  )
}
