import React from 'react';
import { useState,useEffect } from 'react';
function Counter (props){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect is called")
        setTimeout(()=>{
            setCount(count=>count+1)
        },1000);
    },[])   //[] will srop count .try with and without []

    return(
        <div className='mt-5 px-3 py-4'>
            <h1 className='h1 display-1'>Counter component</h1>
            <h1 className='h1 display-1 mt-5 mb-3'>  i have rendered {count} times</h1>
            <div className='mt-5'>
                <button className='btn btn-primary btn-lg'>Count</button>

            </div>
        </div>
     );
    };
export default Counter;