import React, { useReducer } from 'react'

export default function CounterReducer(props) {
    const [count,dispatch]=useReducer(reducer,initialState)
    const initialState=0;
    const reducer=(state,action)=>{
        switch(action){
            case "add":
                return state+1;
            case "substract":
                return state-1;
            case "reset":
                    return 0;
            default:
                throw new Error("Invalid action")
        }
    }
  return (
    <div className='App'>
        <h2>{count}</h2>
        <button onClick={()=>dispatch("add")}>Add</button>
        <button onClick={()=>dispatch("substract")}>substract</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}
