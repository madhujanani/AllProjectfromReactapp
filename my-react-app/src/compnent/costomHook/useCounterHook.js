import React, { useEffect, useState } from 'react'


export default function useCounterHook(intializer,componentName) {
    const [counter,setCounter]=useState(intializer);
    function resetCounter(){
        setCounter(counter+1)
    }
    useEffect(()=>{
        console.log("the button of "+componentName+"is clicked "+counter+"times")
    },[counter,componentName])
    return resetCounter;
}
