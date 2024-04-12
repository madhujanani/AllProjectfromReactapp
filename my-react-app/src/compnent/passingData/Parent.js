import React,{useState}from 'react'
import Child from './Child'
export default function Parent() {
    const [data,setData]=useState('');

    const ChildToParentt =(childData)=>{
      setData(childData)  
    }
      

  return (
    <div className='App'>
        Data :{data}
        <div>
          <Child ChildToParent={ChildToParentt} /> {/*childtoparent our own name ,props namme which we are passing,check main.js*/}
        </div>
    </div>
  )
}
